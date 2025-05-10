import {createClient} from '@supabase/supabase-js';

const SUPABASE_URL='https://iiwgyzojhqzszoazfqfj.supabase.co'
const SUPABASE_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlpd2d5em9qaHF6c3pvYXpmcWZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5MTMzODksImV4cCI6MjA2MjQ4OTM4OX0.2qaKAddRF0ygreO0-ltwHOX3YzKhPskjarQ19R7A45k';

export const supabase = createClient(SUPABASE_URL,SUPABASE_KEY);