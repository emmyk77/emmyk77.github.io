export type Skill = "Excel" | "SQL" | "Research writing" | "Power BI";
export type Project = {
 id:string;title:string;subtitle:string;skill:Skill;topic:string;description:string;tags:string[];image:string;imageAlt:string;
 status:string;period:string;question:string;approach:string[];findings:string[];limitation:string;source:string;
 repository?:string;resources:{label:string;url:string;type:string}[];metrics:{value:string;label:string}[];code?:string;
 researchTheme?:string;method?:string;dataType?:string;implication?:string;abstract?:string;folderUrl?:string;summaryText?:string;sourceTitle?:string;
};
export const skills:(Skill|"All work")[]=["All work","Excel","SQL","Research writing","Power BI"];
export const projects:Project[] = [
  {
    "id": "cart-abandonment",
    "title": "When shoppers leave their carts",
    "subtitle": "E-commerce cart abandonment analysis",
    "skill": "Excel",
    "topic": "E-commerce",
    "description": "Exploring 10,000 cart events to understand where abandonment and item value are concentrated.",
    "tags": [
      "Excel formulas",
      "Segmentation",
      "Data quality"
    ],
    "image": "assets/cart.webp",
    "imageAlt": "Actual cart abandonment project overview with category rates and item-value comparisons",
    "status": "Workbook & report available",
    "period": "January–December 2025 data",
    "question": "Where is abandonment concentrated, and what should the business measure before testing recovery strategies?",
    "approach": [
      "Reviewed the eight source fields and documented the limits of the supplied dataset.",
      "Built formula-linked Excel summaries and charts across category, device, price band and activity timing.",
      "Produced an executive presentation, recommendation memo and data gap register."
    ],
    "findings": [
      "4,988 of 10,000 recorded cart events are flagged abandoned: a rate of 49.88%.",
      "Items above $300 represent 64.48% of abandoned item value.",
      "Category, device and price-band differences are descriptive; association tests are not significant at the 5% level."
    ],
    "limitation": "Price is an item-value proxy, not a complete basket total. Abandoned value is not confirmed lost revenue. These records cannot establish abandonment causes or repeat-customer behaviour. The Excel summaries are formula driven, without dashboard slicers.",
    "source": "Current project README, Excel methodology and supplied project brief. The original data publisher and collection method were not supplied.",
    "repository": "https://github.com/emmyk77/cart-abandonment-analysis",
    "resources": [
      {
        "label": "Excel workbook",
        "url": "https://github.com/emmyk77/cart-abandonment-analysis/blob/main/dashboards/Cart_Abandonment_Dashboards.xlsx",
        "type": "XLSX"
      },
      {
        "label": "Executive presentation",
        "url": "https://github.com/emmyk77/cart-abandonment-analysis/blob/main/reports/Cart_Abandonment_Executive_Deck.pdf",
        "type": "PDF"
      },
      {
        "label": "Recommendations",
        "url": "https://github.com/emmyk77/cart-abandonment-analysis/blob/main/reports/recommendations.md",
        "type": "Report"
      },
      {
        "label": "Methodology & definitions",
        "url": "https://github.com/emmyk77/cart-abandonment-analysis/blob/main/docs/methodology.md",
        "type": "Notes"
      }
    ],
    "metrics": [
      {
        "value": "10,000",
        "label": "cart events"
      },
      {
        "value": "49.88%",
        "label": "abandonment rate"
      },
      {
        "value": "64.48%",
        "label": "abandoned value in items >$300"
      }
    ]
  },
  {
    "id": "getshop-marketing",
    "title": "Making campaign performance visible",
    "subtitle": "GetShopToday marketing dashboard",
    "skill": "Excel",
    "topic": "E-commerce",
    "description": "An Excel dashboard bringing campaign spend, clicks, conversions and revenue into one view.",
    "tags": [
      "Pivot Tables",
      "Slicers",
      "Marketing analytics"
    ],
    "image": "assets/getshop.webp",
    "imageAlt": "Original GetShopToday Excel marketing dashboard with campaign charts and slicers",
    "status": "Dashboard available",
    "period": "Supplied campaign dataset",
    "question": "How do campaign types compare on spend, traffic, paid customers and revenue?",
    "approach": [
      "Prepared campaign summaries in Microsoft Excel using Pivot Tables.",
      "Built charts and KPI cards for marketing performance comparisons.",
      "Added workbook slicers for product category, customer location and referral source."
    ],
    "findings": [
      "The dashboard compares Influencer, PPC, Email, Social Media, Affiliate and Unknown campaign categories.",
      "Influencer campaigns have the highest displayed spend and 60 paid customers; PPC records 54 paid customers.",
      "PPC leads displayed revenue at approximately $12K, followed by Influencer at approximately $11K."
    ],
    "limitation": "The dashboard displays ROI as currency and CPA as a total. Their formulas, aggregation and formats need review before drawing profitability or efficiency conclusions. The preview is static; slicers work in the Excel workbook.",
    "source": "Current repository README and original dashboard preview. Results are described as displayed in the project.",
    "repository": "https://github.com/emmyk77/GetShopToday-Marketing-Analytics-Dashboard",
    "resources": [
      {
        "label": "Excel dashboard workbook",
        "url": "https://github.com/emmyk77/GetShopToday-Marketing-Analytics-Dashboard/blob/main/GetShop%20Today%20Customer%20Data%20%20Final%20project.xlsx",
        "type": "XLSX"
      },
      {
        "label": "Source dataset",
        "url": "https://github.com/emmyk77/GetShopToday-Marketing-Analytics-Dashboard/blob/main/Datasets/GetShop%20Today%20Customer%20Data.csv",
        "type": "CSV"
      }
    ],
    "metrics": [
      {
        "value": "6",
        "label": "campaign categories"
      },
      {
        "value": "3",
        "label": "workbook slicer dimensions"
      }
    ]
  },
  {
    "id": "shop-clicker",
    "title": "Finding early signs of customer inactivity",
    "subtitle": "Shop Clicker customer retention analysis",
    "skill": "SQL",
    "topic": "E-commerce",
    "description": "A relational MySQL database and five business queries exploring purchase frequency, engagement and retention.",
    "tags": [
      "MySQL",
      "Joins & subqueries",
      "Relational design"
    ],
    "image": "assets/shop-schema.webp",
    "imageAlt": "Actual Shop Clicker entity relationship diagram showing five connected tables",
    "status": "SQL learning project",
    "period": "Fictional training dataset",
    "question": "How can purchase, interaction and feedback records identify customers who may need a closer look?",
    "approach": [
      "Designed five related tables with primary keys, foreign keys, required fields and auto-incrementing IDs.",
      "Wrote five queries using joins, aggregation, subqueries and date comparisons.",
      "Documented the schema, sample data and business questions for use in MySQL Workbench."
    ],
    "findings": [
      "Queries identify low purchase frequency, long engagement gaps and low satisfaction ratings.",
      "A category query counts customers with a single purchase in each category.",
      "A rule-based inactivity query combines purchase and interaction history. It is not a trained churn prediction model."
    ],
    "limitation": "This structured learning assignment uses fictional customer data. Results depend on the reference date; several queries use CURDATE(). A single category purchase is not proof of churn. No commercial retention uplift is claimed.",
    "source": "Verified repository schema, query files and README. Working files sit inside the nested project directory.",
    "repository": "https://github.com/emmyk77/shop-clicker-customer-retention-sql",
    "resources": [
      {
        "label": "Database schema",
        "url": "https://github.com/emmyk77/shop-clicker-customer-retention-sql/blob/main/shop-clicker-customer-retention-sql/schema/create_tables.sql",
        "type": "SQL"
      },
      {
        "label": "Sample data",
        "url": "https://github.com/emmyk77/shop-clicker-customer-retention-sql/blob/main/shop-clicker-customer-retention-sql/data/sample_data.sql",
        "type": "SQL"
      },
      {
        "label": "Purchase frequency query",
        "url": "https://github.com/emmyk77/shop-clicker-customer-retention-sql/blob/main/shop-clicker-customer-retention-sql/queries/query1_purchase_frequency.sql",
        "type": "SQL"
      },
      {
        "label": "All five queries",
        "url": "https://github.com/emmyk77/shop-clicker-customer-retention-sql/tree/main/shop-clicker-customer-retention-sql/queries",
        "type": "Folder"
      }
    ],
    "metrics": [
      {
        "value": "5",
        "label": "relational tables"
      },
      {
        "value": "5",
        "label": "business queries"
      }
    ],
    "code": "SELECT c.customer_id, c.full_name, c.location,\n       COUNT(p.purchase_id) AS total_purchases,\n       MAX(p.purchase_date) AS last_purchase_date\nFROM customers c\nLEFT JOIN purchases p\n  ON c.customer_id = p.customer_id\n  AND p.purchase_date >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)\nGROUP BY c.customer_id, c.full_name, c.location\nHAVING COUNT(p.purchase_id) < 2;"
  },
  {
    "id": "wealthsimple",
    "title": "Following the marketing funnel",
    "subtitle": "Wealthsimple marketing analytics",
    "skill": "Power BI",
    "topic": "Banking & fintech",
    "description": "A seven-page Power BI report supported by a documented data quality and metric reconciliation workflow.",
    "tags": [
      "Power BI",
      "Data quality",
      "Funnel analysis"
    ],
    "image": "assets/wealth.webp",
    "imageAlt": "Actual Wealthsimple training project screenshot from Power BI Desktop showing spend and CAC",
    "status": "Desktop report · validation pending",
    "period": "Fictional training data",
    "question": "How do acquisition costs and conversion compare when costs and funnel counts use a consistent population?",
    "approach": [
      "Preserved raw data and flagged missing, negative and inconsistent records.",
      "Defined a comparable population of 1,671 out of 2,000 source campaign records.",
      "Created seven report pages with supporting analysis, recommendation report and executive presentation."
    ],
    "findings": [
      "The comparable population records CAD 426,714.30 in marketing cost and 106 paying customers.",
      "Reported aggregate CAC is CAD 4,025.61, using the same cost and customer population.",
      "Desktop screenshots show all seven pages populated; a blank budget benchmark-count card needs attention."
    ],
    "limitation": "Fictional training data, not actual Wealthsimple business results. Independent refresh, full DAX reconciliation and interaction testing are pending. Counts do not establish unique acquired people. No Power BI Service deployment is claimed.",
    "source": "Current repository README, gallery and Desktop handoff dated 6 November 2026. The image is an actual Desktop screenshot, not an interactive web report.",
    "repository": "https://github.com/emmyk77/Wealthsimple-Marketing-Analytics",
    "resources": [
      {
        "label": "Power BI report",
        "url": "https://github.com/emmyk77/Wealthsimple-Marketing-Analytics/blob/main/powerbi/Wealthsimple_Marketing_Analytics.pbix",
        "type": "PBIX"
      },
      {
        "label": "Seven-page gallery",
        "url": "https://github.com/emmyk77/Wealthsimple-Marketing-Analytics/blob/main/docs/Dashboard_Gallery.md",
        "type": "Gallery"
      },
      {
        "label": "Methodology",
        "url": "https://github.com/emmyk77/Wealthsimple-Marketing-Analytics/blob/main/docs/Analysis_Methodology.md",
        "type": "Notes"
      },
      {
        "label": "Remaining validation",
        "url": "https://github.com/emmyk77/Wealthsimple-Marketing-Analytics/blob/main/docs/review/Desktop_Handoff_2026-11-06.md",
        "type": "Status"
      }
    ],
    "metrics": [
      {
        "value": "7",
        "label": "report pages"
      },
      {
        "value": "1,671",
        "label": "comparable records"
      },
      {
        "value": "CAD 4,025.61",
        "label": "reported aggregate CAC"
      }
    ]
  },
  {
    "id": "electricity-sme",
    "title": "Electricity access and SME performance",
    "subtitle": "Electricity Access and SME Performance",
    "skill": "Research writing",
    "topic": "Infrastructure & SMEs",
    "description": "Electricity reliability, operating costs and manufacturing productivity.",
    "tags": [
      "Survey & regression",
      "Survey",
      "Research writing"
    ],
    "image": "",
    "imageAlt": "",
    "status": "Research report & summary available",
    "period": "Lagos State · manufacturing SMEs",
    "question": "How do electricity access, reliability and cost relate to manufacturing SME productivity?",
    "approach": [
      "This project examines how electricity access, reliability and cost relate to the performance of manufacturing small and medium enterprises in Lagos State.",
      "The analysis uses 366 valid survey responses. It applies descriptive statistics, reliability checks, correlations and regression, with company size included as a control."
    ],
    "findings": [
      "Better electricity access and more reliable supply are associated with higher operational productivity.",
      "Higher electricity costs are associated with lower productivity.",
      "The model explains about 47% of the differences in reported productivity; company size is not statistically significant."
    ],
    "limitation": "The study highlights the importance of reliable and affordable electricity for manufacturing businesses. Because the survey used purposive and snowball recruitment, its findings should not be generalised to every SME or interpreted as causal effects.",
    "source": "Reviewed against the research summary and supplied full report in the Emmyk Consult Drive collection. Findings are reported from the supplied documents; statistical estimates have not been independently reproduced. Reports are anonymised and individual project roles are not separately documented.",
    "resources": [
      {
        "label": "Read research summary on Drive",
        "url": "https://drive.google.com/file/d/1KW57ypTY1etFnUHKmTyIns-eIUGHj0Kk/view?usp=drivesdk",
        "type": "PDF"
      },
      {
        "label": "Read full report on Drive",
        "url": "https://drive.google.com/file/d/1oy58LmiC4rgvrPJ4p5KbmjvA2OIbPgfq/view?usp=drivesdk",
        "type": "PDF"
      }
    ],
    "metrics": [
      {
        "value": "366",
        "label": "valid survey responses"
      },
      {
        "value": "Lagos",
        "label": "manufacturing SMEs"
      }
    ],
    "researchTheme": "infrastructure",
    "method": "Survey & regression",
    "dataType": "Survey",
    "implication": "The study highlights the importance of reliable and affordable electricity for manufacturing businesses. Because the survey used purposive and snowball recruitment, its findings should not be generalised to every SME or interpreted as causal effects.",
    "abstract": "This project examines how electricity access, reliability and cost relate to the performance of manufacturing small and medium enterprises in Lagos State.",
    "folderUrl": "https://drive.google.com/drive/folders/1Y0pDVFM7SukqHW5qZ5rJGDThCheRUnv5",
    "summaryText": "Electricity Access and Performance of Small and\nMedium Enterprises in Lagos State\nRESEARCH SUMMARY\nWhat the project examines\nThis project examines how electricity access, reliability and cost relate to the performance of\nmanufacturing small and medium enterprises in Lagos State.\nHow the study was conducted\nThe analysis uses 366 valid survey responses. It applies descriptive statistics, reliability checks,\ncorrelations and regression, with company size included as a control.\nMain findings\nBetter electricity access and more reliable supply are associated with higher operational productivity.\nHigher electricity costs are associated with lower productivity. The model explains about 47% of the\ndifferences in reported productivity; company size is not statistically significant.\nWhat the findings mean\nThe study highlights the importance of reliable and affordable electricity for manufacturing businesses.\nBecause the survey used purposive and snowball recruitment, its findings should not be generalised to\nevery SME or interpreted as causal effects.\nThis summary explains the supplied report. It does not replace the full project or independently reproduce\nits statistical analysis.",
    "sourceTitle": "Electricity Access and SME Performance"
  },
  {
    "id": "non-oil-exports",
    "title": "Non-oil exports and economic performance",
    "subtitle": "Non-Oil Exports and Economic Performance (1990–2024)",
    "skill": "Research writing",
    "topic": "Trade & exchange rates",
    "description": "Export diversification and productive capacity.",
    "tags": [
      "ARDL",
      "Time series",
      "Research writing"
    ],
    "image": "",
    "imageAlt": "",
    "status": "Research report & summary available",
    "period": "1990–2024",
    "question": "How do non-oil exports relate to Nigeria’s economic performance?",
    "approach": [
      "This project examines non-oil exports and economic performance in Nigeria between 1990 and 2024. It considers whether expanding exports beyond crude oil is associated with stronger economic growth.",
      "The study uses annual data and an ARDL approach, with foreign investment, trade openness, exchange rates and inflation discussed as control variables. It also reports predictive and diagnostic tests."
    ],
    "findings": [
      "The chapter results associate non-oil exports positively and significantly with growth in the short and long term.",
      "Trade openness has a significant negative coefficient, while foreign investment, exchange rates and inflation are insignificant in the chapter tables."
    ],
    "limitation": "The study recommends strengthening productive non-oil sectors and export competitiveness. Some appendix output uses a different specification from the chapter tables, so the results should be reconciled before relying on precise estimates. The main report is preserved as supplied.",
    "source": "Reviewed against the research summary and supplied full report in the Emmyk Consult Drive collection. Findings are reported from the supplied documents; statistical estimates have not been independently reproduced. Reports are anonymised and individual project roles are not separately documented.",
    "resources": [
      {
        "label": "Read research summary on Drive",
        "url": "https://drive.google.com/file/d/1YaxSzU2ixjuB49lzVA0IOi0LzwLc4hvg/view?usp=drivesdk",
        "type": "PDF"
      },
      {
        "label": "Read full report on Drive",
        "url": "https://drive.google.com/file/d/1GZZPtO8nuv44ZiXIweYM0mllbGvoZ-Sv/view?usp=drivesdk",
        "type": "PDF"
      }
    ],
    "metrics": [
      {
        "value": "1990–2024",
        "label": "study period"
      },
      {
        "value": "ARDL",
        "label": "documented approach"
      }
    ],
    "researchTheme": "trade",
    "method": "ARDL",
    "dataType": "Time series",
    "implication": "The study recommends strengthening productive non-oil sectors and export competitiveness. Some appendix output uses a different specification from the chapter tables, so the results should be reconciled before relying on precise estimates. The main report is preserved as supplied.",
    "abstract": "This project examines non-oil exports and economic performance in Nigeria between 1990 and 2024. It considers whether expanding exports beyond crude oil is associated with stronger economic growth.",
    "folderUrl": "https://drive.google.com/drive/folders/1jYwh0CdcgABxhKIpN8_xcTuIDLgRuqVs",
    "summaryText": "The Nexus of Non-Oil Export and Economic Performance\nin Nigeria (1990–2024)\nRESEARCH SUMMARY\nWhat the project examines\nThis project examines non-oil exports and economic performance in Nigeria between 1990 and 2024. It\nconsiders whether expanding exports beyond crude oil is associated with stronger economic growth.\nHow the study was conducted\nThe study uses annual data and an ARDL approach, with foreign investment, trade openness, exchange\nrates and inflation discussed as control variables. It also reports predictive and diagnostic tests.\nMain findings\nThe chapter results associate non-oil exports positively and significantly with growth in the short and long\nterm. Trade openness has a significant negative coefficient, while foreign investment, exchange rates\nand inflation are insignificant in the chapter tables.\nWhat the findings mean\nThe study recommends strengthening productive non-oil sectors and export competitiveness. Some\nappendix output uses a different specification from the chapter tables, so the results should be reconciled\nbefore relying on precise estimates. The main report is preserved as supplied.\nThis summary explains the supplied report. It does not replace the full project or independently reproduce\nits statistical analysis.",
    "sourceTitle": "Non-Oil Exports and Economic Performance (1990–2024)"
  },
  {
    "id": "e-banking-profitability",
    "title": "E-banking and commercial bank profitability",
    "subtitle": "E-Banking and the Profitability of Commercial Banks in Nigeria",
    "skill": "Research writing",
    "topic": "Banking & digital finance",
    "description": "Digital transaction activity and profitability across ten commercial banks.",
    "tags": [
      "Panel regression",
      "Panel data",
      "Research writing"
    ],
    "image": "",
    "imageAlt": "",
    "status": "Research report & summary available",
    "period": "2016–2025",
    "question": "Do electronic banking transaction volumes relate to the profitability of Nigerian commercial banks?",
    "approach": [
      "This project examines whether electronic banking activity is associated with the profitability of ten Nigerian commercial banks between 2016 and 2025. It focuses on POS, mobile and internet banking transactions.",
      "The study uses 100 bank and year observations. Its main model accounts for differences between banks and years, and checks whether results change under alternative specifications."
    ],
    "findings": [
      "None of the three electronic banking channels has a statistically significant coefficient in the main model.",
      "Some relationships become significant under alternative models or after excluding a bank.",
      "This means the findings are sensitive to the analytical approach and sample."
    ],
    "limitation": "Banks should assess digital services using costs, income and operational benefits alongside transaction volumes. Higher transaction activity alone does not establish higher profitability.",
    "source": "Reviewed against the research summary and supplied full report in the Emmyk Consult Drive collection. Findings are reported from the supplied documents; statistical estimates have not been independently reproduced. Reports are anonymised and individual project roles are not separately documented.",
    "resources": [
      {
        "label": "Read research summary on Drive",
        "url": "https://drive.google.com/file/d/10jbIxRzXnnB-slIOmewlvh14k0dxVUD4/view?usp=drivesdk",
        "type": "PDF"
      },
      {
        "label": "Read full report on Drive",
        "url": "https://drive.google.com/file/d/1GwwPgT2w8RrmowikWyCeNlFkT2AHirFg/view?usp=drivesdk",
        "type": "PDF"
      }
    ],
    "metrics": [
      {
        "value": "10",
        "label": "commercial banks"
      },
      {
        "value": "100",
        "label": "bank-year observations"
      }
    ],
    "researchTheme": "banking",
    "method": "Panel regression",
    "dataType": "Panel data",
    "implication": "Banks should assess digital services using costs, income and operational benefits alongside transaction volumes. Higher transaction activity alone does not establish higher profitability.",
    "abstract": "This project examines whether electronic banking activity is associated with the profitability of ten Nigerian commercial banks between 2016 and 2025. It focuses on POS, mobile and internet banking transactions.",
    "folderUrl": "https://drive.google.com/drive/folders/1RRxDDO8d2tED_Ljdu4jdmWZEN6a96oiQ",
    "summaryText": "E-Banking and the Profitability of Commercial Banks in\nNigeria\nRESEARCH SUMMARY\nWhat the project examines\nThis project examines whether electronic banking activity is associated with the profitability of ten\nNigerian commercial banks between 2016 and 2025. It focuses on POS, mobile and internet banking\ntransactions.\nHow the study was conducted\nThe study uses 100 bank and year observations. Its main model accounts for differences between banks\nand years, and checks whether results change under alternative specifications.\nMain findings\nNone of the three electronic banking channels has a statistically significant coefficient in the main model.\nSome relationships become significant under alternative models or after excluding a bank. This means\nthe findings are sensitive to the analytical approach and sample.\nWhat the findings mean\nBanks should assess digital services using costs, income and operational benefits alongside transaction\nvolumes. Higher transaction activity alone does not establish higher profitability.\nThis summary explains the supplied report. It does not replace the full project or independently reproduce\nits statistical analysis.",
    "sourceTitle": "E-Banking and the Profitability of Commercial Banks in Nigeria"
  },
  {
    "id": "exchange-rate",
    "title": "Exchange rates and Nigeria’s trade balance",
    "subtitle": "Exchange Rate Volatility and Nigeria’s Trade Balance (1986–2024)",
    "skill": "Research writing",
    "topic": "Trade & exchange rates",
    "description": "Exchange rate volatility, oil prices and trade outcomes.",
    "tags": [
      "ARDL",
      "Time series",
      "Research writing"
    ],
    "image": "",
    "imageAlt": "",
    "status": "Research report & summary available",
    "period": "1986–2024",
    "question": "How does exchange rate volatility relate to Nigeria’s trade balance?",
    "approach": [
      "This project examines how exchange rate volatility relates to Nigeria’s trade balance from 1986 to 2024. It also considers foreign direct investment, inflation, the monetary policy rate and oil prices.",
      "The study uses annual economic data and an ARDL model to examine short term changes and longer term relationships. It includes tests of data properties, predictive relationships and model diagnostics."
    ],
    "findings": [
      "The report finds that exchange rate volatility is not statistically significant in either the short or long term.",
      "Oil price has a positive and significant relationship with trade balance, while the other included variables are insignificant in the reported estimates."
    ],
    "limitation": "The findings highlight Nigeria’s dependence on oil export earnings and support export diversification. An insignificant exchange rate coefficient does not establish that currency movements are economically unimportant. The model has limitations, including non-normal residuals.",
    "source": "Reviewed against the research summary and supplied full report in the Emmyk Consult Drive collection. Findings are reported from the supplied documents; statistical estimates have not been independently reproduced. Reports are anonymised and individual project roles are not separately documented.",
    "resources": [
      {
        "label": "Read research summary on Drive",
        "url": "https://drive.google.com/file/d/1hEShiysjgACgdgEBPszq7pl7sKmwCY2n/view?usp=drivesdk",
        "type": "PDF"
      },
      {
        "label": "Read full report on Drive",
        "url": "https://drive.google.com/file/d/1kBndK_pFCx7_nYM28llV7RGgbAbvvH0p/view?usp=drivesdk",
        "type": "PDF"
      }
    ],
    "metrics": [
      {
        "value": "1986–2024",
        "label": "study period"
      },
      {
        "value": "ARDL",
        "label": "documented approach"
      }
    ],
    "researchTheme": "trade",
    "method": "ARDL",
    "dataType": "Time series",
    "implication": "The findings highlight Nigeria’s dependence on oil export earnings and support export diversification. An insignificant exchange rate coefficient does not establish that currency movements are economically unimportant. The model has limitations, including non-normal residuals.",
    "abstract": "This project examines how exchange rate volatility relates to Nigeria’s trade balance from 1986 to 2024. It also considers foreign direct investment, inflation, the monetary policy rate and oil prices.",
    "folderUrl": "https://drive.google.com/drive/folders/1QWwXTLVY5VVBhxCYTUomUpQ3lRmWtypH",
    "summaryText": "The Impact of Exchange Rate Volatility on Nigeria’s\nTrade Balance\nRESEARCH SUMMARY\nWhat the project examines\nThis project examines how exchange rate volatility relates to Nigeria’s trade balance from 1986 to 2024.\nIt also considers foreign direct investment, inflation, the monetary policy rate and oil prices.\nHow the study was conducted\nThe study uses annual economic data and an ARDL model to examine short term changes and longer\nterm relationships. It includes tests of data properties, predictive relationships and model diagnostics.\nMain findings\nThe report finds that exchange rate volatility is not statistically significant in either the short or long term.\nOil price has a positive and significant relationship with trade balance, while the other included variables\nare insignificant in the reported estimates.\nWhat the findings mean\nThe findings highlight Nigeria’s dependence on oil export earnings and support export diversification. An\ninsignificant exchange rate coefficient does not establish that currency movements are economically\nunimportant. The model has limitations, including non-normal residuals.\nThis summary explains the supplied report. It does not replace the full project or independently reproduce\nits statistical analysis.",
    "sourceTitle": "Exchange Rate Volatility and Nigeria’s Trade Balance (1986–2024)"
  },
  {
    "id": "external-debt",
    "title": "External debt and economic growth",
    "subtitle": "The Impact of External Debt on Economic Growth in Nigeria (1986–2025)",
    "skill": "Research writing",
    "topic": "Public finance & growth",
    "description": "Immediate borrowing benefits and the longer term debt burden.",
    "tags": [
      "ARDL",
      "Time series",
      "Research writing"
    ],
    "image": "",
    "imageAlt": "",
    "status": "Research report & summary available",
    "period": "1986–2025",
    "question": "How do the short and long term relationships between external debt and growth differ?",
    "approach": [
      "This project examines how external debt relates to Nigeria’s economic growth between 1986 and 2025. It considers whether borrowing supports growth in the short term and whether a growing debt burden becomes harmful over time.",
      "The study uses annual economic data and EViews to examine changes in output, external debt, exchange rates, debt servicing and inflation. Its model separates short term movements from longer term relationships."
    ],
    "findings": [
      "The report finds a negative and statistically significant relationship between external debt and growth in the long term.",
      "Some delayed short term changes in borrowing have positive effects.",
      "The findings suggest that the immediate benefits of borrowing may differ from the longer term burden."
    ],
    "limitation": "The study recommends careful debt management and directing borrowed funds towards productive activities. The results depend on the selected model and should not be treated as proof of causation.",
    "source": "Reviewed against the research summary and supplied full report in the Emmyk Consult Drive collection. Findings are reported from the supplied documents; statistical estimates have not been independently reproduced. Reports are anonymised and individual project roles are not separately documented.",
    "resources": [
      {
        "label": "Read research summary on Drive",
        "url": "https://drive.google.com/file/d/1eVz0l-NrJI4J5Cnfqc5LcLjRuHeqmBec/view?usp=drivesdk",
        "type": "PDF"
      },
      {
        "label": "Read full report on Drive",
        "url": "https://drive.google.com/file/d/14op5AG5Lfb2WWNoqxfgXVBr_xPWz1bbw/view?usp=drivesdk",
        "type": "PDF"
      }
    ],
    "metrics": [
      {
        "value": "1986–2025",
        "label": "study period"
      },
      {
        "value": "ARDL",
        "label": "documented approach"
      }
    ],
    "researchTheme": "public-finance",
    "method": "ARDL",
    "dataType": "Time series",
    "implication": "The study recommends careful debt management and directing borrowed funds towards productive activities. The results depend on the selected model and should not be treated as proof of causation.",
    "abstract": "This project examines how external debt relates to Nigeria’s economic growth between 1986 and 2025. It considers whether borrowing supports growth in the short term and whether a growing debt burden becomes harmful over time.",
    "folderUrl": "https://drive.google.com/drive/folders/1ftggeQmOJCiCJg9J0YVDwlhGVUBBWOm0",
    "summaryText": "The Impact of External Debt on Economic Growth in\nNigeria (1986–2025)\nRESEARCH SUMMARY\nWhat the project examines\nThis project examines how external debt relates to Nigeria’s economic growth between 1986 and 2025. It\nconsiders whether borrowing supports growth in the short term and whether a growing debt burden\nbecomes harmful over time.\nHow the study was conducted\nThe study uses annual economic data and EViews to examine changes in output, external debt,\nexchange rates, debt servicing and inflation. Its model separates short term movements from longer term\nrelationships.\nMain findings\nThe report finds a negative and statistically significant relationship between external debt and growth in\nthe long term. Some delayed short term changes in borrowing have positive effects. The findings suggest\nthat the immediate benefits of borrowing may differ from the longer term burden.\nWhat the findings mean\nThe study recommends careful debt management and directing borrowed funds towards productive\nactivities. The results depend on the selected model and should not be treated as proof of causation.\nThis summary explains the supplied report. It does not replace the full project or independently reproduce\nits statistical analysis.",
    "sourceTitle": "The Impact of External Debt on Economic Growth in Nigeria (1986–2025)"
  },
  {
    "id": "digital-banking",
    "title": "Digital banking through two lenses",
    "subtitle": "Digital Banking and Customer Satisfaction and Profitability",
    "skill": "Research writing",
    "topic": "Banking & digital finance",
    "description": "Keeping customer experience and bank profitability in focus.",
    "tags": [
      "Survey & financial analysis",
      "Mixed design",
      "Research writing"
    ],
    "image": "",
    "imageAlt": "",
    "status": "Research report & summary available",
    "period": "Financial analysis: 2016–2025",
    "question": "How do digital channels relate to satisfaction, and how does electronic banking income relate to profitability?",
    "approach": [
      "This project examines digital banking and customer satisfaction at United Bank for Africa, and separately assesses the relationship between electronic banking income and bank profitability.",
      "The report combines a customer survey with a separate financial analysis for 2016 to 2025. The survey evaluates mobile, internet, USSD and ATM services; the financial analysis uses the standalone Bank figures."
    ],
    "findings": [
      "Each channel is positively associated with satisfaction when examined separately.",
      "In the combined customer model, internet, USSD and ATM remain significant, while mobile does not.",
      "Electronic banking income is not significantly associated with return on assets in the financial analysis."
    ],
    "limitation": "The study highlights the importance of service quality while separating customer experience from bank profitability. Some appendix reliability outputs differ from the chapter narrative; those figures should be reconciled before relying on them. The main report has been preserved as supplied.",
    "source": "Reviewed against the research summary and supplied full report in the Emmyk Consult Drive collection. Findings are reported from the supplied documents; statistical estimates have not been independently reproduced. Reports are anonymised and individual project roles are not separately documented.",
    "resources": [
      {
        "label": "Read research summary on Drive",
        "url": "https://drive.google.com/file/d/11GZUhPKfPL52NXSseJWnszf9-s8bFIYJ/view?usp=drivesdk",
        "type": "PDF"
      },
      {
        "label": "Read full report on Drive",
        "url": "https://drive.google.com/file/d/1Oz7sBEVOyB_zJzAejd_Ls3DF1pehUqF1/view?usp=drivesdk",
        "type": "PDF"
      }
    ],
    "metrics": [
      {
        "value": "Financial analysis: 2016–2025",
        "label": "financial study period"
      },
      {
        "value": "Survey & financial analysis",
        "label": "documented approach"
      }
    ],
    "researchTheme": "banking",
    "method": "Survey & financial analysis",
    "dataType": "Mixed design",
    "implication": "The study highlights the importance of service quality while separating customer experience from bank profitability. Some appendix reliability outputs differ from the chapter narrative; those figures should be reconciled before relying on them. The main report has been preserved as supplied.",
    "abstract": "This project examines digital banking and customer satisfaction at United Bank for Africa, and separately assesses the relationship between electronic banking income and bank profitability.",
    "folderUrl": "https://drive.google.com/drive/folders/1mhOfL36fBQv9pL4_7Sp3GeV768FKuUlD",
    "summaryText": "Digital Banking Customer Satisfaction and Bank\nProfitability A Case of United Bank for Africa Plc\nRESEARCH SUMMARY\nWhat the project examines\nThis project examines digital banking and customer satisfaction at United Bank for Africa, and separately\nassesses the relationship between electronic banking income and bank profitability.\nHow the study was conducted\nThe report combines a customer survey with a separate financial analysis for 2016 to 2025. The survey\nevaluates mobile, internet, USSD and ATM services; the financial analysis uses the standalone Bank\nfigures.\nMain findings\nEach channel is positively associated with satisfaction when examined separately. In the combined\ncustomer model, internet, USSD and ATM remain significant, while mobile does not. Electronic banking\nincome is not significantly associated with return on assets in the financial analysis.\nWhat the findings mean\nThe study highlights the importance of service quality while separating customer experience from bank\nprofitability. Some appendix reliability outputs differ from the chapter narrative; those figures should be\nreconciled before relying on them. The main report has been preserved as supplied.\nThis summary explains the supplied report. It does not replace the full project or independently reproduce\nits statistical analysis.",
    "sourceTitle": "Digital Banking and Customer Satisfaction and Profitability"
  },
  {
    "id": "monetary-policy",
    "title": "Monetary policy and inflation",
    "subtitle": "Monetary Policy and Inflation in Nigeria (1986–2024)",
    "skill": "Research writing",
    "topic": "Monetary policy & savings",
    "description": "Policy instruments, inflation and monetary transmission.",
    "tags": [
      "ARDL",
      "Time series",
      "Research writing"
    ],
    "image": "",
    "imageAlt": "",
    "status": "Research report & summary available",
    "period": "1986–2024",
    "question": "How do monetary policy instruments relate to inflation in Nigeria?",
    "approach": [
      "This project examines how monetary policy relates to inflation in Nigeria between 1986 and 2024. It considers the policy rate, broad money supply, treasury bill rate, liquidity ratio and exchange rate.",
      "The study uses annual data and an ARDL model to examine short term changes and the relationship described in the report as the long term equation."
    ],
    "findings": [
      "Broad money supply and treasury bill rate have significant positive coefficients in the reported long term table.",
      "The policy rate is weaker and is not significant at the 5% level in that table.",
      "Liquidity ratio and exchange rate are also insignificant.",
      "The error correction result indicates adjustment towards equilibrium over time."
    ],
    "limitation": "The study recommends closer coordination of monetary and fiscal policy and better transmission of policy decisions. Some model variables are entered as changes, so the interpretation of the reported long term results depends on that specification. The original results and wording are retained in the main report.",
    "source": "Reviewed against the research summary and supplied full report in the Emmyk Consult Drive collection. Findings are reported from the supplied documents; statistical estimates have not been independently reproduced. Reports are anonymised and individual project roles are not separately documented.",
    "resources": [
      {
        "label": "Read research summary on Drive",
        "url": "https://drive.google.com/file/d/1mcMZKYvclWiebfcmT-rdPdNz3c587cVP/view?usp=drivesdk",
        "type": "PDF"
      },
      {
        "label": "Read full report on Drive",
        "url": "https://drive.google.com/file/d/1yaLveD3x_L7vw5-5SGUmrN4kw2qhUVO_/view?usp=drivesdk",
        "type": "PDF"
      }
    ],
    "metrics": [
      {
        "value": "1986–2024",
        "label": "study period"
      },
      {
        "value": "ARDL",
        "label": "documented approach"
      }
    ],
    "researchTheme": "monetary",
    "method": "ARDL",
    "dataType": "Time series",
    "implication": "The study recommends closer coordination of monetary and fiscal policy and better transmission of policy decisions. Some model variables are entered as changes, so the interpretation of the reported long term results depends on that specification. The original results and wording are retained in the main report.",
    "abstract": "This project examines how monetary policy relates to inflation in Nigeria between 1986 and 2024. It considers the policy rate, broad money supply, treasury bill rate, liquidity ratio and exchange rate.",
    "folderUrl": "https://drive.google.com/drive/folders/1Mk3eac-GKexShHrz02EuSkZyUOOdWpeK",
    "summaryText": "The Effect of Monetary Policy on Inflation in Nigeria\n(1986–2024)\nRESEARCH SUMMARY\nWhat the project examines\nThis project examines how monetary policy relates to inflation in Nigeria between 1986 and 2024. It\nconsiders the policy rate, broad money supply, treasury bill rate, liquidity ratio and exchange rate.\nHow the study was conducted\nThe study uses annual data and an ARDL model to examine short term changes and the relationship\ndescribed in the report as the long term equation.\nMain findings\nBroad money supply and treasury bill rate have significant positive coefficients in the reported long term\ntable. The policy rate is weaker and is not significant at the 5% level in that table. Liquidity ratio and\nexchange rate are also insignificant. The error correction result indicates adjustment towards equilibrium\nover time.\nWhat the findings mean\nThe study recommends closer coordination of monetary and fiscal policy and better transmission of\npolicy decisions. Some model variables are entered as changes, so the interpretation of the reported long\nterm results depends on that specification. The original results and wording are retained in the main\nreport.\nThis summary explains the supplied report. It does not replace the full project or independently reproduce\nits statistical analysis.",
    "sourceTitle": "Monetary Policy and Inflation in Nigeria (1986–2024)"
  },
  {
    "id": "national-savings",
    "title": "National savings and economic growth",
    "subtitle": "National Savings and Economic Growth in Nigeria (1981–2024)",
    "skill": "Research writing",
    "topic": "Monetary policy & savings",
    "description": "Savings, investment and the path to growth.",
    "tags": [
      "ARDL",
      "Time series",
      "Research writing"
    ],
    "image": "",
    "imageAlt": "",
    "status": "Research report & summary available",
    "period": "1981–2024",
    "question": "How do national savings relate to economic growth in Nigeria?",
    "approach": [
      "This project examines the relationship between national savings and economic growth in Nigeria from 1981 to 2024. It also considers capital formation, broad money supply and inflation.",
      "The study uses annual economic data, an ARDL model and predictive tests. It distinguishes short term movements from the relationship described in the report as the long term model."
    ],
    "findings": [
      "The report finds a positive and significant short term savings coefficient, but no significant long term savings coefficient.",
      "Broad money supply has a positive and significant long term coefficient.",
      "Capital formation and inflation are insignificant, and the predictive tests do not establish a savings–growth relationship in either direction."
    ],
    "limitation": "The study recommends improving how savings are channelled into productive investment and encouraging longer term saving. These are model-based associations rather than proof of causation; the statistical estimates have not been independently reproduced.",
    "source": "Reviewed against the research summary and supplied full report in the Emmyk Consult Drive collection. Findings are reported from the supplied documents; statistical estimates have not been independently reproduced. Reports are anonymised and individual project roles are not separately documented.",
    "resources": [
      {
        "label": "Read research summary on Drive",
        "url": "https://drive.google.com/file/d/19BqkXUvoM2I4P9CjwulGBP9yPqF1Ir2i/view?usp=drivesdk",
        "type": "PDF"
      },
      {
        "label": "Read full report on Drive",
        "url": "https://drive.google.com/file/d/1bWWhgA56aEXVqSsGg3nnKVquhRRBUyRn/view?usp=drivesdk",
        "type": "PDF"
      }
    ],
    "metrics": [
      {
        "value": "1981–2024",
        "label": "study period"
      },
      {
        "value": "ARDL",
        "label": "documented approach"
      }
    ],
    "researchTheme": "monetary",
    "method": "ARDL",
    "dataType": "Time series",
    "implication": "The study recommends improving how savings are channelled into productive investment and encouraging longer term saving. These are model-based associations rather than proof of causation; the statistical estimates have not been independently reproduced.",
    "abstract": "This project examines the relationship between national savings and economic growth in Nigeria from 1981 to 2024. It also considers capital formation, broad money supply and inflation.",
    "folderUrl": "https://drive.google.com/drive/folders/1MTxWDyiQjXNCJRy3t7byROvIIY3ASrsp",
    "summaryText": "National Savings and Economic Growth in Nigeria\n(1981–2024)\nRESEARCH SUMMARY\nWhat the project examines\nThis project examines the relationship between national savings and economic growth in Nigeria from\n1981 to 2024. It also considers capital formation, broad money supply and inflation.\nHow the study was conducted\nThe study uses annual economic data, an ARDL model and predictive tests. It distinguishes short term\nmovements from the relationship described in the report as the long term model.\nMain findings\nThe report finds a positive and significant short term savings coefficient, but no significant long term\nsavings coefficient. Broad money supply has a positive and significant long term coefficient. Capital\nformation and inflation are insignificant, and the predictive tests do not establish a savings–growth\nrelationship in either direction.\nWhat the findings mean\nThe study recommends improving how savings are channelled into productive investment and\nencouraging longer term saving. These are model-based associations rather than proof of causation; the\nstatistical estimates have not been independently reproduced.\nThis summary explains the supplied report. It does not replace the full project or independently reproduce\nits statistical analysis.",
    "sourceTitle": "National Savings and Economic Growth in Nigeria (1981–2024)"
  },
  {
    "id": "money-supply",
    "title": "Money supply and inflation",
    "subtitle": "Money Supply and Inflation in Nigeria (1990–2025)",
    "skill": "Research writing",
    "topic": "Monetary policy & savings",
    "description": "Looking beyond a single explanation for inflation.",
    "tags": [
      "ARDL",
      "Time series",
      "Research writing"
    ],
    "image": "",
    "imageAlt": "",
    "status": "Research report & summary available",
    "period": "1990–2025",
    "question": "How does money supply relate to inflation alongside policy, exchange rates and real output?",
    "approach": [
      "This project examines the relationship between money supply and inflation in Nigeria from 1990 to 2025, while also considering monetary policy, exchange rates and real output.",
      "The study uses annual economic data and an ARDL model, which examines short term changes and longer term relationships. It also tests whether past values help predict subsequent movements."
    ],
    "findings": [
      "Broad money does not have a statistically significant independent long term coefficient in the reported model.",
      "However, lagged changes in money supply influence short term inflation.",
      "The predictive tests link the monetary policy rate to inflation and broad money to real output."
    ],
    "limitation": "The findings support coordinated monetary and fiscal policies and attention to production constraints. They do not support treating money supply as the sole explanation for inflation.",
    "source": "Reviewed against the research summary and supplied full report in the Emmyk Consult Drive collection. Findings are reported from the supplied documents; statistical estimates have not been independently reproduced. Reports are anonymised and individual project roles are not separately documented.",
    "resources": [
      {
        "label": "Read research summary on Drive",
        "url": "https://drive.google.com/file/d/1g3h7ZupMyHUmtBxcwm9h59OF9kjrVS_n/view?usp=drivesdk",
        "type": "PDF"
      },
      {
        "label": "Read full report on Drive",
        "url": "https://drive.google.com/file/d/1CHVsEyOZbOcBgUOrb2jxqEsdm0ldITm7/view?usp=drivesdk",
        "type": "PDF"
      }
    ],
    "metrics": [
      {
        "value": "1990–2025",
        "label": "study period"
      },
      {
        "value": "ARDL",
        "label": "documented approach"
      }
    ],
    "researchTheme": "monetary",
    "method": "ARDL",
    "dataType": "Time series",
    "implication": "The findings support coordinated monetary and fiscal policies and attention to production constraints. They do not support treating money supply as the sole explanation for inflation.",
    "abstract": "This project examines the relationship between money supply and inflation in Nigeria from 1990 to 2025, while also considering monetary policy, exchange rates and real output.",
    "folderUrl": "https://drive.google.com/drive/folders/1xZzDvUumDOH23CUVS921Sne0IyQmQ8R2",
    "summaryText": "The Effect of Money Supply on Inflation in Nigeria\n(1990–2025)\nRESEARCH SUMMARY\nWhat the project examines\nThis project examines the relationship between money supply and inflation in Nigeria from 1990 to 2025,\nwhile also considering monetary policy, exchange rates and real output.\nHow the study was conducted\nThe study uses annual economic data and an ARDL model, which examines short term changes and\nlonger term relationships. It also tests whether past values help predict subsequent movements.\nMain findings\nBroad money does not have a statistically significant independent long term coefficient in the reported\nmodel. However, lagged changes in money supply influence short term inflation. The predictive tests link\nthe monetary policy rate to inflation and broad money to real output.\nWhat the findings mean\nThe findings support coordinated monetary and fiscal policies and attention to production constraints.\nThey do not support treating money supply as the sole explanation for inflation.\nThis summary explains the supplied report. It does not replace the full project or independently reproduce\nits statistical analysis.",
    "sourceTitle": "Money Supply and Inflation in Nigeria (1990–2025)"
  },
  {
    "id": "trade-openness",
    "title": "Trade openness and economic growth",
    "subtitle": "Trade Openness and Economic Growth in Nigeria",
    "skill": "Research writing",
    "topic": "Trade & exchange rates",
    "description": "Connecting trade policy with domestic productive capacity.",
    "tags": [
      "ARDL",
      "Time series",
      "Research writing"
    ],
    "image": "",
    "imageAlt": "",
    "status": "Research report & summary available",
    "period": "1986–2025",
    "question": "How does trade openness relate to economic growth alongside investment and macroeconomic conditions?",
    "approach": [
      "This project examines the relationship between trade openness and economic growth in Nigeria from 1986 to 2025. It also considers foreign investment, capital formation, exchange rates and inflation.",
      "The study uses annual economic data and EViews. It examines short term and longer term relationships and whether past movements help predict subsequent outcomes."
    ],
    "findings": [
      "Trade openness has a negative but statistically insignificant long term coefficient.",
      "Foreign direct investment and capital formation are positive and significant, while inflation is negative and significant.",
      "The predictive tests suggest a connection from openness to capital formation and from capital formation to growth."
    ],
    "limitation": "The study recommends combining trade policy with productive investment and stronger domestic capacity. Its results do not establish that trade is unimportant or identify a causal effect of trade liberalisation.",
    "source": "Reviewed against the research summary and supplied full report in the Emmyk Consult Drive collection. Findings are reported from the supplied documents; statistical estimates have not been independently reproduced. Reports are anonymised and individual project roles are not separately documented.",
    "resources": [
      {
        "label": "Read research summary on Drive",
        "url": "https://drive.google.com/file/d/1YTq7T8FyIfW01HvnFtNAb3Ft4uXpjTuV/view?usp=drivesdk",
        "type": "PDF"
      },
      {
        "label": "Read full report on Drive",
        "url": "https://drive.google.com/file/d/1fL-RXptG083aZqcJ8EEFgmadWYsLPUJA/view?usp=drivesdk",
        "type": "PDF"
      }
    ],
    "metrics": [
      {
        "value": "1986–2025",
        "label": "study period"
      },
      {
        "value": "ARDL",
        "label": "documented approach"
      }
    ],
    "researchTheme": "trade",
    "method": "ARDL",
    "dataType": "Time series",
    "implication": "The study recommends combining trade policy with productive investment and stronger domestic capacity. Its results do not establish that trade is unimportant or identify a causal effect of trade liberalisation.",
    "abstract": "This project examines the relationship between trade openness and economic growth in Nigeria from 1986 to 2025. It also considers foreign investment, capital formation, exchange rates and inflation.",
    "folderUrl": "https://drive.google.com/drive/folders/1CyKgLdQvnWVfVfs4T669hg5raz4g-BQc",
    "summaryText": "Trade Openness and Economic Growth in Nigeria An\nEmpirical Analysis\nRESEARCH SUMMARY\nWhat the project examines\nThis project examines the relationship between trade openness and economic growth in Nigeria from\n1986 to 2025. It also considers foreign investment, capital formation, exchange rates and inflation.\nHow the study was conducted\nThe study uses annual economic data and EViews. It examines short term and longer term relationships\nand whether past movements help predict subsequent outcomes.\nMain findings\nTrade openness has a negative but statistically insignificant long term coefficient. Foreign direct\ninvestment and capital formation are positive and significant, while inflation is negative and significant.\nThe predictive tests suggest a connection from openness to capital formation and from capital formation\nto growth.\nWhat the findings mean\nThe study recommends combining trade policy with productive investment and stronger domestic\ncapacity. Its results do not establish that trade is unimportant or identify a causal effect of trade\nliberalisation.\nThis summary explains the supplied report. It does not replace the full project or independently reproduce\nits statistical analysis.",
    "sourceTitle": "Trade Openness and Economic Growth in Nigeria"
  },
  {
    "id": "government-debt",
    "title": "Government debt and economic growth",
    "subtitle": "The Effect of Government Debt on Economic Growth in Nigeria (1995–2025)",
    "skill": "Research writing",
    "topic": "Public finance & growth",
    "description": "Debt composition, investment and growth.",
    "tags": [
      "ARDL",
      "Time series",
      "Research writing"
    ],
    "image": "",
    "imageAlt": "",
    "status": "Research report & summary available",
    "period": "1995–2025",
    "question": "How do domestic debt, external debt and debt servicing relate to growth?",
    "approach": [
      "This project examines government debt and economic growth in Nigeria from 1995 to 2025. It considers domestic debt, external debt and debt servicing alongside investment and inflation.",
      "The study uses annual economic data and EViews. It examines both short term and longer term relationships and tests whether past movements in one variable help predict another."
    ],
    "findings": [
      "The reported debt coefficients are not statistically significant in the long term model.",
      "Investment, measured by gross capital formation, has a positive and significant relationship with growth.",
      "Inflation has a significant negative short term relationship with growth."
    ],
    "limitation": "The findings support stronger investment planning and productive use of public borrowing. An insignificant debt coefficient does not mean that debt has no economic consequences.",
    "source": "Reviewed against the research summary and supplied full report in the Emmyk Consult Drive collection. Findings are reported from the supplied documents; statistical estimates have not been independently reproduced. Reports are anonymised and individual project roles are not separately documented.",
    "resources": [
      {
        "label": "Read research summary on Drive",
        "url": "https://drive.google.com/file/d/1ya8reGkoSxBZFVpA3Zm1j9LjLAEITdDh/view?usp=drivesdk",
        "type": "PDF"
      },
      {
        "label": "Read full report on Drive",
        "url": "https://drive.google.com/file/d/100imAYNoKhjgpQmuYjX2z2bidsGpjNMU/view?usp=drivesdk",
        "type": "PDF"
      }
    ],
    "metrics": [
      {
        "value": "1995–2025",
        "label": "study period"
      },
      {
        "value": "ARDL",
        "label": "documented approach"
      }
    ],
    "researchTheme": "public-finance",
    "method": "ARDL",
    "dataType": "Time series",
    "implication": "The findings support stronger investment planning and productive use of public borrowing. An insignificant debt coefficient does not mean that debt has no economic consequences.",
    "abstract": "This project examines government debt and economic growth in Nigeria from 1995 to 2025. It considers domestic debt, external debt and debt servicing alongside investment and inflation.",
    "folderUrl": "https://drive.google.com/drive/folders/1TSEarnsiKypx1Ttls8fMPO3yE4uBCfPd",
    "summaryText": "The Effect of Government Debt on Economic Growth in\nNigeria (1995–2025)\nRESEARCH SUMMARY\nWhat the project examines\nThis project examines government debt and economic growth in Nigeria from 1995 to 2025. It considers\ndomestic debt, external debt and debt servicing alongside investment and inflation.\nHow the study was conducted\nThe study uses annual economic data and EViews. It examines both short term and longer term\nrelationships and tests whether past movements in one variable help predict another.\nMain findings\nThe reported debt coefficients are not statistically significant in the long term model. Investment,\nmeasured by gross capital formation, has a positive and significant relationship with growth. Inflation has\na significant negative short term relationship with growth.\nWhat the findings mean\nThe findings support stronger investment planning and productive use of public borrowing. An\ninsignificant debt coefficient does not mean that debt has no economic consequences.\nThis summary explains the supplied report. It does not replace the full project or independently reproduce\nits statistical analysis.",
    "sourceTitle": "The Effect of Government Debt on Economic Growth in Nigeria (1995–2025)"
  },
  {
    "id": "debt-sustainability",
    "title": "Public debt and economic sustainability",
    "subtitle": "Public Debt and Economic Sustainability in Nigeria",
    "skill": "Research writing",
    "topic": "Public finance & growth",
    "description": "Two fiscal channels: debt servicing and development spending.",
    "tags": [
      "ARDL",
      "Time series",
      "Research writing"
    ],
    "image": "",
    "imageAlt": "",
    "status": "Research report & summary available",
    "period": "1986–2025",
    "question": "How does rising public debt affect debt servicing pressure and capital expenditure?",
    "approach": [
      "This project examines whether rising domestic and external debt increase debt servicing pressure and affect capital expenditure in Nigeria between 1986 and 2025.",
      "The study uses annual data and separate models for debt servicing and capital expenditure. It distinguishes longer term relationships from short term movements."
    ],
    "findings": [
      "The debt servicing model shows a longer term relationship, with domestic debt positively and significantly associated with servicing costs.",
      "The capital expenditure model does not establish a longer term relationship, although debt service has a significant joint short term association with capital expenditure."
    ],
    "limitation": "The study recommends attention to borrowing costs, revenue capacity and the timing of debt payments. The capital expenditure findings also have a model specification concern, so their interpretation requires care.",
    "source": "Reviewed against the research summary and supplied full report in the Emmyk Consult Drive collection. Findings are reported from the supplied documents; statistical estimates have not been independently reproduced. Reports are anonymised and individual project roles are not separately documented.",
    "resources": [
      {
        "label": "Read research summary on Drive",
        "url": "https://drive.google.com/file/d/1oV0ygBduLHKSajW3nJPb1IlwqgaYfgLC/view?usp=drivesdk",
        "type": "PDF"
      },
      {
        "label": "Read full report on Drive",
        "url": "https://drive.google.com/file/d/1ZUwzXMF6AjO37hZI_at-243m4DZHv4o2/view?usp=drivesdk",
        "type": "PDF"
      }
    ],
    "metrics": [
      {
        "value": "1986–2025",
        "label": "study period"
      },
      {
        "value": "ARDL",
        "label": "documented approach"
      }
    ],
    "researchTheme": "public-finance",
    "method": "ARDL",
    "dataType": "Time series",
    "implication": "The study recommends attention to borrowing costs, revenue capacity and the timing of debt payments. The capital expenditure findings also have a model specification concern, so their interpretation requires care.",
    "abstract": "This project examines whether rising domestic and external debt increase debt servicing pressure and affect capital expenditure in Nigeria between 1986 and 2025.",
    "folderUrl": "https://drive.google.com/drive/folders/1ls2QnNDP3WGoCfA-VI_lKCGKuOCU1gb_",
    "summaryText": "Public Debt and Economic Sustainability in Nigeria\n(1986–2025)\nRESEARCH SUMMARY\nWhat the project examines\nThis project examines whether rising domestic and external debt increase debt servicing pressure and\naffect capital expenditure in Nigeria between 1986 and 2025.\nHow the study was conducted\nThe study uses annual data and separate models for debt servicing and capital expenditure. It\ndistinguishes longer term relationships from short term movements.\nMain findings\nThe debt servicing model shows a longer term relationship, with domestic debt positively and significantly\nassociated with servicing costs. The capital expenditure model does not establish a longer term\nrelationship, although debt service has a significant joint short term association with capital expenditure.\nWhat the findings mean\nThe study recommends attention to borrowing costs, revenue capacity and the timing of debt payments.\nThe capital expenditure findings also have a model specification concern, so their interpretation requires\ncare.\nThis summary explains the supplied report. It does not replace the full project or independently reproduce\nits statistical analysis.",
    "sourceTitle": "Public Debt and Economic Sustainability in Nigeria"
  },
  {
    "id": "tax-reforms",
    "title": "Tax reforms and economic growth",
    "subtitle": "Tax Reforms and Economic Growth in Nigeria",
    "skill": "Research writing",
    "topic": "Public finance & growth",
    "description": "Tax instruments, reform periods and sensitivity to the estimation sample.",
    "tags": [
      "ARDL",
      "Time series",
      "Research writing"
    ],
    "image": "",
    "imageAlt": "",
    "status": "Research report & summary available",
    "period": "1986–2025 · model from 1994",
    "question": "How do tax instruments and reform periods relate to economic growth?",
    "approach": [
      "This project examines tax reforms and economic growth in Nigeria. The wider study covers 1986 to 2025, while the estimated model begins in 1994 because VAT starts in that year.",
      "The study uses annual data on output and major tax instruments, with a variable representing reform periods. It compares short term changes and longer term relationships and checks sensitivity to the final year of data."
    ],
    "findings": [
      "Petroleum profit tax has a positive and statistically significant long term coefficient.",
      "The reform indicator has a negative and significant coefficient.",
      "VAT becomes significant when provisional 2025 data are excluded, showing that the results depend partly on the sample."
    ],
    "limitation": "The study supports broadening the tax base and improving how tax revenue is spent. The reform indicator does not isolate a causal policy effect, and provisional data and diagnostic concerns qualify the conclusions.",
    "source": "Reviewed against the research summary and supplied full report in the Emmyk Consult Drive collection. Findings are reported from the supplied documents; statistical estimates have not been independently reproduced. Reports are anonymised and individual project roles are not separately documented.",
    "resources": [
      {
        "label": "Read research summary on Drive",
        "url": "https://drive.google.com/file/d/1Ot_7RPwU0OMRm2Ku9ROrC2DfGmZrSCbl/view?usp=drivesdk",
        "type": "PDF"
      },
      {
        "label": "Read full report on Drive",
        "url": "https://drive.google.com/file/d/12yDF5q9vJ9aUSwl9GBzaX5BCeSNqT-Zc/view?usp=drivesdk",
        "type": "PDF"
      }
    ],
    "metrics": [
      {
        "value": "1986–2025",
        "label": "study period"
      },
      {
        "value": "ARDL",
        "label": "documented approach"
      }
    ],
    "researchTheme": "public-finance",
    "method": "ARDL",
    "dataType": "Time series",
    "implication": "The study supports broadening the tax base and improving how tax revenue is spent. The reform indicator does not isolate a causal policy effect, and provisional data and diagnostic concerns qualify the conclusions.",
    "abstract": "This project examines tax reforms and economic growth in Nigeria. The wider study covers 1986 to 2025, while the estimated model begins in 1994 because VAT starts in that year.",
    "folderUrl": "https://drive.google.com/drive/folders/1YlZoskpBPpOJeRgzinKWIRAu4tS3kv_u",
    "summaryText": "Tax Reforms and Economic Growth in Nigeria\nRESEARCH SUMMARY\nWhat the project examines\nThis project examines tax reforms and economic growth in Nigeria. The wider study covers 1986 to 2025,\nwhile the estimated model begins in 1994 because VAT starts in that year.\nHow the study was conducted\nThe study uses annual data on output and major tax instruments, with a variable representing reform\nperiods. It compares short term changes and longer term relationships and checks sensitivity to the final\nyear of data.\nMain findings\nPetroleum profit tax has a positive and statistically significant long term coefficient. The reform indicator\nhas a negative and significant coefficient. VAT becomes significant when provisional 2025 data are\nexcluded, showing that the results depend partly on the sample.\nWhat the findings mean\nThe study supports broadening the tax base and improving how tax revenue is spent. The reform\nindicator does not isolate a causal policy effect, and provisional data and diagnostic concerns qualify the\nconclusions.\nThis summary explains the supplied report. It does not replace the full project or independently reproduce\nits statistical analysis.",
    "sourceTitle": "Tax Reforms and Economic Growth in Nigeria"
  },
  {
    "id": "public-debt-accumulation",
    "title": "Public debt accumulation and growth",
    "subtitle": "Effect of Public Debt Accumulation on Economic Growth in Nigeria",
    "skill": "Research writing",
    "topic": "Public finance & growth",
    "description": "Debt accumulation, investment and the strength of statistical evidence.",
    "tags": [
      "ARDL",
      "Time series",
      "Research writing"
    ],
    "image": "",
    "imageAlt": "",
    "status": "Research report & summary available",
    "period": "1986–2025 · model from 1989",
    "question": "Is accumulated public debt associated with economic growth in Nigeria?",
    "approach": [
      "This project examines whether accumulated public debt is associated with economic growth in Nigeria. It covers 1986 to 2025, with the selected model estimated using 1989 to 2025 observations.",
      "The study uses annual macroeconomic data and EViews. It considers domestic debt, external debt and debt service alongside investment and exchange rates, using a model that separates short and long term relationships."
    ],
    "findings": [
      "The report finds a longer term relationship among the model variables.",
      "However, the debt variables are not jointly significant in either the short or long term tests, and the individual long term debt coefficients are also insignificant."
    ],
    "limitation": "The study recommends stronger project appraisal and transparent reporting of debt financed activities. Serial correlation, overlapping explanatory variables and stability concerns limit the strength of the statistical conclusions.",
    "source": "Reviewed against the research summary and supplied full report in the Emmyk Consult Drive collection. Findings are reported from the supplied documents; statistical estimates have not been independently reproduced. Reports are anonymised and individual project roles are not separately documented.",
    "resources": [
      {
        "label": "Read research summary on Drive",
        "url": "https://drive.google.com/file/d/1ZNmKwxcL6lozxhUeSRK2WoTYffylNsX_/view?usp=drivesdk",
        "type": "PDF"
      },
      {
        "label": "Read full report on Drive",
        "url": "https://drive.google.com/file/d/1W9-mSO1wps5Nxt4uYA8sRHEL1vWPjssN/view?usp=drivesdk",
        "type": "PDF"
      }
    ],
    "metrics": [
      {
        "value": "1986–2025",
        "label": "study period"
      },
      {
        "value": "ARDL",
        "label": "documented approach"
      }
    ],
    "researchTheme": "public-finance",
    "method": "ARDL",
    "dataType": "Time series",
    "implication": "The study recommends stronger project appraisal and transparent reporting of debt financed activities. Serial correlation, overlapping explanatory variables and stability concerns limit the strength of the statistical conclusions.",
    "abstract": "This project examines whether accumulated public debt is associated with economic growth in Nigeria. It covers 1986 to 2025, with the selected model estimated using 1989 to 2025 observations.",
    "folderUrl": "https://drive.google.com/drive/folders/1TIHFAxUrvuWF-CY6KU2EBUCLZk86OFmc",
    "summaryText": "Effect of Public Debt Accumulation on Economic Growth\nin Nigeria\nRESEARCH SUMMARY\nWhat the project examines\nThis project examines whether accumulated public debt is associated with economic growth in Nigeria. It\ncovers 1986 to 2025, with the selected model estimated using 1989 to 2025 observations.\nHow the study was conducted\nThe study uses annual macroeconomic data and EViews. It considers domestic debt, external debt and\ndebt service alongside investment and exchange rates, using a model that separates short and long term\nrelationships.\nMain findings\nThe report finds a longer term relationship among the model variables. However, the debt variables are\nnot jointly significant in either the short or long term tests, and the individual long term debt coefficients\nare also insignificant.\nWhat the findings mean\nThe study recommends stronger project appraisal and transparent reporting of debt financed activities.\nSerial correlation, overlapping explanatory variables and stability concerns limit the strength of the\nstatistical conclusions.\nThis summary explains the supplied report. It does not replace the full project or independently reproduce\nits statistical analysis.",
    "sourceTitle": "Effect of Public Debt Accumulation on Economic Growth in Nigeria"
  }
];
