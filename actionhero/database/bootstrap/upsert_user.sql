DO
$body$
BEGIN
   IF NOT EXISTS (
      SELECT *
      FROM   pg_catalog.pg_user
      WHERE  usename = 'db_development') THEN

      CREATE ROLE db_development LOGIN
        ENCRYPTED PASSWORD 'db_development'
        SUPERUSER INHERIT CREATEDB CREATEROLE NOREPLICATION;
   END IF;
END
$body$