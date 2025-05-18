
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

  return {
    user,
    session,
    loading,
    signOut,
    requireAuth,
    isAuthenticated: !!session,
  };
}
