App-Supabase-Quotes | Opinion Hub 💬

🌟 Descripción del Proyecto

App-Supabase-Quotes es una aplicación full-stack moderna diseñada para compartir, explorar y gestionar citas u opiniones personales. Utiliza una arquitectura sin servidor potente, aprovechando Supabase para la autenticación y la base de datos PostgreSQL, y Next.js para una experiencia de usuario rápida y dinámica.

Este proyecto demuestra un dominio de las tecnologías de vanguardia para construir aplicaciones escalables y seguras.

✨ Características Principales

Autenticación Segura: Los usuarios pueden iniciar sesión para acceder a las funciones de creación de contenido, con la gestión de usuarios manejada completamente por Supabase Auth.

CRUD de Citas: Los usuarios autenticados pueden Crear (C), Leer (R), Actualizar (U) y Eliminar (D) sus propias citas.

Persistencia de Datos: Uso de PostgreSQL (a través de Supabase) y Prisma ORM para una gestión de datos robusta y tipada.

Diseño Moderno y Responsivo: Interfaz de usuario elegante construida con Tailwind CSS y componentes de shadcn/ui.

Elementos Interactivos: Inclusión de componentes visuales avanzados utilizando Three.js y @react-three/fiber, mostrando habilidades en renderizado 3D en la web.

🛠️ Stack Tecnológico

Este proyecto ha sido desarrollado utilizando un stack moderno, priorizando la tipificación estricta y el rendimiento.

Categoría

Tecnología

Descripción

Framework

Next.js (App Router)

React Framework para renderizado del lado del servidor y estático.

Lenguaje

TypeScript

Tipificación estricta en todo el codebase.

Backend/DB

Supabase

Base de datos PostgreSQL y servicios de autenticación out-of-the-box.

ORM

Prisma

Cliente de base de datos de nueva generación (ORM) para consultas seguras y tipadas.

Estilos

Tailwind CSS

Framework CSS utility-first para un desarrollo rápido y flexible.

Componentes UI

shadcn/ui

Colección de componentes de interfaz accesibles y personalizables.

3D & Animación

Three.js / R3F

Creación de componentes 3D declarativos e interactivos con React.

Entorno

@t3-oss/env-core, Zod

Manejo seguro y validado de variables de entorno.

🚀 Instalación y Ejecución Local

Sigue estos pasos para levantar el proyecto en tu máquina local.

1. Clonar el Repositorio

git clone [https://github.com/Kenkyoo/app-supabase-quotes.git](https://github.com/Kenkyoo/app-supabase-quotes.git)
cd app-supabase-quotes


2. Variables de Entorno

Crea un archivo llamado .env.local en la raíz del proyecto. Necesitarás obtener tus credenciales de Supabase (URL del proyecto y clave pública Anónima) y configurar la conexión de Prisma.

# URL de conexión directa a la base de datos PostgreSQL (usada por Prisma)
DATABASE_URL="postgresql://[USER]:[PASSWORD]@[HOST]:[PORT]/[DB_NAME]?schema=public"

# Variables de entorno de Supabase (usadas por la aplicación Next.js)
NEXT_PUBLIC_SUPABASE_URL="[TU_URL_SUPABASE]"
NEXT_PUBLIC_SUPABASE_ANON_KEY="[TU_CLAVE_ANONIMA_SUPABASE]"


⚠️ Nota de Prisma: Asegúrate de que tu DATABASE_URL apunte a la base de datos de Supabase para que Prisma pueda sincronizar el esquema.

3. Instalar Dependencias

npm install


4. Sincronizar la Base de Datos con Prisma

Ejecuta el siguiente comando para aplicar el esquema de Prisma a tu base de datos de Supabase:

# Genera el cliente Prisma y aplica la migración inicial (push)
npm run postinstall
npx prisma db push


5. Ejecutar la Aplicación

Inicia el servidor de desarrollo de Next.js. El comando dev utiliza la optimización turbopack:

npm run dev


La aplicación estará disponible en http://localhost:3000.
