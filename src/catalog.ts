import type {Project,Skill} from './projects';
export type CatalogFilters={skill:Skill|'All work';topic:string;method:string;query:string;sort:string};
export function selectProjects(catalog:Project[],filters:CatalogFilters):Project[]{
 const q=filters.query.trim().toLocaleLowerCase();
 const selected=catalog.filter(p=>{
  if(filters.skill!=='All work'&&p.skill!==filters.skill)return false;
  if(filters.topic!=='All topics'&&p.topic!==filters.topic)return false;
  if(filters.method!=='All approaches'&&p.dataType!==filters.method)return false;
  const text=[p.title,p.subtitle,p.description,p.question,p.abstract,p.method,p.dataType,p.skill,p.topic,p.limitation,...p.tags,...p.approach,...p.findings].filter(Boolean).join(' ').toLocaleLowerCase();
  return !q||text.includes(q);
 });
 return filters.sort==='title'?[...selected].sort((a,b)=>a.title.localeCompare(b.title)):selected;
}
