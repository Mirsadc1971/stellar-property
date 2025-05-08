export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      appointments: {
        Row: {
          client_id: string
          created_at: string | null
          end_time: string
          id: string
          notes: string | null
          service_type: string
          start_time: string
          status: string | null
          team_member_id: string
        }
        Insert: {
          client_id: string
          created_at?: string | null
          end_time: string
          id?: string
          notes?: string | null
          service_type: string
          start_time: string
          status?: string | null
          team_member_id: string
        }
        Update: {
          client_id?: string
          created_at?: string | null
          end_time?: string
          id?: string
          notes?: string | null
          service_type?: string
          start_time?: string
          status?: string | null
          team_member_id?: string
        }
        Relationships: []
      }
      client_messages: {
        Row: {
          client_id: string
          content: string
          created_at: string | null
          id: string
          staff_id: string
        }
        Insert: {
          client_id: string
          content: string
          created_at?: string | null
          id?: string
          staff_id: string
        }
        Update: {
          client_id?: string
          content?: string
          created_at?: string | null
          id?: string
          staff_id?: string
        }
        Relationships: []
      }
      conversations: {
        Row: {
          created_at: string
          id: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      dui_arrests: {
        Row: {
          arrest_date: string
          bond_amount: string | null
          charges: string
          city: string
          county: string
          created_at: string
          full_name: string
          id: string
          mugshot_url: string | null
        }
        Insert: {
          arrest_date: string
          bond_amount?: string | null
          charges: string
          city: string
          county: string
          created_at?: string
          full_name: string
          id?: string
          mugshot_url?: string | null
        }
        Update: {
          arrest_date?: string
          bond_amount?: string | null
          charges?: string
          city?: string
          county?: string
          created_at?: string
          full_name?: string
          id?: string
          mugshot_url?: string | null
        }
        Relationships: []
      }
      Eric: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      invoices: {
        Row: {
          client_id: string
          id: string
          issued_at: string
          status: string | null
          team_member_id: string
          total_amount: number
          updated_at: string
        }
        Insert: {
          client_id: string
          id?: string
          issued_at?: string
          status?: string | null
          team_member_id: string
          total_amount: number
          updated_at?: string
        }
        Update: {
          client_id?: string
          id?: string
          issued_at?: string
          status?: string | null
          team_member_id?: string
          total_amount?: number
          updated_at?: string
        }
        Relationships: []
      }
      lawyer_contacts: {
        Row: {
          contact_method: string
          contact_status: string
          created_at: string
          dui_arrest_id: string
          id: string
          lawyer_name: string
          notes: string | null
          updated_at: string
        }
        Insert: {
          contact_method: string
          contact_status?: string
          created_at?: string
          dui_arrest_id: string
          id?: string
          lawyer_name: string
          notes?: string | null
          updated_at?: string
        }
        Update: {
          contact_method?: string
          contact_status?: string
          created_at?: string
          dui_arrest_id?: string
          id?: string
          lawyer_name?: string
          notes?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lawyer_contacts_dui_arrest_id_fkey"
            columns: ["dui_arrest_id"]
            isOneToOne: false
            referencedRelation: "dui_arrests"
            referencedColumns: ["id"]
          },
        ]
      }
      lawyer_notifications: {
        Row: {
          dui_arrest_id: string
          email_clicked_at: string | null
          email_opened_at: string | null
          email_sent_at: string
          email_status: string
          id: string
          lawyer_id: string
        }
        Insert: {
          dui_arrest_id: string
          email_clicked_at?: string | null
          email_opened_at?: string | null
          email_sent_at?: string
          email_status?: string
          id?: string
          lawyer_id: string
        }
        Update: {
          dui_arrest_id?: string
          email_clicked_at?: string | null
          email_opened_at?: string | null
          email_sent_at?: string
          email_status?: string
          id?: string
          lawyer_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lawyer_notifications_dui_arrest_id_fkey"
            columns: ["dui_arrest_id"]
            isOneToOne: false
            referencedRelation: "dui_arrests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lawyer_notifications_lawyer_id_fkey"
            columns: ["lawyer_id"]
            isOneToOne: false
            referencedRelation: "lawyers"
            referencedColumns: ["id"]
          },
        ]
      }
      lawyers: {
        Row: {
          city: string
          county: string
          created_at: string
          email: string
          full_name: string
          id: string
          phone: string | null
          rating: number | null
          receive_notifications: boolean
          specialization: string
          subscription_status: string
          updated_at: string
          years_experience: number | null
        }
        Insert: {
          city: string
          county: string
          created_at?: string
          email: string
          full_name: string
          id?: string
          phone?: string | null
          rating?: number | null
          receive_notifications?: boolean
          specialization: string
          subscription_status?: string
          updated_at?: string
          years_experience?: number | null
        }
        Update: {
          city?: string
          county?: string
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          phone?: string | null
          rating?: number | null
          receive_notifications?: boolean
          specialization?: string
          subscription_status?: string
          updated_at?: string
          years_experience?: number | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          content: string
          conversation_id: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_fk"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          id: string
          invoice_id: string
          paid_at: string
          paid_by: string
          paid_to: string
        }
        Insert: {
          amount: number
          id?: string
          invoice_id: string
          paid_at?: string
          paid_by: string
          paid_to: string
        }
        Update: {
          amount?: number
          id?: string
          invoice_id?: string
          paid_at?: string
          paid_by?: string
          paid_to?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          created_at: string | null
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_owner_role: {
        Args: { user_id_param: string }
        Returns: boolean
      }
      find_closest_lawyers: {
        Args: {
          arrest_city: string
          arrest_county: string
          limit_count: number
        }
        Returns: {
          city: string
          county: string
          created_at: string
          email: string
          full_name: string
          id: string
          phone: string | null
          rating: number | null
          receive_notifications: boolean
          specialization: string
          subscription_status: string
          updated_at: string
          years_experience: number | null
        }[]
      }
      find_nearby_lawyers: {
        Args: { arrest_city: string; arrest_county: string }
        Returns: {
          city: string
          county: string
          created_at: string
          email: string
          full_name: string
          id: string
          phone: string | null
          rating: number | null
          receive_notifications: boolean
          specialization: string
          subscription_status: string
          updated_at: string
          years_experience: number | null
        }[]
      }
      get_user_role: {
        Args: { user_id: string }
        Returns: Database["public"]["Enums"]["user_role"]
      }
      is_owner: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      app_role: "owner" | "webmaster"
      user_role: "client" | "technician" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["owner", "webmaster"],
      user_role: ["client", "technician", "admin"],
    },
  },
} as const
