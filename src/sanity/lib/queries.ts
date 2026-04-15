import {groq} from 'next-sanity'

export const homePageQuery = groq`{
  "site": *[_type == "siteSettings"][0]{
    ...,
    "logo": logo.asset->url
  },
  "founder": *[_type == "founder"][0],
  "serviceGroups": *[_type == "serviceGroup"] | order(order asc),
  "plans": *[_type == "mentorshipPlan"] | order(order asc),
  "customPackages": *[_type == "customPackage"] | order(order asc)
}`