export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string | null
          full_name: string | null
          avatar_url: string | null
          company_name: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email?: string | null
          full_name?: string | null
          avatar_url?: string | null
          company_name?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string | null
          full_name?: string | null
          avatar_url?: string | null
          company_name?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      invoices: {
        Row: {
          id: string
          user_id: string | null
          invoice_number: string
          company_name: string | null
          company_email: string | null
          company_phone: string | null
          company_address: string | null
          company_gst: string | null
          company_logo_url: string | null
          logo_as_watermark: boolean
          client_name: string
          client_email: string | null
          client_phone: string | null
          client_address: string | null
          invoice_date: string
          due_date: string | null
          items: Json
          subtotal: number
          tax_amount: number
          discount_amount: number
          total_amount: number
          template: string
          notes: string | null
          terms: string | null
          status: 'draft' | 'sent' | 'paid' | 'cancelled'
          share_token: string | null
          is_public: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          invoice_number: string
          company_name?: string | null
          company_email?: string | null
          company_phone?: string | null
          company_address?: string | null
          company_gst?: string | null
          company_logo_url?: string | null
          logo_as_watermark?: boolean
          client_name: string
          client_email?: string | null
          client_phone?: string | null
          client_address?: string | null
          invoice_date?: string
          due_date?: string | null
          items?: Json
          subtotal?: number
          tax_amount?: number
          discount_amount?: number
          total_amount?: number
          template?: string
          notes?: string | null
          terms?: string | null
          status?: 'draft' | 'sent' | 'paid' | 'cancelled'
          share_token?: string | null
          is_public?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          invoice_number?: string
          company_name?: string | null
          company_email?: string | null
          company_phone?: string | null
          company_address?: string | null
          company_gst?: string | null
          company_logo_url?: string | null
          logo_as_watermark?: boolean
          client_name?: string
          client_email?: string | null
          client_phone?: string | null
          client_address?: string | null
          invoice_date?: string
          due_date?: string | null
          items?: Json
          subtotal?: number
          tax_amount?: number
          discount_amount?: number
          total_amount?: number
          template?: string
          notes?: string | null
          terms?: string | null
          status?: 'draft' | 'sent' | 'paid' | 'cancelled'
          share_token?: string | null
          is_public?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          slug: string
          title: string
          excerpt: string | null
          content: string
          author_id: string | null
          published: boolean
          published_at: string | null
          seo_title: string | null
          seo_description: string | null
          seo_keywords: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          title: string
          excerpt?: string | null
          content: string
          author_id?: string | null
          published?: boolean
          published_at?: string | null
          seo_title?: string | null
          seo_description?: string | null
          seo_keywords?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          excerpt?: string | null
          content?: string
          author_id?: string | null
          published?: boolean
          published_at?: string | null
          seo_title?: string | null
          seo_description?: string | null
          seo_keywords?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
