import {useEffect, useMemo, useState} from "react";
import {ArrowRight, ChevronDown, LayoutGrid, List, Search, X} from "lucide-react";
import {projects, type Project, type Skill} from "./projects";
import {researchThemes, researchDesigns} from "./research";
import {updateAddress} from "./navigation";
import {selectProjects} from "./catalog";

type CollectionProps = {
  research?: boolean;
  onOpen: (project: Project) => void;
  Card: React.ComponentType<{project: Project; onOpen: (project: Project) => void}>;
};
const defaults = {skill:"All work", topic:"All topics", method:"All approaches", query:"", sort:"curated", view:"grid"};

export default function Collection({research = false, onOpen, Card}: CollectionProps) {
  const prefix = research ? "research-" : "analytics-";
  const all = useMemo(() => projects.filter(p => Boolean(p.researchTheme) === research), [research]);
  const topics = useMemo(() => [...new Set(all.map(p => p.topic))], [all]);
  const [filters, setFilters] = useState(defaults);
  useEffect(() => {
    function sync(event?: Event) {
      const params = new URLSearchParams(event instanceof CustomEvent ? event.detail : location.search);
      const next = {...defaults};
      for (const field of Object.keys(next) as (keyof typeof defaults)[]) {
        next[field] = params.get(prefix + field) || defaults[field];
      }
      setFilters(next);
    }
    sync();
    window.addEventListener("popstate", sync);
    window.addEventListener("portfolio-filter", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("portfolio-filter", sync);
    };
  }, [prefix,all]);
  function apply(changes: Partial<typeof defaults>) {
    const next = {...filters, ...changes};
    const url = new URL(location.href);
    for (const field of Object.keys(next) as (keyof typeof defaults)[]) {
      if (next[field] === defaults[field]) url.searchParams.delete(prefix + field);
      else url.searchParams.set(prefix + field, next[field]);
    }
    updateAddress(url);
    setFilters(next);
  }
  const filtered = selectProjects(all, {...filters, skill: filters.skill as Skill | "All work"});
  const title = research ? "Study catalogue" : "Data analytics projects";
  const noun = research ? "studies" : "projects";
  const hasFilters = Boolean(filters.query || filters.topic !== defaults.topic || filters.skill !== defaults.skill || filters.method !== defaults.method);
  return <section className="work-section page-width" id={research ? "academic-catalog" : "work"} aria-label={title}>
    <div className="section-intro"><div><h2>{title}<span>.</span></h2></div>
      <p>{research ? "Browse research questions, study methods, reported findings and original reports." : "Explore business questions through Excel dashboards, MySQL queries and Power BI reports."}</p>
    </div>
    {research ? <div className="research-subtopics" role="group" aria-label="Research themes">
      {[{label:"All topics",count:all.length}, ...researchThemes].map(t =>
        <button key={t.label} aria-pressed={filters.topic === t.label} onClick={() => apply({topic:t.label})}>{t.label === "All topics" ? "All studies" : t.label} <span>{t.count}</span></button>)}
    </div> : <div className="filter-tabs" role="group" aria-label="Analytics tools">{["All work","Excel","SQL","Power BI"].map(skill =>
      <button key={skill} className={"filter-tab" + (filters.skill === skill ? " selected" : "")} aria-pressed={filters.skill === skill} onClick={() => apply({skill})}>{skill === "All work" ? "All analytics" : skill}<span>{all.filter(p => skill === "All work" || p.skill === skill).length}</span></button>)}</div>}
    <div className="filter-tools"><label className="search-box"><Search size={18}/><input type="search" aria-label={"Search " + title} placeholder={research ? "Search studies, methods or findings…" : "Search projects, tools or findings…"} value={filters.query} onChange={e => apply({query:e.target.value})}/>{filters.query && <button aria-label="Clear search" onClick={() => apply({query:""})}><X size={15}/></button>}</label>
      <div className="filter-select"><select aria-label={research ? "Research approach" : "Analytics topic"} value={research ? filters.method : filters.topic} onChange={e => apply(research ? {method:e.target.value} : {topic:e.target.value})}>
        {(research ? researchDesigns : ["All topics",...topics]).map(s => <option key={s}>{s}</option>)}</select><ChevronDown size={14}/></div>
      <div className="view-toggle" role="group" aria-label={title + " layout"}>{["grid","list"].map(view => <button key={view} aria-label={title + " " + view + " view"} aria-pressed={filters.view === view} className={filters.view === view ? "active" : ""} onClick={() => apply({view})}>{view === "grid" ? <LayoutGrid size={17}/> : <List size={17}/>}</button>)}</div>
    </div>
    <div className="results-bar"><span aria-live="polite">Showing <strong>{filtered.length}</strong> of <strong>{all.length}</strong> {noun}{hasFilters && <button className="clear-filters" onClick={() => apply({...defaults,view:filters.view})}>Reset filters <X size={12}/></button>}</span><label>Sort by <select aria-label={"Sort " + noun} value={filters.sort} onChange={e => apply({sort:e.target.value})}><option value="curated">Curated order</option><option value="title">Title A–Z</option></select></label></div>
    {filtered.length ? <div className={"project-grid" + (filters.view === "list" ? " list-view" : "")}>{filtered.map(p => <Card key={p.id} project={p} onOpen={onOpen}/>)}</div> :
      <div className="empty-state"><h3>No matches</h3><p>Try another search or clear the filters.</p><button className="button primary" onClick={() => apply(defaults)}>Show all {noun} <ArrowRight size={16}/></button></div>}
    {!research && <p className="work-note"><a href="https://github.com/emmyk77/Kara-Ecommerce-Performance-Analysis-2023-2024">Kara e-commerce returns analysis ↗</a>Reference project by Adekanmi Andrew Adeayo.</p>}
  </section>;
}
