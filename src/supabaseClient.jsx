import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://arkxvokiskiivsolwsac.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFya3h2b2tpc2tpaXZzb2x3c2FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5OTE1NDAsImV4cCI6MjA2MDU2NzU0MH0.0WrlBAE7acFyuwfCT4pM1g-_h02zkd2Anqknlh5c0rg';

export const supabase = createClient(supabaseUrl, supabaseKey);