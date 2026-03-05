import { groq } from 'next-sanity'

export const heroQuery = groq`*[_type == "hero"][0]{
  headline,
  subheadline,
  ctaText,
  ctaLink,
  backgroundImage
}`

export const servicesQuery = groq`*[_type == "service"] | order(order asc){
  _id,
  title,
  description,
  icon
}`

export const teamQuery = groq`*[_type == "teamMember"] | order(order asc){
  _id,
  name,
  role,
  bio,
  image
}`

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  title,
  description,
  email,
  phone,
  address,
  linkedin,
  twitter
}`
