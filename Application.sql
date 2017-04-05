--
-- PostgreSQL database dump
--

-- Dumped from database version 9.4.5
-- Dumped by pg_dump version 9.4.5
-- Started on 2017-04-05 11:52:34

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 179 (class 3079 OID 11855)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2026 (class 0 OID 0)
-- Dependencies: 179
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 173 (class 1259 OID 19495)
-- Name: employe; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE employe (
    id integer NOT NULL,
    nom character varying(50),
    prenom character varying(50),
    date_naissance date,
    poste character varying(50),
    commentaires text
);


ALTER TABLE employe OWNER TO postgres;

--
-- TOC entry 172 (class 1259 OID 19493)
-- Name: employe_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE employe_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE employe_id_seq OWNER TO postgres;

--
-- TOC entry 2027 (class 0 OID 0)
-- Dependencies: 172
-- Name: employe_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE employe_id_seq OWNED BY employe.id;


--
-- TOC entry 175 (class 1259 OID 19504)
-- Name: projet; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE projet (
    id integer NOT NULL,
    nom character varying(50),
    importance character varying(20),
    commentaires text
);


ALTER TABLE projet OWNER TO postgres;

--
-- TOC entry 178 (class 1259 OID 19515)
-- Name: projet_en_cours; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE projet_en_cours (
    id_projet integer NOT NULL,
    nom_projet character varying(50) NOT NULL,
    id_employe integer NOT NULL,
    nom_employe character varying(50) NOT NULL
);


ALTER TABLE projet_en_cours OWNER TO postgres;

--
-- TOC entry 177 (class 1259 OID 19513)
-- Name: projet_en_cours_id_employe_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE projet_en_cours_id_employe_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE projet_en_cours_id_employe_seq OWNER TO postgres;

--
-- TOC entry 2028 (class 0 OID 0)
-- Dependencies: 177
-- Name: projet_en_cours_id_employe_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE projet_en_cours_id_employe_seq OWNED BY projet_en_cours.id_employe;


--
-- TOC entry 176 (class 1259 OID 19511)
-- Name: projet_en_cours_id_projet_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE projet_en_cours_id_projet_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE projet_en_cours_id_projet_seq OWNER TO postgres;

--
-- TOC entry 2029 (class 0 OID 0)
-- Dependencies: 176
-- Name: projet_en_cours_id_projet_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE projet_en_cours_id_projet_seq OWNED BY projet_en_cours.id_projet;


--
-- TOC entry 174 (class 1259 OID 19502)
-- Name: projet_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE projet_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE projet_id_seq OWNER TO postgres;

--
-- TOC entry 2030 (class 0 OID 0)
-- Dependencies: 174
-- Name: projet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE projet_id_seq OWNED BY projet.id;


--
-- TOC entry 1897 (class 2604 OID 19498)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY employe ALTER COLUMN id SET DEFAULT nextval('employe_id_seq'::regclass);


--
-- TOC entry 1898 (class 2604 OID 19507)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY projet ALTER COLUMN id SET DEFAULT nextval('projet_id_seq'::regclass);


--
-- TOC entry 1899 (class 2604 OID 19518)
-- Name: id_projet; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY projet_en_cours ALTER COLUMN id_projet SET DEFAULT nextval('projet_en_cours_id_projet_seq'::regclass);


--
-- TOC entry 1900 (class 2604 OID 19519)
-- Name: id_employe; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY projet_en_cours ALTER COLUMN id_employe SET DEFAULT nextval('projet_en_cours_id_employe_seq'::regclass);


