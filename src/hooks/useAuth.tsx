import { useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN') {
          setSession(session);
          setUser(session?.user ?? null);
          navigate('/');
        } else if (event === 'SIGNED_OUT') {
          setSession(null);
          setUser(null);
          navigate('/auth');
        }
        setLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
      if (!session) {
        navigate('/auth');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been logged out of your account",
      });
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: "There was a problem signing you out. Please try again.",
      });
    }
  };

  const isEmailVerified = (): boolean => {
    return user?.email_confirmed_at != null;
  };

  const sendVerificationEmail = async (): Promise<boolean> => {
    try {
      if (!user?.email) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "No email address found for your account",
        });
        return false;
      }

      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: user.email,
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Error sending verification email",
          description: error.message,
        });
        return false;
      }

      toast({
        title: "Verification email sent",
        description: "Please check your inbox and verify your email address",
      });
      return true;
    } catch (error) {
      console.error('Error sending verification email:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send verification email. Please try again later.",
      });
      return false;
    }
  };

  // This function can be used to require authentication for specific pages
  const requireAuth = (callback?: () => void) => {
    if (!session && !loading) {
      toast({
        variant: "destructive",
        title: "Authentication required",
        description: "Please sign in to access this page",
      });
      navigate('/auth');
      return false;
    }
    if (callback && session) {
      callback();
    }
    return true;
  };

  // Function to require email verification
  const requireVerifiedEmail = (callback?: () => void) => {
    if (!requireAuth()) {
      return false;
    }
    
    if (!isEmailVerified()) {
      toast({
        variant: "destructive",
        title: "Email verification required",
        description: "Please verify your email address to access this feature",
      });
      return false;
    }
    
    if (callback && isEmailVerified()) {
      callback();
    }
    return true;
  };

  return {
    user,
    session,
    loading,
    signOut,
    requireAuth,
    requireVerifiedEmail,
    isAuthenticated: !!session,
    isEmailVerified,
    sendVerificationEmail,
  };
}
