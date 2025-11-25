// src/content/posts/config.ts
import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content', // indica que contendrá archivos Markdown (.md)
  schema: z.object({
    // Propiedades heredadas de tu JSON
    name: z.string(),
    role: z.string(),
    photoUrl: z.string().url(),
    whatsappNumber: z.string(),
    services: z.array(z.string()),
    
    // Nueva propiedad para el título de la página/enlace
    title: z.string(), 
  }),
});

export const collections = {
  posts: postsCollection,
};