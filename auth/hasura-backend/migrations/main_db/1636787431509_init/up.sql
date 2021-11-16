SET check_function_bodies = false;
CREATE TABLE public.auth (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "firstName" character varying NOT NULL,
    "lastName" character varying NOT NULL,
    username character varying NOT NULL,
    password text NOT NULL,
    email text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE FUNCTION public.checkusername(username text) RETURNS SETOF public.auth
    LANGUAGE sql STABLE
    AS $$
    SELECT *
    FROM auth au
    WHERE
      au.email = username or au.username = username
$$;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;

ALTER TABLE ONLY public.auth
    ADD CONSTRAINT auth_email_key UNIQUE (email);
ALTER TABLE ONLY public.auth
    ADD CONSTRAINT auth_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.auth
    ADD CONSTRAINT auth_username_key UNIQUE (username);
CREATE TRIGGER set_public_auth_updated_at BEFORE UPDATE ON public.auth FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_auth_updated_at ON public.auth IS 'trigger to set value of column "updated_at" to current timestamp on row update';