--
-- TOC entry 2013 (class 0 OID 19495)
-- Dependencies: 173
-- Data for Name: employe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY employe (id, nom, prenom, date_naissance, poste, commentaires) FROM stdin;
5	DUBOIS	Chloe	1986-09-12	cadre	\N
6	MICHELLE	Lucas	1992-11-11	cadre sup	\N
7	MARTIN	Lucie	1986-03-14	maitrise	\N
8	BERNARD	Hugo	1992-08-25	technicien	\N
9	PETIT	Margaux	1994-02-20	cadre	\N
10	DURAND	Enzo	1994-02-20	maitrise	\N
11	MOREAU	Jeanne	1994-02-20	technicien	\N
12	DUPONT	Nolan	1994-02-20	cadre sup	\N
13	ROUSSEAU	Elena	1994-02-20	maitrise	\N
14	GAUTIER	Jules	1994-02-20	cadre sup	\N
15	BONNET	Ines	1994-02-20	technicien	\N
16	LAMBERT	Leo	1994-02-20	cadre sup	\N
17	HENRY	Eva	1994-02-20	technicien	\N
18	MANA	Florian	1994-02-20	cadre	\N
19	FAURE	Pauline	1993-07-03	technicien	\N
20	MERCIER	Louis	1994-02-20	maitrise	\N
21	CHEVALIER	Clara	1994-12-03	technicien	\N
22	LEROY	Arthur	1966-08-03	cadre sup	\N
23	MARCHAND	Juliette	1994-02-20	cadre sup	\N
24	MORIN	Nathan	1994-02-20	maitrise	\N
25	ROBIN	Ambre	1994-02-20	cadre	\N
26	BRUN	Paul	1994-02-20	cadre	\N
27	LEFEBVRE	Camille	1994-02-20	cadre sup	\N
28	BARBIER	Gabin	1994-02-20	technicien	\N
29	ROUSSEL	Lucie	1994-02-20	cadre	\N
30	ARNAUD	Maxence	1994-02-20	cadre sup	\N
31	GERARD	Capucine	1994-02-20	maitrise	\N
32	AUBERT	Marius	1994-02-20	technicien	\N
33	DUVAL	Simon	1994-02-20	cadre	\N
34	LEGRAND	Emma	1994-02-20	cadre sup	\N
35	BLANCHARD	Lenny	1994-02-20	cadre	\N
36	BRUNET	Rose	1994-02-20	technicien	\N
37	DENIS	Samuel	1994-02-20	cadre sup	\N
38	BRETON	Maud	1994-02-20	technicien	\N
39	ROCHE	Wilfrid	1994-02-20	cadre	\N
40	BOYER	Marielle	1994-02-20	maitrise	\N
41	COLIN	Thomas	1994-02-20	cadre	\N
42	FONTAINE	Lucile	1994-02-20	technicien	\N
43	BOURGEOIS	Christopher	1994-02-20	cadre	\N
44	GAILLARD	Laureen	1994-02-20	technicien	\N
45	NOEL	Franck	1994-02-20	technicien	\N
46	DUFOUR	Coralie	1994-02-20	cadre	\N
\.


--
-- TOC entry 2031 (class 0 OID 0)
-- Dependencies: 172
-- Name: employe_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('employe_id_seq', 46, true);


--
-- TOC entry 2015 (class 0 OID 19504)
-- Dependencies: 175
-- Data for Name: projet; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY projet (id, nom, importance, commentaires) FROM stdin;
2	Geomatique		
\.


--
-- TOC entry 2018 (class 0 OID 19515)
-- Dependencies: 178
-- Data for Name: projet_en_cours; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY projet_en_cours (id_projet, nom_projet, id_employe, nom_employe) FROM stdin;
\.


--
-- TOC entry 2032 (class 0 OID 0)
-- Dependencies: 177
-- Name: projet_en_cours_id_employe_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('projet_en_cours_id_employe_seq', 1, false);


--
-- TOC entry 2033 (class 0 OID 0)
-- Dependencies: 176
-- Name: projet_en_cours_id_projet_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('projet_en_cours_id_projet_seq', 1, false);


--
-- TOC entry 2034 (class 0 OID 0)
-- Dependencies: 174
-- Name: projet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('projet_id_seq', 1, true);


--
-- TOC entry 1902 (class 2606 OID 19521)
-- Name: projet_en_cours_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY projet_en_cours
    ADD CONSTRAINT projet_en_cours_pkey PRIMARY KEY (id_projet, id_employe);


--
-- TOC entry 2025 (class 0 OID 0)
-- Dependencies: 5
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2017-04-05 11:52:35

--
-- PostgreSQL database dump complete
--

