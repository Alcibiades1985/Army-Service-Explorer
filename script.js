/* ============================================================
   DUAL AXIS — CLEAN UNIFIED VERSION
   ============================================================
*/   // ← close it right here!

// --- Regimental data
   const regimentData = window.WWI_REGIMENT_DATA = {
     
  "Argyll & Sutherland Highlanders": [
    // POST-1917 TF RENUMBERING
  { range: [240001, 265000], battalion: "5th (Renfrewshire) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", battles: ["Passchendaele", "Hundred", "Somme"], category: "tf_renumbering", hotspot: ["Clackmannan", "Alloa", "Kinross districts"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [265001, 275000], battalion: "6th (Renfrewshire) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Paisley", "Clydeside industrial belt", "Renfrewshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [275001, 300000], battalion: "7th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Stirling", "Falkirk", "Lennoxtown"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [300001, 325000], battalion: "8th (The Argyllshire) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", battles: ["Passchendaele", "Spring", "Arras"], category: "tf_renumbering", hotspot: ["Argyllshire coastal areas", "Dunoon", "Campbeltown"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [325001, 350000], battalion: "9th (The Dumbartonshire) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", battles: ["Passchendaele"], category: "tf_renumbering", hotspot: ["Dumbarton", "Vale of Leven", "Clydeside industrial belt"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

// Regulars
  { range: [1, 1727], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI  – Aug 1914", battles: ["Mons", "Somme", "Passchendaele", "Arras"], category: "regular_prewar", hotspot: ["Stirling", "Glasgow", "Rural Argyllshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },    
{ range: [1728, 3227], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Stirling", "Glasgow", "Rural Argyllshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
    { range: [3228, 8700], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Stirling", "Glasgow", "Rural Argyllshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

// PRE-1917 TERRITORIAL FORCE  
 { range: [1, 3000], battalion: "5th-9th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Loos", "Passchendaele", "Spring", "Somme"], category: "tf_pre1917", hotspot: ["Paisley", "Clydeside industrial belt", "Renfrewshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }], },
{ range: [3001, 5500], battalion: "5th-9th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – late 1916", battles: ["Loos", "Passchendaele", "Spring", "Somme"], category: "tf_pre1917", hotspot: ["Paisley", "Clydeside industrial belt", "Renfrewshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }], },
{ range: [5501, 9999], battalion: "5th-9th Territorial Force (TF) Battalions", tf: true, date: "late 1916 – early 1917", battles: ["Loos", "Passchendaele", "Spring", "Somme"], category: "tf_pre1917", hotspot: ["Paisley", "Clydeside industrial belt", "Renfrewshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }], },
   
   // SERVICE BATTALIONS (Kitchener’s Army)
    
 { range: [1600, 9750], battalion: "10th–12th (Service) Battalions", date: "Aug – June 1915", requiresPrefix: true, allowedPrefixes: ["S", "S/"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Argyllshire", "Stirling", "Buteshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 12, theatre: "East" }] },
 { range: [9751, 14600], battalion: "10th–12th & 14th (Service) Battalions", date: "July 1915 - Dec 1915", requiresPrefix: true, allowedPrefixes: ["S", "S/"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Argyllshire", "Stirling", "Buteshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 12, theatre: "East" }] }, 
 { range: [14601, 18300], battalion: "10th–12th & 14th (Service) Battalions", date: "Jan 1916 - Nov 1916", requiresPrefix: true, allowedPrefixes: ["S", "S/"], battles: ["Spring", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Argyllshire", "Stirling", "Buteshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 12, theatre: "East" }] }, 
 { range: [18301, 21800], battalion: "10th–12th & 14th (Service) Battalions", date: "Dec 1916 - mid 1917", requiresPrefix: true, allowedPrefixes: ["S", "S/"], battles: ["Spring", "Passchendaele", "Arras"], category: "service", hotspot: ["Argyllshire", "Stirling", "Buteshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 12, theatre: "East" }] }, 

// MISC
  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Sterling, Argyllshire) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 99999], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: ["Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Sterling, Argyllshire) but increasingly fed by conscripts and transfers from across Britain"], theatre: ["Home"], },
  { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
   
 ],    

"Bedfordshire Regiment": [
  // POST-1917 TF RENUMBERING
  { range: [200001, 240000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Luton", "Dunstable", "Bedford"], theatre: "East", },
  { range: [240001, 265000], battalion: "11th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918", category: "tf_renumbering", hotspot: ["Bedford", "Hertfordshire", "Biggleswade"], theatre: "Home", },
  { range: [290001, 315000], battalion: "1st Huntingdonshire Cyclist Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Huntingdon", "Godmanchester", "St Ives"], theatre: "Home", },
  
// Regulars
  { range: [1, 10358], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Mons", "Loos", "Somme", "Arras"], category: "regular_prewar", hotspot: ["Bedford", "Luton", "Hertfordshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [10359, 13880], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Loos", "Somme", "Arras"], category: "regular_wartime", hotspot: ["Bedford", "Luton", "Hertfordshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [13881, 18116], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Bedford", "Luton", "Hertfordshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

  
  // PRE-1917 TERRITORIAL FORCE  
  { range: [1, 4000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Pre-WWI – Aug 1914", category: "tf_pre1917", hotspot: ["Bedford", "Luton", "Hertfordshire"], theatre: "East" },
{ range: [4001, 7000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Aug 1914 – mid 1915", category: "tf_pre1917", hotspot: ["Bedford", "Luton", "Hertfordshire"], theatre: "East" },
{ range: [7001, 9999], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "mid 1915 – early 1917", category: "tf_pre1917", hotspot: ["Bedford", "Luton", "Hertfordshire"], theatre: "East" },


  // SERVICE BATTALIONS (Kitchener’s Army)
  
 { range: [10450, 18500], battalion: "6th, 7th or 8th (Service) Battalions", date: "Aug 1914 – Jun 1915", battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Bedford", "Hertfordshire", "Luton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
 { range: [18501, 23000], battalion: "6th, 7th or 8th (Service) Battalions", date: "July 1915 - Dec 1915", battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Bedford", "Hertfordshire", "Luton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
 { range: [23001, 31500], battalion: "6th, 7th or 8th (Service) Battalions", date: "Jan 1916 - Nov 1916", battles: ["Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Bedford", "Hertfordshire", "Luton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [31501, 43000], battalion: "6th, 7th or 8th (Service) Battalions", date: "Dec 1916 - mid 1917", battles: ["Passchendaele", "Arras"], category: "service", hotspot: ["Bedford", "Hertfordshire", "Luton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
  // MISC
  { range: [4000, 9000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Sterling, Argyllshire) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [6000, 7500], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Sterling, Argyllshire) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
  
],
     
"Black Watch (Royal Highland Regiment)": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 250000], battalion: "4th (City of Dundee) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras"], category: "tf_renumbering", hotspot: ["Dundee", "Angus", "Forfarshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [250001, 265000], battalion: "5th (Angus and Dundee) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras"], category: "tf_renumbering", hotspot: ["Arbroath", "Montrose", "Kirriemuir"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 290000], battalion: "6th (Perthshire) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Perth", "Blairgowrie", "Pitlochry"],cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [290001, 315000], battalion: "7th (Fife) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["St Andrews", "Cupar", "Anstruther"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [315001, 340000], battalion: "13th (Scottish Horse Yeomanry) Territorial Force (TF) Battalion", tf: true, date: "Oct 1916 - mid 1918" , category: "tf_renumbering", hotspot: ["Dundalk", "Aberdeen", "Blair Atholl"], theatre: "Home", },
{ range: [340001, 350000], battalion: "14th (Fife and Forfar Yeomanry) Territorial Force (TF) Battalion", tf: true, date: "Dec 1916 - 1918" , category: "tf_renumbering", hotspot: ["Fife", "Forfar", "Kinross"], theatre: "East", },
{ range: [350001, 375000], battalion: "1st Highland Cyclist Territorial Force (TF) Battalion", tf: true, date: "Mar 1917 - 1918" , category: "tf_renumbering", hotspot: ["Kircaldy", "Dunfermline", "Perthshire" ], theatre: ["Home"], },
// ⚠️ Do NOT duplicate 350001–375000 elsewhere: Highland Cyclist Bn is listed under Black Watch in the official table.

// Regulars
  { range: [1, 2652], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Mons", "Loos", "Somme", "Hundred"], category: "regular_prewar", hotspot: ["Perth", "Dundee industrial belt", "St Andrews"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },
{ range: [2653, 4200], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Loos", "Somme", "Arras", "Passchendaele"], category: "regular_wartime", hotspot: ["Perth", "Dundee industrial belt", "St Andrews"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },
{ range: [4201, 6000], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Perth", "Dundee industrial belt", "St Andrews"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },

// PRE-1917 TERRITORIAL FORCE
{ range: [1, 2000], battalion: "4th-7th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Loos", "Somme", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Dundee", "Fife", "Perth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2001, 4000], battalion: "4th-7th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – late 1915", battles: ["Loos", "Somme", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Dundee", "Fife", "Perth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4001, 9999], battalion: "4th-7th Territorial Force (TF) Battalions", tf: true, date: "1916 – early 1917", battles: ["Loos", "Somme", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Dundee", "Fife", "Perth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// SERVICE BATTALIONS (Kitchener’s Army)
  
  { range: [3000, 9500], battalion: "8th-10th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["S/"], category: "service", hotspot: ["Dundee", "Perthshire", "Fife towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 10, theatre: "East" }], },
  { range: [9501, 12000], battalion: "8th-10th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["S/"], category: "service", hotspot: ["Dundee", "Perthshire", "Fife towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 10, theatre: "East" }], },
  { range: [12001, 16500], battalion: "8th-10th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["S/"], category: "service", hotspot: ["Dundee", "Perthshire", "Fife towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 10, theatre: "East" }], },
  { range: [16501, 21000], battalion: "8th-10th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["S/"], category: "service", hotspot: ["Dundee", "Perthshire", "Fife towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 10, theatre: "East" }], },

// MISC
  { range: [1, 9000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Sterling, Argyllshire) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 4000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
  { range: [40000, 40999], battalion: "Late-war catch-all (Depot allocations)", date: "1917 – 1918", requiresPrefix: true, allowedPrefixes: ["S/"] , category: "misc", hotspot: "Depot intakes and late-war administrative allocations", theatre: "Home", },
  
],
     
"Border Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th (Cumberland and Westmorland) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["India"], category: "tf_renumbering", hotspot: ["Carlisle", "Kendal", "Penrith"], },
{ range: [240001, 265000], battalion: "5th (Cumberland) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Workington", "Whitehaven", "west Cumberland mining towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

//Regulars
  { range: [1, 10800], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_prewar", hotspot: ["Carlisle", "Whitehaven", "west Cumberland mining towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [10801, 14500], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Loos", "Somme", "Arras", "Passchendaele"], category: "regular_wartime", hotspot: ["Carlisle", "Whitehaven", "west Cumberland mining towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [14501, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["Carlisle", "Whitehaven", "west Cumberland mining towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

 // PRE-1917 TERRITORIAL FORCE
{ range: [1, 1900], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "tf_pre1917", hotspot: ["Carlisle", "Workington", "Westmorland villages"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "India" }], },
{ range: [1901, 5200], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "tf_pre1917", hotspot: ["Carlisle", "Workington", "Westmorland villages"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"],alt: [{ bn: 4, theatre: "India" }], },
{ range: [5201, 9999], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "tf_pre1917", hotspot: ["Carlisle", "Workington", "Westmorland villages"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "India" }], },

// SERVICE BATTALIONS (Kitchener’s Army)
  { range: [10500, 18500], battalion: "6th, 7th, 8th or 9th (Service) Battalion", date: "Aug 1914 – June 1915" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Carlisle", "Westmorland villages", "Lancashire spillover recruits"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 9, theatre: "East" }], },
  { range: [18501, 22500], battalion: "6th, 7th, 8th or 9th & 11th (Service) Battalion", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Carlisle", "Westmorland villages", "Lancashire spillover recruits"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 9, theatre: "East" }], },
  { range: [22501, 27500], battalion: "6th, 7th, 8th, 9th & 11th (Service) Battalion", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Carlisle", "Workington", "Barrow-in-Furness"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 9, theatre: "East" }], },
  { range: [27501, 34000], battalion: "6th, 7th, 8th, 9th & 11th (Service) Battalion", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Carlisle", "Workington", "Barrow-in-Furness"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 9, theatre: "East" }], },
  
  { range: [1, 1200], battalion: "11th (Service) Battalion (Lonsdale)", date: "Sep 1914 – mid 1915" , battles: ["Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["11/", "11"], category: "service", hotspot: ["Carlisle", "Workington", "Barrow-in-Furness"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// MISC
  
{ range: [2500, 9000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Carlisle, Whitehaven) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
  
],
     
"Buffs (East Kent Regiment)": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Canterbury", "Faversham", "Kent coastal communities"], theatre: "India", },
{ range: [240001, 265000], battalion: "5th (Weald of Kent) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Ashford", "Weald of Kent", "Canterbury"], theatre: "India", },
// ⚠️ Yeomanry origin — formed from Royal East Kent & West Kent Yeomanry (Egypt); avoid duplicating under Yeomanry or West Kent
{ range: [265001, 275000], battalion: "10th (Royal East Kent and West Kent Yeomanry) Territorial Force (TF) Battalion", tf: true, date: "Feb 1917-1918" , battles: ["Hundred"], category: "tf_renumbering", hotspot: ["Canterbury", "Ashford", "Maidstone"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

//Regulars
  { range: [1, 10247], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_prewar", hotspot: ["Canterbury", "Dover", "Ashford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [10248, 11000], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", requiresPrefix: true, allowedPrefixes: ["L", "L/"], battles: ["Loos", "Somme", "Arras", "Passchendaele"], category: "regular_wartime", hotspot: ["Canterbury", "Dover", "Ashford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [11001, 12500], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", requiresPrefix: true, allowedPrefixes: ["L", "L/"], battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["Canterbury", "Dover", "Ashford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
  
    // PRE-1917 TERRITORIAL FORCE
{ range: [1, 1400], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", category: "tf_pre1917", hotspot: ["Canterbury", "Ashford", "Kent coastal communities"], theatre: "India" },
{ range: [1401, 5000], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", category: "tf_pre1917", hotspot: ["Canterbury", "Ashford", "Kent coastal communities"], theatre: "India" },
{ range: [5001, 9999], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", category: "tf_pre1917", hotspot: ["Canterbury", "Ashford", "Kent coastal communities"], theatre: "India" },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [1, 6000], battalion: "6th, 7th or 8th (Service) Battalion", date: "Aug 1914 – June 1915" , requiresPrefix: true, allowedPrefixes: ["G", "G/"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Canterbury", "Ashford", "Weald"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [6001, 8200], battalion: "6th, 7th or 8th (Service) Battalion", date: "July 1915 – Dec 1915" , requiresPrefix: true, allowedPrefixes: ["G", "G/"], battles: ["Loos", "Somme", "Passchendaele", "Arras"],  category: "service", hotspot: ["Canterbury", "Ashford", "Weald"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [8201, 13500], battalion: "6th, 7th or 8th (Service) Battalion", date: "Jan 1916 – Nov 1916" , requiresPrefix: true, allowedPrefixes: ["G", "G/"], battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Canterbury", "Ashford", "Weald"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [13501, 18000], battalion: "6th, 7th or 8th (Service) Battalion", date: "Dec 1916 – Mid 1917" , requiresPrefix: true, allowedPrefixes: ["G", "G/"], battles: ["Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Canterbury", "Ashford", "Weald"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// MISC
  
 { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Canterbury, Ashford) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
  
],
     
     "Cambridgeshire Regiment": [
  // POST-1917 TF RENUMBERING FIRST
 { range: [325001, 350000], battalion: "1st Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Cambridge", "Wisbech", "March"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

 // PRE-1917 TERRITORIAL FORCE
{ range: [1, 2200], battalion: "1st Territorial Force (TF) Battalion", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "tf_pre1917", hotspot: ["Cambridge", "Wisbech", "March"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2201, 4500], battalion: "1st Territorial Force (TF) Battalion", tf: true, date: "Aug 1914 – mid-1915", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "tf_pre1917", hotspot: ["Cambridge", "Wisbech", "March"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4501, 9999], battalion: "1st Territorial Force (TF) Battalion", tf: true, date: "late 1915 – early 1917", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "tf_pre1917", hotspot: ["Cambridge", "Wisbech", "March"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

//MISC
  { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
    
//No regulars nor service battalions

],

     "Cameronians (Scottish Rifles)": [
 // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras"], category: "tf_renumbering", hotspot: ["Glasgow", "Lanarkshire mining towns", "Clyde Valley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "6th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Somme"], category: "tf_renumbering", hotspot: ["Hamilton", "Motherwell", "Wishaw"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 290000], battalion: "7th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["East"], category: "tf_renumbering", hotspot: ["Glasgow", "Lanarkshire mining towns", "Motherwell"], },
{ range: [290001, 315000], battalion: "8th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Central Glasgow", "Lanarkshire mining towns", "Hamilton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [315001, 340000], battalion: "15th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Hamilton", "Motherwell", "Glasgow"], theatre: "Home", },

// Regulars
  { range: [1, 11150], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI– Aug 1914", battles: ["Mons", "Loos", "Somme", "Arras"], category: "regular_prewar", hotspot: ["Glasgow", "Lanarkshire industrial belt", "Dumfries"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [11151, 14500], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Loos", "Somme", "Arras", "Passchendaele"], category: "regular_wartime", hotspot: ["Glasgow", "Lanarkshire industrial belt", "Dumfries"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [14501, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Glasgow", "Lanarkshire industrial belt", "Dumfries"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },


  // PRE-1917 TERRITORIAL FORCE
{ range: [1, 5000], battalion: "5th-8th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – mid 1914", battles: ["Loos", "Somme", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Glasgow", "Lanarkshire", "Motherwell"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" }], },
{ range: [5001, 8000], battalion: "5th-8th Territorial Force (TF) Battalions", tf: true, date: "mid 1914 – late 1915", battles: ["Loos", "Somme", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Glasgow", "Lanarkshire", "Motherwell"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" }], },
{ range: [8001, 9999], battalion: "5th-8th Territorial Force (TF) Battalions", tf: true, date: "1916 – early 1917", battles: ["Loos", "Somme", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Glasgow", "Lanarkshire", "Motherwell"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" }], },


 // SERVICE BATTALIONS (Kitchener’s Army)
{ range: [10000, 16500], battalion: "9th-11th (Service) Battalions", date: "Aug 1914 – June 1915", battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["S/", "B"], category: "service", hotspot: ["Glasgow", "Lanarkshire mining towns", "Scottish Lowlands spillover"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 11, theatre: "East" }], },
{ range: [16501, 21000], battalion: "9th-11th & 13th (Service) Battalions", date: "July 1915 – Dec 1915", battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["S/", "B"], category: "service", hotspot: ["Glasgow", "Lanarkshire mining towns", "Scottish Lowlands spillover"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 11, theatre: "East" }], },
{ range: [21001, 29000], battalion: "9th-11th & 13th (Service) Battalions", date: "Jan 1916 – Nov 1916", battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["S/", "B"], category: "service", hotspot: ["Glasgow", "Lanarkshire mining towns", "Scottish Lowlands spillover"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 11, theatre: "East" }], },
{ range: [29001, 42000], battalion: "9th-11th (Service) Battalions", date: "Dec 1916 – mid 1917", battles: ["Passchendaele", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["S/", "B"], category: "service", hotspot: ["Glasgow", "Lanarkshire mining towns", "Scottish Lowlands spillover"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 11, theatre: "East" }], },

// MISC
  
  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Glasgow, Motherwell) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 99999], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Glasgow, Motherwell) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
    { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Cheshire Regiment": [
  // POST-1917 TF RENUMBERING FIRST
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["East"], category: "tf_renumbering", hotspot: ["Birkenhead", "Tranmere", "Liscard"], },
{ range: [240001, 265000], battalion: "5th (Earl of Chester’s) Territorial Force (TF) Battalion", tf: true, date: "Mar–Apr 1917" , battles: ["Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Chester", "Hartford", "Altcar"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 290000], battalion: "6th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Stockport", "Stalybridge", "Hyde"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [290001, 315000], battalion: "7th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["East"], category: "tf_renumbering", hotspot: ["Macclesfield", "Stockport", "Chester"], },

// Regulars
  { range: [1, 10523], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Mons", "Loos", "Somme", "Arras"], category: "regular_prewar", hotspot: ["Chester", "Merseyside Docklands", "Stockport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },
{ range: [10524, 14999], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Loos", "Somme", "Arras", "Passchendaele"], category: "regular_wartime", hotspot: ["Chester", "Merseyside Docklands", "Stockport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },
{ range: [15000, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["Chester", "Merseyside Docklands", "Stockport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },

// PRE-1917 TERRITORIAL FORCE
{ range: [1, 2200], battalion: "4th-7th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Somme", "Spring", "Arras", "Hundred"], category: "tf_pre1917", hotspot: ["Birkenhead", "Chester", "Stockport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" }, { bn: 7, theatre: "East" }], },
{ range: [2201, 4000], battalion: "4th-7th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", battles: ["Somme", "Spring", "Arras", "Hundred"], category: "tf_pre1917", hotspot: ["Birkenhead", "Chester", "Stockport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" }, { bn: 7, theatre: "East" }], },
{ range: [4001, 9999], battalion: "4th-7th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Somme", "Spring", "Arras", "Hundred"], category: "tf_pre1917", hotspot: ["Birkenhead", "Chester", "Stockport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" }, { bn: 7, theatre: "East" }], },


// SERVICE BATTALIONS (Kitchener’s Army)

{ range: [12000, 25500], battalion: "8th–13th & 15th-16th (Service) Battalions", date: "Sep 1914 – June 1915", battles: ["Somme", "Passchendaele", "Spring", "Hundred"], requiresPrefix: true, allowedPrefixes: ["W/"], category: "service", hotspot: ["Chester", "Birkenhead", "Stockport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }, { bn: 12, theatre: "East" }], },
{ range: [25501, 30000], battalion: "8th–13th & 15th-16th (Service) Battalions", date: "July – Dec 1915", battles: ["Somme", "Passchendaele", "Hundred", "Spring"], requiresPrefix: true, allowedPrefixes: ["W/"], category: "service", hotspot: ["Chester", "Birkenhead", "Stockport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }, { bn: 12, theatre: "East" }], },
{ range: [30001, 48000], battalion: "8th–13th & 15th-16th (Service) Battalions", date: "Jan 1916 – Nov 1916", battles: ["Somme", "Passchendaele", "Hundred", "Spring"], requiresPrefix: true, allowedPrefixes: ["W/"], category: "service", hotspot: ["Chester", "Birkenhead", "Stockport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }, { bn: 12, theatre: "East" }], },
{ range: [48001, 54000], battalion: "8th–13th & 15th-16th (Service) Battalions", date: "Dec 1916 – mid 1917", battles: ["Passchendaele", "Spring", "Hundred"], requiresPrefix: true, allowedPrefixes: ["W/"], category: "service", hotspot: ["Chester", "Birkenhead", "Stockport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }, { bn: 12, theatre: "East" }], },


// MISC
  
  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Chester, Merseyside Dockland) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Connaught Rangers": [
//Regulars
  { range: [1, 10860], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Mons", "Loos", "Passchendaele", "Spring"], category: "regular_prewar", hotspot: ["Galway", "County Mayo", "Connemara"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" }], },
{ range: [10861, 14999], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Loos", "Passchendaele", "Spring"], category: "regular_wartime", hotspot: ["Galway", "County Mayo", "Connemara"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" }], },
{ range: [15000, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Loos", "Passchendaele", "Spring"], category: "regular_wartime", hotspot: ["Galway", "County Mayo", "Connemara"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" }], },

// SERVICE BATTALIONS (Kitchener’s Army)
  { range: [1, 3800], battalion: "5th (Service) Battalion", date: "Aug 1914 – June 1915" , theatre: "East", requiresPrefix: true, allowedPrefixes: ["5/"], category: "service", hotspot: ["Galway", "Dublin", "Connacht countryside"], },
  { range: [3801, 5400], battalion: "5th (Service) Battalion", date: "July 1915 – Dec 1915" , theatre: "East", requiresPrefix: true, allowedPrefixes: ["5/"], category: "service", hotspot: ["Galway", "Dublin", "Connacht countryside"], },
  { range: [5401, 7900], battalion: "5th (Service) Battalion", date: "Jan 1916 – Nov 1916" , theatre: "East", requiresPrefix: true, allowedPrefixes: ["5/"], category: "service", hotspot: ["Galway", "Dublin", "Connacht countryside"], },
  { range: [7901, 10200], battalion: "5th (Service) Battalion", date: "Dec 1916 – mid 1917" , theatre: "East", requiresPrefix: true, allowedPrefixes: ["5/"], category: "service", hotspot: ["Galway", "Dublin", "Connacht countryside"], },
       
  { range: [1, 3800], battalion: "6th (Service) Battalion", date: "Aug 1914 – June 1915" , battles: ["Passchendaele", "Spring", "Hundred"], requiresPrefix: true, allowedPrefixes: ["6/"], category: "service", hotspot: ["Galway", "Dublin", "Connacht countryside"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [3801, 5400], battalion: "6th (Service) Battalion", date: "July 1915 – Dec 1915" , battles: ["Passchendaele", "Spring", "Hundred"], requiresPrefix: true, allowedPrefixes: ["6/"], category: "service", hotspot: ["Galway", "Dublin", "Connacht countryside"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [5401, 7900], battalion: "6th (Service) Battalion", date: "Jan 1916 – Nov 1916" , battles: ["Passchendaele", "Spring", "Hundred"], requiresPrefix: true, allowedPrefixes: ["6/"], category: "service", hotspot: ["Galway", "Dublin", "Connacht countryside"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [7901, 10200], battalion: "6th (Service) Battalion", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Spring", "Hundred"], requiresPrefix: true, allowedPrefixes: ["6/"], category: "service", hotspot: ["Galway", "Dublin", "Connacht countryside"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
// MISC
  
  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Galway, County Mayo) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 99999], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Galway, County Mayo) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
   { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

// No Territorial Force battalions

],
     
     "Devonshire Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Exeter", "Exmouth", "Tiverton"], theatre: "East", },
{ range: [240001, 265000], battalion: "5th (Prince of Wales’s) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["India"], category: "tf_renumbering", hotspot: ["Plymouth", "Newton Abbot", "Torquay"], },
{ range: [265001, 290000], battalion: "6th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Barnstaple", "Exmouth", "Exeter"], theatre: "East", },
{ range: [290001, 315000], battalion: "7th (Cyclist) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Exeter", "Totnes", "Dart Valley"], theatre: "Home", },
{ range: [315001, 340000], battalion: "15th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Exeter", "Barnstaple", "Plymouth"], theatre: "Home", },
// ⚠️ formed from Yeomanry; avoid duplicate if Yeomanry blocks are listed separately
{ range: [340001, 350000], battalion: "16th (Royal 1st Devon and Royal North Devon Yeomanry) Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , battles: ["Hundred"], category: "tf_renumbering", hotspot: ["Barnstaple", "Tiverton", "Plymouth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

//Regulars
  { range: [1, 9952], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Mons", "Loos", "Somme", "Arras"], category: "regular_prewar", hotspot: ["Exeter", "Plymouth", "Barnstaple"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [9953, 13999], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Exeter", "Plymouth", "Barnstaple"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [14000, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Exeter", "Plymouth", "Barnstaple"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

  // PRE-1917 TERRITORIAL FORCE
{ range: [1401, 2200], battalion: "4th-7th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", category: "tf_pre1917", hotspot: ["Exeter", "Plymouth", "Barnstaple"], alt: [{ bn: 4, theatre: "East" }, { bn: 5, theatre: "India" }, { bn:6, theatre: "East" }, { bn: 7, theatre: "Home" },] },
{ range: [2201, 3000], battalion: "4th-7th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – late 1914", category: "tf_pre1917", hotspot: ["Exeter", "Plymouth", "Barnstaple"], alt: [{ bn: 4, theatre: "East" }, { bn: 5, theatre: "India" }, { bn:6, theatre: "East" }, { bn: 7, theatre: "Home" },] },
{ range: [3001, 9999], battalion: "4th-7th Territorial Force (TF) Battalions", tf: true, date: "1915 – early 1917", category: "tf_pre1917", hotspot: ["Exeter", "Plymouth", "Barnstaple"], alt: [{ bn: 4, theatre: "East" }, { bn: 5, theatre: "India" }, { bn:6, theatre: "East" }, { bn: 7, theatre: "Home" },] },


 // SERVICE BATTALIONS (Kitchener’s Army)
{ range: [10000, 16000], battalion: "8th–10th (Service) Battalions", date: "Aug 1914 – June 1915", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Exeter", "Plymouth", "Barnstaple"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 10, theatre: "East" }], },
{ range: [16001, 21500], battalion: "8th–10th (Service) Battalions", date: "July 1915 – Dec 1915", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Exeter", "Plymouth", "Barnstaple"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 10, theatre: "East" }], },  
{ range: [21501, 35000], battalion: "8th–10th (Service) Battalions", date: "Jan 1916 – Nov 1916", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Exeter", "Plymouth", "Barnstaple"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 10, theatre: "East" }], }, 
{ range: [35001, 48000], battalion: "8th–10th (Service) Battalions", date: "Dec 1916 – mid 1917", battles: ["Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Exeter", "Plymouth", "Barnstaple"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 10, theatre: "East" }], },

// MISC

{ range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Exeter, Plymouth) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Dorsetshire Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 225000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Dorchester", "Poole", "Wareham"], theatre: "East", },

  //Regulars 
  { range: [1, 9784], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Mons", "Somme", "Passchendaele", "Hundred"], category: "regular_prewar", hotspot: ["Dorchester", "Weymouth", "Poole"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },
{ range: [9785, 13499], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Hundred", "Loos", "Passchendaele", "Somme"], category: "regular_wartime", hotspot: ["Dorchester", "Weymouth", "Poole"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },
{ range: [13500, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Passchendaele", "Loos", "Hundred"], category: "regular_wartime", hotspot: ["Dorchester", "Weymouth", "Poole"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"],alt: [{ bn: 2, theatre: "East" }], },

  // PRE-1917 TERRITORIAL FORCE
{ range: [1, 2200], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Pre-WWI – Aug 1914", category: "tf_pre1917", hotspot: ["Dorchester", "Poole", "Wareham"], theatre: "East", },
{ range: [2201, 4000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Aug 1914 – mid 1915", category: "tf_pre1917", hotspot: ["Dorchester", "Poole", "Wareham"], theatre: "East", },
{ range: [4001, 9999], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "mid 1915 – early 1917", category: "tf_pre1917", hotspot: ["Dorchester", "Poole", "Wareham"], theatre: "East", },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [9450, 14500], battalion: "5th or 6th (Service) Battalion", date: "Aug 1914 – June 1915", battles: ["Loos", "Somme", "Passchendaele", "Hundred"], category: "service", hotspot: ["Dorchester", "Bournemouth", "Weymouth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [14501, 17000], battalion: "5th or 6th (Service) Battalion", date: "July 1915 – Dec 1915", battles: ["Loos", "Somme", "Passchendaele", "Hundred"], category: "service", hotspot: ["Dorchester", "Bournemouth", "Weymouth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [17001, 21500], battalion: "5th or 6th (Service) Battalion", date: "Jan 1916 – Nov 1916", battles: ["Somme", "Passchendaele", "Hundred"], category: "service", hotspot: ["Dorchester", "Bournemouth", "Weymouth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [21501, 28000], battalion: "5th or 6th (Service) Battalion", date: "Dec 1916 – mid 1917", battles: ["Passchendaele", "Hundred"], category: "service", hotspot: ["Dorchester", "Bournemouth", "Weymouth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

// MISC
  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Bournemouth, Weymouth) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
 
],
     
     "Duke of Cornwall's Light Infantry": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Truro", "Falmouth", "Redruth"], theatre: "East", },
{ range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Bodmin", "St Austell", "Launceston"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
// Regulars
  { range: [1, 10456], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Mons", "Somme", "Passchendaele", "Arras"], category: "regular_prewar", hotspot: ["Bodmin", "Redruth", "Cornish mining district"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },
{ range: [10457, 13999], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Bodmin", "Redruth", "Cornish mining district"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },
{ range: [14000, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Bodmin", "Redruth", "Cornish mining district"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },

   // PRE-1917 TERRITORIAL FORCE
{ range: [1, 2200], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", category: "tf_pre1917", hotspot: ["Truro", "Bodmin", "Cornish mining district"], theatre: "East", },
{ range: [2201, 4000], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", category: "tf_pre1917", hotspot: ["Truro", "Bodmin", "Cornish mining district"], theatre: "East", },
{ range: [4001, 9999], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", category: "tf_pre1917", hotspot: ["Truro", "Bodmin", "Cornish mining district"], theatre: "East", },

  // SERVICE BATTALIONS (Kitchener’s Army)
{ range: [9000, 18500], battalion: "6th-8th & 10th (Service) Battalions", date: "Aug 1914 – June 1915", battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Bodmin", "Redruth", "Cornish mining district"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }], },
{ range: [18501, 22000], battalion: "6th-8th & 10th (Service) Battalions", date: "July 1915 – Dec 1915", battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Bodmin", "Redruth", "Cornish mining district"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }], },   
{ range: [22001, 27500], battalion: "6th-8th & 10th (Service) Battalions", date: "Jan 1916 – Nov 1916", battles: ["Somme", "Arras", "Passchendaele", "Hundred"], category: "service", hotspot: ["Bodmin", "Redruth", "Cornish mining district"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }], },
{ range: [27501, 35000], battalion: "6th-8th & 10th (Service) Battalions", date: "Dec 1916 – mid 1917", battles: ["Arras", "Passchendaele", "Hundred"], category: "service", hotspot: ["Bodmin", "Redruth", "Cornish mining district"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }], },

// MISC
  
  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Truro Bodmin) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
 { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Duke of Wellington's (West Riding Regiment)": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Halifax", "Huddersfield", "Bradford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"],  },
{ range: [240001, 265000], battalion: "5th (Huddersfield Rifles) Territorial Force (TF) Battalion)", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Huddersfield", "Colne Valley mills", "Mirfield"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 305000], battalion: "6th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred", "Arras"], category: "tf_renumbering", hotspot: ["Skipton", "Keighley", "Bingley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [305001, 330000], battalion: "7th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred", "Arras"], category: "tf_renumbering", hotspot: ["Milnsbridge", "Huddersfield", "Colne Valley mills"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"],  },

//Regulars
  { range: [1, 10705], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Mons", "Somme", "Passchendaele", "Arras"], category: "regular_prewar", hotspot: ["Halifax", "Huddersfield", "West Riding industrial belt"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "India" }], },
{ range: [10706, 13999], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Halifax", "Huddersfield", "West Riding industrial belt"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "India" }], },
{ range: [14000, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Halifax", "Huddersfield", "West Riding industrial belt"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "India" }], },

  // PRE-1917 TERRITORIAL FORCE
{ range: [1, 2200], battalion: "4th–7th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_pre1917", hotspot: ["Halifax", "Huddersfield", "Colne Valley mills"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2201, 4000], battalion: "4th–7th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_pre1917", hotspot: ["Halifax", "Huddersfield", "Colne Valley mills"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4001, 9999], battalion: "4th–7th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_pre1917", hotspot: ["Halifax", "Huddersfield", "Colne Valley mills"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// SERVICE BATTALIONS (Kitchener’s Army)
   { range: [10800, 16500], battalion: "8th–10th (Service) Battalions", date: "Aug – June 1915", battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Halifax", "Huddersfield", "Yorkshire industrial towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [16501, 18500], battalion: "8th–10th (Service) Battalions", date: "July 1915 – Dec 1915", battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Halifax", "Huddersfield", "Yorkshire industrial towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [18501, 24000], battalion: "8th–10th (Service) Battalions", date: "Jan 1916 – Nov 1916", battles: ["Passchendaele", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Halifax", "Huddersfield", "Bradford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [24001, 28000], battalion: "8th–10th (Service) Battalions", date: "Dec 1916 – mid 1917", battles: ["Passchendaele", "Arras", "Passchendaele", "Hundred"], category: "service", hotspot: ["Halifax", "Huddersfield", "Bradford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

// MISC
  
  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Halifax, Huddersfield) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Durham Light Infantry": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Stockton on Tees", "Gateshead", "Durham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "6th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras"], category: "tf_renumbering", hotspot: ["Bishop Auckland", "Crook", "Stanhope"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 290000], battalion: "7th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Bishop Auckland", "Sunderland", "Gateshead"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [290001, 315000], battalion: "8th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", battles: ["Passchendaele", "Spring", "Arras"], category: "tf_renumbering", hotspot: ["Durham", "Consett", "Houghton le Spring"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [315001, 340000], battalion: "9th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Gateshead", "Low Fell", "Wrekenton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

//Regulars
  { range: [1, 11714], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_prewar", hotspot: ["Durham", "Sunderland", "County Durham mining villages"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "India" }], },
{ range: [11715, 13999], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Loos", "Somme", "Arras", "Passchendaele"], category: "regular_wartime", hotspot: ["Durham", "Sunderland", "County Durham mining villages"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "India" }], },
{ range: [14000, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Arras", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Durham", "Sunderland", "County Durham mining villages"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "India" }], },
  
   // PRE-1917 TERRITORIAL FORCE
{ range: [1, 2200], battalion: "5th–9th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Passchendaele", "Spring", "Somme", "Hundred"], category: "tf_pre1917", hotspot: ["Sunderland", "Durham City", "Bishop Auckland"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2201, 4000], battalion: "5th–9th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", battles: ["Passchendaele", "Spring", "Somme", "Hundred"], category: "tf_pre1917", hotspot: ["Sunderland", "Durham City", "Bishop Auckland"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4001, 9999], battalion: "5th–9th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Passchendaele", "Spring", "Somme", "Hundred"], category: "tf_pre1917", hotspot: ["Sunderland", "Durham City", "Bishop Auckland"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [11715, 25000], battalion: "10th–15th (Service) Battalions", date: "Aug 1914 – June 1915", battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Durham mining villages", "Sunderland", "Tyneside"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [25001, 32000], battalion: "10th–15th (Service) Battalions", date: "July 1915 – Dec 1915", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Durham mining villages", "Sunderland", "Tyneside"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [32001, 45000], battalion: "10th–15th (Service) Battalions", date: "Jan 1916 – Nov 1916", battles: ["Passchendaele", "Somme", "Spring", "Arras"], category: "service", hotspot: ["Durham mining villages", "Sunderland", "Tyneside"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [45001, 58000], battalion: "10th–15th & 18th-20th & 22nd (Service) Battalions", date: "Dec 1916 – mid 1917", battles: ["Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Durham mining villages", "Sunderland", "Tyneside"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
     
{ range: [1, 1250], battalion: "18th (Service) Battalion (1st County)", date: "Aug 1914 – June 1915", battles: ["Somme", "Hundred", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["18/"], category: "service", hotspot: ["Carlisle", "Kendal", "Workington"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [1251, 1500], battalion: "18th (Service) Battalion (1st County)", date: "July 1915 – Nov 1916", battles: ["Somme", "Hundred", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["18/"], category: "service", hotspot: ["Carlisle", "Kendal", "Workington"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
       
{ range: [1, 1100], battalion: "19th (Service) Battalion (2nd County)", date: "Jan 1915 – June 1915", battles: ["Somme", "Arras" ,"Passchendaele", "Hundred"], requiresPrefix: true, allowedPrefixes: ["19/"], category: "service", hotspot: ["Coal mining towns of Durham", "Sunderland", "Durham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [1101, 1350], battalion: "19th (Service) Battalion (2nd County)", date: "July 1915 – Nov 1916", battles: ["Somme", "Arras" ,"Passchendaele", "Hundred"], requiresPrefix: true, allowedPrefixes: ["19/"], category: "service", hotspot: ["Coal mining towns of Durham", "Sunderland", "Durham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
          
{ range: [1, 1150], battalion: "20th (Service) Battalion (Wearside)", date: "Jul 1915 – Dec 1915", battles: ["Somme", "Passchendaele", "Spring", "Hundred"], requiresPrefix: true, allowedPrefixes: ["20/"], category: "service", hotspot: ["Sunderland", "South Shields", "Houghton-le-Spring"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [1151, 1400], battalion: "20th (Service) Battalion (Wearside)", date: "Jan 1916 – Nov 1916", battles: ["Somme", "Passchendaele", "Spring", "Hundred"], requiresPrefix: true, allowedPrefixes: ["20/"], category: "service", hotspot: ["Sunderland", "South Shields", "Houghton-le-Spring"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
       
{ range: [1, 1050], battalion: "22nd (Service) Battalion (3rd County Pioneers)", date: "Oct 1915 – Feb 1916", battles: ["Somme", "Passchendaele", "Spring", "Hundred"], requiresPrefix: true, allowedPrefixes: ["22/"], category: "service", hotspot: ["Coal mining towns of Durham", "Consett", "Durham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [1051, 1200], battalion: "22nd (Service) Battalion (3rd County Pioneers)", date: "Mar 1916 – Nov 1916", battles: ["Somme", "Passchendaele", "Spring", "Hundred"], requiresPrefix: true, allowedPrefixes: ["22/"], category: "service", hotspot: ["Coal mining towns of Durham", "Consett", "Durham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

   // MISC
  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Sunderland, Durham) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 99999], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Sunderland, Durham) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "East Lancashire Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Blackburn", "Burnley", "Accrington"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Burnley", "Blackburn", "Eastern Lancashire textile belt"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

//Regulars
{ range: [1, 11098], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_prewar", hotspot: ["Burnley", "Blackburn", "Eastern Lancashire textile belt"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [11099, 13999], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Burnley", "Blackburn", "Eastern Lancashire textile belt"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [14000, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Burnley", "Blackburn", "Eastern Lancashire textile belt"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

 // PRE-1917 TERRITORIAL FORCE
{ range: [1, 2200], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Blackburn", "Burnley", "Accrington"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2201, 4000], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Blackburn", "Burnley", "Accrington"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4001, 9999], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Blackburn", "Burnley", "Accrington"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

 // SERVICE BATTALIONS (Kitchener’s Army)
 { range: [11100, 18500], battalion: "6th–9th (Service) Battalions", date: "Aug 1914 – June 1915", battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Accrington", "Burnley", "Blackburn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }, { bn: 9, theatre: "East" }], },
{ range: [18501, 21000], battalion: "6th–9th (Service) Battalions", date: "July 1915 – Dec 1915", battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Accrington", "Burnley", "Blackburn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }, { bn: 9, theatre: "East" }], },
{ range: [21001, 32000], battalion: "6th–9th (Service) Battalions", date: "Jan 1916 – Nov 1916", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Accrington", "Burnley", "Blackburn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }, { bn: 9, theatre: "East" }], },
{ range: [32001, 40000], battalion: "6th–9th & 11th (Service) Battalions", date: "Dec 1916 – mid 1917", battles: ["Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Accrington", "Burnley", "Blackburn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }, { bn: 9, theatre: "East" }], },
       
 { range: [1, 1200], battalion: "11th (Service) Battalion (The Accrington Pals)", date: "Sep 1914 – June 1915", battles: ["Somme", "Hundred", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["11/"], category: "service", hotspot: ["Accrington", "Burnley", "Chorley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"],  },
 { range: [1201, 1500], battalion: "11th (Service) Battalion (The Accrington Pals)", date: "July 1915 – Nov 1916", battles: ["Somme", "Hundred", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["11/"], category: "service", hotspot: ["Accrington", "Burnley", "Chorley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"],  },  

//MISC

  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Blackburn, Burnley) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
  
],
     
     "East Surrey Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Wimbledon", "Croydon", "Sutton"], theatre: "India", },
{ range: [240001, 265000], battalion: "6th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Kingston upon Thames", "Richmond", "Chertsey"], theatre: "India", },

// Regulars
{ range: [1, 10918], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Mons", "Loos", "Somme", "Arras"], category: "regular_prewar", hotspot: ["Kingston upon Thames", "Croydon", "Guildford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },
{ range: [10919, 13000], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["L/", "L"], category: "regular_wartime", hotspot: ["Kingston upon Thames", "Croydon", "Guildford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },
{ range: [13001, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["L/", "L"], category: "regular_wartime", hotspot: ["Kingston upon Thames", "Croydon", "Guildford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },

  // PRE-1917 TERRITORIAL FORCE
{ range: [1, 2000], battalion: "5th-6th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", category: "tf_pre1917", hotspot: ["Wimbledon", "Kingston", "Croydon & Surrey villages"], theatre: "India", },
{ range: [2001, 3500], battalion: "5th-6th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", category: "tf_pre1917", hotspot: ["Wimbledon", "Kingston", "Croydon & Surrey villages"], theatre: "India", },
{ range: [3501, 9999], battalion: "5th-6th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", category: "tf_pre1917", hotspot: ["Wimbledon", "Kingston", "Croydon & Surrey villages"], theatre: "India", },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [10800, 16000], battalion: "7th–9th (Service) Battalions", date: "Aug 1914 – June 1915", battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/", "G"], category: "service", hotspot: ["Croydon", "Wimbledon", "Kingston"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [16001, 18500], battalion: "7th–9th & 12th (Service) Battalions", date: "July 1915 – Dec 1915", battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/", "G"], category: "service", hotspot: ["Croydon", "Wimbledon", "Kingston"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [18501, 28000], battalion: "7th–9th & 12th-13th (Service) Battalions", date: "Jan 1916 – Nov 1916", battles: ["Spring", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/", "G"], category: "service", hotspot: ["London docklands", "Bermondsey", "Wandsworth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [28001, 35000], battalion: "7th–9th & 12th-13th (Service) Battalions", date: "Dec 1916 – mid 1917", battles: ["Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/", "G"], category: "service", hotspot: ["London docklands", "Bermondsey", "Wandsworth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

// MISC

  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Kingston upon Thames, Richmond) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 99999], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Kingston upon Thames, Richmond) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
 { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "East Yorkshire Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 225000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras"], category: "tf_renumbering", hotspot: ["Kingston upon Hull", "Beverely", "Coastal areas of East Riding"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [225001, 250000], battalion: "5th (Cyclist) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["Home"], category: "tf_renumbering", hotspot: ["Beverley", "Hull", "Coastal areas of East Riding"], },

// Regulars
{ range: [1, 10152], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Loos", "Passchendaele", "Spring", "Arras"], category: "regular_prewar", hotspot: ["Beverley", "Kingston upon Hull", "Coastal areas of East Riding"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },
{ range: [10153, 13000], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Beverley", "Kingston upon Hull", "Coastal areas of East Riding"],cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },
{ range: [13001, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Loos", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Beverley", "Kingston upon Hull", "Coastal areas of East Riding"],cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },
  
// PRE-1917 TERRITORIAL FORCE
{ range: [1, 3000], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "tf_pre1917", hotspot: ["Hull", "Beverley", "Coastal areas of East Riding"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [3001, 6500], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "Dec 1914 – mid 1916", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "tf_pre1917", hotspot: ["Hull", "Beverley", "Coastal areas of East Riding"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [6501, 9999], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "mid 1916 – early 1917", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "tf_pre1917", hotspot: ["Hull", "Beverley", "Coastal areas of East Riding"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

// SERVICE BATTALIONS (Kitchener’s Army)
  { range: [10000, 16500], battalion: "6th–8th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Hull", "Bridlington", "Kingston upon Hull"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [16501, 19000], battalion: "6th–8th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Hull", "Bridlington", "Kingston upon Hull"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [19001, 28000], battalion: "6th–8th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Hull", "Bridlington", "Kingston upon Hull"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [28001, 35000], battalion: "6th–8th & 10th-13th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Hull", "Bridlington", "Kingston upon Hull"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
             
  { range: [1, 4500], battalion: "10th (Service) Battalion (1st Hull)", date: "Sep 1914 – June 1915" , battles: ["Somme", "Spring", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["10/"], category: "service", hotspot: ["Office clerks and commercial staff from Kingston upon Hull, Beverley & Goole"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [4501, 5500], battalion: "10th (Service) Battalion (1st Hull)", date: "July 1915 – Nov 1916" , battles: ["Somme", "Spring", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["10/"], category: "service", hotspot: ["Office clerks and commercial staff from Kingston upon Hull, Beverley & Goole"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
         { range: [1, 4500], battalion: "11th (Service) Battalion (2nd Hull)", date: "Sep 1914 – June 1915" , battles: ["Somme", "Spring", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["11/"], category: "service", hotspot: ["Skilled tradesmen and apprentices from Kingston upon Hull, Withernsea & Grimsby"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [4501, 5500], battalion: "11th (Service) Battalion (2nd Hull)", date: "July 1915 – Nov 1916" , battles: ["Somme", "Spring", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["11/"], category: "service", hotspot: ["Skilled tradesmen and apprentices from Kingston upon Hull, Withernsea & Grimsby"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
         { range: [1, 4500], battalion: "12th (Service) Battalion (3rd Hull)", date: "Sep 1914 – June 1915" , battles: ["Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["12/"], category: "service", hotspot: ["Local athletic clubs, rugby players, and dockers from Kingston upon Hull, Hornsea & Hedon"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [4501, 5500], battalion: "12th (Service) Battalion (3rd Hull)", date: "July 1915 – Nov 1916" , battles: ["Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["12/"], category: "service", hotspot: ["Local athletic clubs, rugby players, and dockers from Kingston upon Hull, Hornsea & Hedon"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
         { range: [1, 4500], battalion: "13th (Service) Battalion (4th Hull)", date: "Sep 1914 – June 1915" , battles: ["Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["13/"], category: "service", hotspot: ["Many recruits had connections to the hunt or rural life from East Riding villages like Cottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [4501, 5500], battalion: "13th (Service) Battalion (4th Hull)", date: "July 1915 – Nov 1916" , battles: ["Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["13/"], category: "service", hotspot: ["Many recruits had connections to the hunt or rural life from East Riding villages like Cottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
// MISC

  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Kingston upon Hull, coastal areas) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Essex Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 250000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Brentwood", "Ilford", "Burnham on Crouch"], theatre: "East", },
{ range: [250001, 275000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Chelmsford", "Brentford", "Walthamstow"], theatre: "East", },
{ range: [275001, 300000], battalion: "6th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["West Ham", "Southend on Sea", "Victoria Docks"], theatre: "East", },
{ range: [300001, 325000], battalion: "7th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Walthamstow", "Silvertown", "Leyton"], theatre: "East", },
{ range: [325001, 350000], battalion: "8th (Cyclist) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["West Ham", "Colchester", "Wivenhoe"], theatre: "Home", },
{ range: [350001, 375000], battalion: "15th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918", category: "tf_renumbering", hotspot: ["Chelmsford", "Wivenhoe", "Colchester"], theatre: "Home", },
{ range: [375001, 400000], battalion: "16th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918", category: "tf_renumbering", hotspot: ["West Ham", "Stratford", "Southend"], theatre: "Home", },

       // Regulars
{ range: [1, 10414], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_prewar", hotspot: ["Brentwood", "Chelmsford", "Colchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [10415, 14069], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["Brentwood", "Chelmsford", "Colchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [14070, 21500], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["Brentwood", "Chelmsford", "Colchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// PRE-1917 TERRITORIAL FORCE
{ range: [1, 2200], battalion: "4th–8th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", category: "tf_pre1917", hotspot: ["Brentwood", "Chelmsford", "West Ham"], alt: [{ bn: 4, theatre: "East" }, { bn: 5, theatre: "East" }, { bn:6, theatre: "East" }, { bn: 7, theatrce: "East" }, { bn: 8, theatre: "Home"},] },
{ range: [2201, 3650], battalion: "4th–8th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", category: "tf_pre1917", hotspot: ["Brentwood", "Chelmsford", "West Ham"], alt: [{ bn: 4, theatre: "East" }, { bn: 5, theatre: "East" }, { bn:6, theatre: "East" }, { bn: 7, theatre: "East" }, { bn: 8, theatre: "Home"},] },
{ range: [3651, 7500], battalion: "4th–8th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", category: "tf_pre1917", hotspot: ["Brentwood", "Chelmsford", "West Ham"], alt: [{ bn: 4, theatre: "East" }, { bn: 5, theatre: "East" }, { bn:6, theatre: "East" }, { bn: 7, theatre: "East" }, { bn: 8, theatre: "Home"},] },
      
// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [11000, 18500], battalion: "9th–11th & 13th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Chelmsford", "West Ham", "Colchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [18501, 22000], battalion: "9th–11th & 13th (Service) Battalions", date: "July 1915 - Dec 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Chelmsford", "West Ham", "Colchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [22001, 35000], battalion: "9th–11th & 13th (Service) Battalions", date: "Jan 1916 - Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Chelmsford", "West Ham", "Colchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [35001, 48000], battalion: "9th–11th & 13th (Service) Battalions", date: "Dec 1916 - mid 1917" , battles: ["Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Chelmsford", "West Ham", "Colchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// MISC
  
  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (West Ham, Colchester) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
  "Gloucestershire Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th (City of Bristol) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Somme"], category: "tf_renumbering", hotspot: ["Clifton", "St Georges", "Horfield"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Somme"], category: "tf_renumbering", hotspot: ["Gloucester", "Cheltenham", "Stroud valleys"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 290000], battalion: "6th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Somme"], category: "tf_renumbering", hotspot: ["St George", "Horfield", "North Somerset villages"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [290001, 315000], battalion: "17th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Gloucester", "Cheltenham", "Bristol"], theatre: "Home", },

// Regulars
{ range: [1, 10044], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Loos", "Somme", "Passchendaele"], category: "regular_prewar", hotspot: ["Gloucester", "Cheltenham", "Bristol"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },
{ range: [10045, 13444], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Spring"], category: "regular_wartime", hotspot: ["Gloucester", "Cheltenham", "Bristol"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },
{ range: [13445, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "regular_wartime", hotspot: ["Gloucester", "Cheltenham", "Bristol"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" }], },

  // PRE-1917 TERRITORIAL FORCE
{ range: [1, 2200], battalion: "4th-6th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Somme", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Bristol", "Gloucester", "Stroud"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2201, 3600], battalion: "4th-6th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", battles: ["Somme", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Bristol", "Gloucester", "Stroud"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3601, 9999], battalion: "4th-6th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Somme", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Bristol", "Gloucester", "Stroud"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

  
// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [10000, 18500], battalion: "7th–10th & 12th-14th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Bristol", "Gloucester", "Cheltenham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" }, { bn: 9, theatre: "East" }], },
  { range: [18501, 22000], battalion: "7th–10th & 12th-14th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Gloucester", "Stroud valleys", "Bristol"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" }, { bn: 9, theatre: "East" }], },
  { range: [22001, 35000], battalion: "7th–10th & 12th-14th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Loos", "Somme", "Arras", "Hundred"],  category: "service", hotspot: ["Gloucester", "Stroud valleys", "Bristol"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" }, { bn: 9, theatre: "East" }], },
  { range: [35001, 48000], battalion: "7th–10th & 12th-14th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Spring", "Arras", "Hundred"], category: "service" , hotspot: ["Gloucester", "Stroud valleys", "Bristol"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" }, { bn: 9, theatre: "East" }], },

// MISC

  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Gloucester, Bristol) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
  
],
     
  "Gordon Highlanders": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Aberdeen", "Banffshire", "Peterhead"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "5th (Buchan and Formartin) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras"], category: "tf_renumbering", hotspot: ["Peterhead", "Coastal fishing villages", "Ellon"],cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 290000], battalion: "6th (Banff and Donside) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Banffshire towns", "Huntley", "Coastal fishing villages"],cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [290001, 315000], battalion: "7th (Deeside Highland) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Banchory", "Deeside", "Aboyne"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [315001, 320000], battalion: "1st Shetland Companies Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Arras", "Hundred"], category: "tf_renumbering", hotspot: "Shetland Islands recruits", cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// Regulars
{ range: [1, 1307], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Loos", "Somme", "Arras"], category: "regular_prewar", hotspot: ["Aberdeen", "Coastal fishing villages", "Don Valley"],cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [1308, 3007], battalion: "1st or (Regular) 2nd Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Aberdeen", "Coastal fishing villages", "Don Valley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3008, 9999], battalion: "1st or (Regular) 2nd Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Aberdeen", "Coastal fishing villages", "Don Valley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// PRE-1917 TERRITORIAL FORCE
{ range: [1, 2000], battalion: "4th–7th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Loos", "Somme", "Arras", "Passchendaele"], category: "tf_pre1917", hotspot: ["Aberdeen", "Peterhead", "Banff & Donside"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2001, 3200], battalion: "4th–7th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", battles: ["Loos", "Somme", "Arras", "Passchendaele"], category: "tf_pre1917", hotspot: ["Aberdeen", "Peterhead", "Banff & Donside"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3201, 9999], battalion: "4th–7th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Loos", "Somme", "Arras", "Passchendaele"], category: "tf_pre1917", hotspot: ["Aberdeen", "Peterhead", "Banff & Donside"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },


 // SERVICE BATTALIONS (Kitchener’s Army)
  { range: [1600, 7500], battalion: "8th–10th (Service) Battalions", date: "Aug 1914 – June 1915" , requiresPrefix: true, allowedPrefixes: ["S", "S/"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Aberdeen", "Banffshire towns", "North-east fishing ports"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [7501, 10500], battalion: "8th–10th (Service) Battalions", date: "July 1915 – Dec 1915" , requiresPrefix: true, allowedPrefixes: ["S", "S/"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Aberdeen", "Banffshire towns", "North-east fishing ports"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [10501, 13000], battalion: "8th–10th (Service) Battalions", date: "Jan 1916 – Nov 1916" , requiresPrefix: true, allowedPrefixes: ["S", "S/"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Aberdeen", "Banffshire towns", "North-east fishing ports"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [13001, 22000], battalion: "8th–10th (Service) Battalions", date: "Dec 1916 – mid 1917", requiresPrefix: true, allowedPrefixes: ["S", "S/"], battles: ["Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Aberdeen", "Banffshire towns", "North-east fishing ports"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// MISC
  
  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Aberdeen, coastal fishing ports) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training_reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Hampshire Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Winchester", "Portsmouth", "Isle of Wight"], theatre: "East", },
{ range: [240001, 280000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Southampton", "Newport", "New Forest"], theatre: "India", },
{ range: [280001, 305000], battalion: "6th (Duke of Connaught’s Own) Territorial Force (TF) Battalion", tf: true, date: "Mar–Apr 1917" , category: "tf_renumbering", hotspot: ["Basingstoke", "Aldershot", "Andover"], theatre: "East", },
{ range: [305001, 330000], battalion: "7th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Bournemouth", "Christchurch", "Ryde"], theatre: "India", },
{ range: [330001, 355000], battalion: "8th (Princess Beatrice’s) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Newport", "Cowes", "Ryde"], theatre: "East", },
{ range: [355001, 380000], battalion: "9th (Cyclist) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Portsmouth", "Gosport", "Fareham"], theatre: "India", },
{ range: [380001, 405000], battalion: "17th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Basingstoke", "Andover", "Aldershot"], theatre: "Home", },

//Regulars
 { range: [1, 9631], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_prewar", hotspot: ["Winchester", "Portsmouth", "Southampton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [9632, 13031], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["Winchester", "Portsmouth", "Southampton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [13031, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["Winchester", "Portsmouth", "Southampton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

    // PRE-1917 TERRITORIAL FORCE
{ range: [1, 2100], battalion: "4th–7th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", category: "tf_pre1917", hotspot: ["Winchester", "Southampton", "Isle of Wight"], alt: [{ bn: 4, theatre: "East" }, { bn: 5, theatre: "India" }, { bn:6, theatre: "East" }, { bn: 7, theatre: "India" },] },
{ range: [2101, 3600], battalion: "4th–7th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", category: "tf_pre1917", hotspot: ["Winchester", "Southampton", "Isle of Wight"], alt: [{ bn: 4, theatre: "East" }, { bn: 5, theatre: "India" }, { bn:6, theatre: "East" }, { bn: 7, theatre: "India" },] },
{ range: [3601, 9999], battalion: "4th–7th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", category: "tf_pre1917", hotspot: ["Winchester", "Southampton", "Isle of Wight"], alt: [{ bn: 4, theatre: "East" }, { bn: 5, theatre: "India" }, { bn:6, theatre: "East" }, { bn: 7, theatre: "India" },] },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [9633, 17500], battalion: "10th–12th & 14th–15th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Somme", "Passchendaele", "Hundred"], category: "service", hotspot: ["Southampton", "Portsmouth", "Winchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 10, theatre: "East" },{ bn: 12, theatre: "East" }], },
  { range: [17501, 20500], battalion: "10th–12th & 14th–15th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Hundred"], category: "service", hotspot: ["Southampton", "Portsmouth", "Winchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 10, theatre: "East" },{ bn: 12, theatre: "East" }], },
  { range: [20501, 28000], battalion: "10th–12th & 14th–15th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Hundred"], category: "service", hotspot: ["Southampton", "Portsmouth", "Winchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 10, theatre: "East" },{ bn: 12, theatre: "East" }], },
  { range: [28001, 38000], battalion: "10th–12th & 14th–15th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Spring", "Hundred"], category: "service", hotspot: ["Southampton", "Portsmouth", "Winchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 10, theatre: "East" },{ bn: 12, theatre: "East" }], },


//MISC
 
  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Winchester, Isle of Wight) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
 { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],

     "Herefordshire Regiment": [
  // POST-1917 TF RENUMBERING
  { range: [235001, 260000], battalion: "1st Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Hereford", "Leominster", "Ross on Wye"], theatre: "East", },
  
// PRE-1917 TERRITORIAL FORCE
{ range: [1, 2100], battalion: "1st Territorial Force (TF) Battalion", tf: true, date: "Pre-WWI – Jul 1914", category: "tf_pre1917", hotspot: ["Hereford", "Ross-on-Wye", "Leominster"], theatre: "East" },
{ range: [2101,3600], battalion: "1st Territorial Force (TF) Battalion", tf: true, date: "Aug 1914 – Jun 1915", category: "tf_pre1917", hotspot: ["Hereford", "Ross-on-Wye", "Leominster"], theatre: "East" },
{ range: [3601,9999], battalion: "1st Territorial Force (TF) Battalion", tf: true, date: "Jul 1915 – early 1917", category: "tf_pre1917", hotspot: ["Hereford", "Ross-on-Wye", "Leominster"], theatre: "East" },

// MISC
 { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

  //No regulars nor service battalions
  
],

"Highland Light Infantry": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "5th (City of Glasgow) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["East"], category: "tf_renumbering", hotspot: ["Glasgow", "Partick", "Rutherglen"], },
{ range: [240001, 280000], battalion: "6th (City of Glasgow) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["East"], category: "tf_renumbering", hotspot: ["Glasgow", "Kelvingrove", "Motherwell"], },
{ range: [280001, 305000], battalion: "7th (Blythswood) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["East"], category: "tf_renumbering", hotspot: ["Govanhill", "Rutherglen", "Cambuslang"], },
{ range: [305001, 330000], battalion: "8th (Lanark) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Springburn", "Maryhill", "Possilpark"], theatre: "Home", },
{ range: [330001, 355000], battalion: "9th (Glasgow Highland) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras"], category: "tf_renumbering", hotspot: ["Bridgton", "Calton", "Parkhead"],cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [355001, 380000], battalion: "21st Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Bridgeton", "Calton", "Parkhead"], theatre: "Home", },

  //Regulars
 { range: [1, 11911], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Loos", "Somme", "Arras"], category: "regular_prewar", hotspot: ["Glasgow", "Lanarkshire coal and steel belt", "Paisley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" },] },
  { range: [11912, 18500], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – Jan 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Glasgow", "Lanarkshire coal and steel belt", "Paisley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" },] },
{ range: [18501, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "Early 1915 – 1918" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Glasgow", "Lanarkshire coal and steel belt", "Paisley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" },] },

  // PRE-1917 TERRITORIAL FORCE
{ range: [1,2100], battalion: "5th-9th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Jul 1914", battles: ["Loos", "Passchendaele", "Spring", "Somme"], category: "tf_pre1917", hotspot: ["Glasgow", "Bridgeton", "Calton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }, { bn: 6, theatre: "East" }, { bn:7, theatre: "East" }, { bn: 8, theatre: "Home" },] },
{ range: [2101,3600], battalion: "5th-9th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – Jun 1915", battles: ["Loos", "Passchendaele", "Spring", "Somme"], category: "tf_pre1917", hotspot: ["Glasgow", "Bridgeton", "Calton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }, { bn: 6, theatre: "East" }, { bn:7, theatre: "East" }, { bn: 8, theatre: "Home" },] },
{ range: [3601,9999], battalion: "5th-9th Territorial Force (TF) Battalions", tf: true, date: "Jul 1915 – early 1917", battles: ["Loos", "Passchendaele", "Spring", "Somme"], category: "tf_pre1917", hotspot: ["Glasgow", "Bridgeton", "Calton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }, { bn: 6, theatre: "East" }, { bn:7, theatre: "East" }, { bn: 8, theatre: "Home" },] },

// SERVICE BATTALIONS (Kitchener’s Army)
  { range: [12000, 18500], battalion: "10th–12th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Glasgow", "Clydesdale industrial districts", "Lanarkshire mining towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [18501, 22000], battalion: "10th–12th & 14th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Glasgow", "Clydesdale industrial districts", "Lanarkshire mining towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [22001, 38000], battalion: "10th–12th & 14th-18th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Spring", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Glasgow", "Clydesdale industrial districts", "Lanarkshire mining towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [38001, 55000], battalion: "10th–12th & 14th-18th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Spring", "Hundred", "Arras"], category: "service", hotspot: ["Glasgow", "Clydesdale industrial districts", "Lanarkshire mining towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
 
 { range: [1, 4000], battalion: "15th (Service) Battalion (1st Glasgow)", date: "Sep 1914 – June 1915" , battles: ["Hundred", "Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["15/"], category: "service", hotspot: ["Glasgow Corporation Tramways department)", "Partick", "Govan"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
 { range: [4001, 5500], battalion: "15th (Service) Battalion (1st Glasgow)", date: "July 1915 – Dec 1915" , battles: ["Hundred", "Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["15/"], category: "service", hotspot: ["Glasgow Corporation Tramways department)", "Partick", "Govan"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
   { range: [1, 4000], battalion: "16th (Service) Battalion (2nd Glasgow)", date: "Sep 1914 – June 1915" , battles: ["Spring", "Somme", "Hundred", "Arras"], requiresPrefix: true, allowedPrefixes: ["16/"], category: "service", hotspot: ["Former members and officers of the Glasgow Boys' Brigade", "Maryhill", "Hillhead"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
 { range: [4001, 5500], battalion: "16th (Service) Battalion (2nd Glasgow)", date: "July 1915 – Dec 1915" , battles: ["Spring", "Somme", "Hundred", "Arras"], requiresPrefix: true, allowedPrefixes: ["16/"], category: "service", hotspot: ["Former members and officers of the Glasgow Boys' Brigade", "Maryhill", "Hillhead"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
   { range: [1, 4000], battalion: "17th (Service) Battalion", date: "Sep 1914 – June 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["17/"], category: "service", hotspot: ["Glasgow city districts", "Lanarkshire coalfield", "industrial workers"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
 { range: [4001, 5500], battalion: "17th (Service) Battalion", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["17/"], category: "service", hotspot: ["Glasgow city districts", "Lanarkshire coalfield", "industrial workers"],cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
   { range: [1, 4000], battalion: "18th (Service) Battalion (3rd Glasgow)", date: "Feb 1915 – June 1915" , battles: ["Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["18/"], category: "service", hotspot: ["Glasgow city districts", "Lanarkshire coalfield", "industrial workers"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
 { range: [4001, 5500], battalion: "18th (Service) Battalion (3rd Glasgow)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["18/"], category: "service", hotspot: ["Glasgow city districts", "Lanarkshire coalfield", "industrial workers"],cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// MISC

  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Glasgow, Lanarkshire mining towns) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 99999], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Glasgow, Lanarkshire mining towns) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
 { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Hertfordshire Regiment": [
  // POST-1917 TF RENUMBERING
  { range: [265001, 290000], battalion: "1st Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Mons", "Passchendaele", "Spring", "Loos"], category: "tf_renumbering", hotspot: ["Hertford", "Watford", "St Albans"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

 // PRE-1917 TERRITORIAL FORCE
{ range: [1,3600], battalion: "1st Territorial Force (TF) Battalion", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Mons", "Passchendaele", "Spring", "Loos"], category: "tf_pre1917", hotspot: ["Hertford", "Watford", "St Albans"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [3601,5200], battalion: "1st Territorial Force (TF) Battalion", tf: true, date: "Aug 1914 – mid 1915", battles: ["Mons", "Passchendaele", "Spring", "Loos"], category: "tf_pre1917", hotspot: ["Hertford", "Watford", "St Albans"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [5201,9999], battalion: "1st Territorial Force (TF) Battalion", tf: true, date: "mid 1915 – early 1917", battles: ["Mons", "Passchendaele", "Spring", "Loos"], category: "tf_pre1917", hotspot: ["Hertford", "Watford", "St Albans"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

// MISC
 { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
     
 //No regulars nor service battalions

],

     "King's (Liverpool Regiment)": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Somme"], category: "tf_renumbering", hotspot: ["Liverpool", "Bootle", "Birkenhead"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 280000], battalion: "6th (Rifle) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras"], category: "tf_renumbering", hotspot: ["Everton", "Anfield", "Bootle"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [280001, 305000], battalion: "7th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Somme"], category: "tf_renumbering", hotspot: ["Bootle", "Crosby", "Southport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [305001, 330000], battalion: "8th (Irish) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Somme"], category: "tf_renumbering", hotspot: ["Vauxhall", "Bootle", "Wavertree"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [330001, 355000], battalion: "9th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Somme"], category: "tf_renumbering", hotspot: ["Bootle", "Crosby", "Southport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [355001, 380000], battalion: "10th (Scottish) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Somme"], category: "tf_renumbering", hotspot: ["Liverpool", "West Derby", "Wavertree"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [380001, 405000], battalion: "25th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Vauxhall", "Bootle", "Crosby"], theatre: "Home", },
{ range: [405001, 430000], battalion: "26th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Liverpool business district", "West Derby", "Bootle"], theatre: "Home", },

// Regulars
{ range: [1, 11990], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Loos", "Somme", "Arras"], category: "regular_prewar", hotspot: ["Liverpool", "Bootle", "Southport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "India" },] },
{ range: [11991, 15390], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Liverpool", "Bootle", "Southport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "India" },] },
{ range: [15391, 20000], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Liverpool", "Bootle", "Southport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "India" },] },

  // PRE-1917 TERRITORIAL FORCE
{ range: [1,2100], battalion: "5th–10th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Passchendaele", "Spring", "Arras", "Somme"], category: "tf_pre1917", hotspot: ["Liverpool", "Bootle", "Crosby"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [2101,5200], battalion: "5th–10th Territorial Force (TF) Battalions", tf: true, date: "Sep 1914 – mid 1915", battles: ["Passchendaele", "Arras", "Spring", "Somme"], category: "tf_pre1917", hotspot: ["Liverpool", "Bootle", "Crosby"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [5201,9999], battalion: "5th–10th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Passchendaele", "Arras", "Spring", "Somme"], category: "tf_pre1917", hotspot: ["Liverpool", "Bootle", "Crosby"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },


// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [12000, 26500], battalion: "11th–14th (Service) Battalions", date: "Aug 1914 – Jun 1915" , battles: ["Loos", "Somme", "Spring", "Arras"], category: "service", hotspot: ["Liverpool", "Bootle", "Southport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [26501, 35000], battalion: "11th–14th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Spring", "Arras"],  category: "service", hotspot: ["Liverpool", "Bootle", "Seaforth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [35001, 53000], battalion: "11th–14th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Spring", "Arras"],  category: "service", hotspot: ["Liverpool", "Bootle", "Seaforth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [53001, 95000], battalion: "11th–14th & 17th–20th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Spring", "Arras"], category: "service", hotspot: ["Liverpool", "Bootle", "Seaforth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
{ range: [1, 3000], battalion: "17th (Service) Battalion (1st City)", date: "Aug 1914 – Jun 1915" , battles: ["Passchendaele", "Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["17/"], category: "service", hotspot: ["Liverpool business district", "Sefton Park", "Toxteth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3001, 4500], battalion: "17th (Service) Battalion (1st City)", date: "July 1915 – Dec 1915" , battles: ["Passchendaele", "Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["17/"], category: "service", hotspot: ["Liverpool business district", "Sefton Park", "Toxteth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4501, 5500], battalion: "17th (Service) Battalion (1st City)", date: "Jan 1916 – Nov 1916" , battles: ["Passchendaele", "Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["17/"], category: "service", hotspot: ["Liverpool business district", "Sefton Park", "Toxteth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
       { range: [1, 3000], battalion: "18th (Service) Battalion (2nd City)", date: "Aug 1914 – Jun 1915" , battles: ["Passchendaele", "Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["18/"], category: "service", hotspot: ["Liverpool commercial and professional classes", "West Derby", "Wavertree"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3001, 4500], battalion: "18th (Service) Battalion (2nd City)", date: "July 1915 – Dec 1915" , battles: ["Passchendaele", "Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["18/"], category: "service", hotspot: ["Liverpool commercial and professional classes", "West Derby", "Wavertree"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4501, 5500], battalion: "18th (Service) Battalion (2nd City)", date: "Jan 1916 – Nov 1916" , battles: ["Passchendaele", "Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["18/"], category: "service", hotspot: ["Liverpool commercial and professional classes", "West Derby", "Wavertree"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
       { range: [1, 3000], battalion: "19th (Service) Battalion (3rd City)", date: "Aug 1914 – Jun 1915" , battles: ["Passchendaele", "Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["19/"], category: "service", hotspot: ["Liverpool", "Birkenhead", "Everton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3001, 4500], battalion: "19th (Service) Battalion (3rd City)", date: "July 1915 – Dec 1915" , battles: ["Passchendaele", "Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["19/"], category: "service", hotspot: ["Liverpool", "Birkenhead", "Everton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4501, 5500], battalion: "19th (Service) Battalion (3rd City)", date: "Jan 1916 – Nov 1916" , battles: ["Passchendaele", "Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["19/"], category: "service", hotspot: ["Liverpool", "Birkenhead", "Everton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
       { range: [1, 3000], battalion: "20th (Service) Battalion (4th City)", date: "Oct 1914 – Jun 1915" , battles: ["Passchendaele", "Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["20/"], category: "service", hotspot: ["Liverpool", "Bootle", "Southport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3001, 4500], battalion: "20th (Service) Battalion (4th City)", date: "July 1915 – Dec 1915" , battles: ["Passchendaele", "Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["20/"], category: "service", hotspot: ["Liverpool", "Bootle", "Southport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4501, 5500], battalion: "20th (Service) Battalion (4th City)", date: "Jan 1916 – Nov 1916" , battles: ["Passchendaele", "Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["20/"], category: "service", hotspot: ["Liverpool", "Bootle", "Southport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       


// MISC
  
  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Liverpool, Bootle) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 99999], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Liverpool, Bootle) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
 { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
],
     
     "King's Own (Royal Lancaster Regiment)": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Ulverston", "Barrow-in-Furness", "South Lakeland towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Lancaster", "Barrow-in-Furness", "South Lakeland towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 290000], battalion: "12th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Lancaster", "Morecambe", "Barrow-in-Furness"], theatre: "Home", },

// Regulars
  { range: [1, 11662], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Loos", "Passchendaele", "Spring", "Arras"], category: "regular_prewar", hotspot: ["Lancaster", "Morecambe", "Preston"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
{ range: [11663, 15062], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Lancaster", "Morecambe", "Preston"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
{ range: [15063, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Lancaster", "Morecambe", "Preston"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },

   // PRE-1917 TERRITORIAL FORCE
{ range: [1,2100], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Jul 1914", battles: ["Somme", "Spring", "Hundred", "Passchendaele"], category: "tf_pre1917", hotspot: ["Lancaster", "Morecambe", "Barrow-in-Furness"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2101,3600], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – Jun 1915", battles: ["Somme", "Spring", "Hundred", "Passchendaele"], category: "tf_pre1917", hotspot: ["Lancaster", "Morecambe", "Barrow-in-Furness"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3601,9999], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Jul 1915 – early 1917", battles: ["Somme", "Spring", "Hundred", "Passchendaele"], category: "tf_pre1917", hotspot: ["Lancaster", "Morecambe", "Barrow-in-Furness"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [12000, 19000], battalion: "6th–9th (Service) Battalions", date: "Aug 1914 – Jun 1915" , battles: ["Loos", "Passchendaele", "Somme", "Spring"], category: "service", hotspot: ["Lancaster", "Morecombe", "Barrow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }, { bn: 9, theatre: "East" }], },
  { range: [19001, 22500], battalion: "6th–9th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Hundred", "Spring"], category: "service", hotspot: ["Preston", "Burnley", "Accrington"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }, { bn: 9, theatre: "East" }], },
  { range: [22501, 30000], battalion: "6th–9th & 11th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Spring", "Hundred"], category: "service", hotspot: ["Preston", "Burnley", "Accrington"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }, { bn: 9, theatre: "East" }], },
  { range: [30001, 43000], battalion: "6th–9th & 11th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Somme", "Spring", "Hundred"], category: "service", hotspot: ["Preston", "Burnley", "Accrington"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }, { bn: 9, theatre: "East" }], },
       
  { range: [1, 1800], battalion: "11th (Service) Battalion (Bantams)", date: "Aug 1915 - Dec 1915" , battles: ["Somme", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["11/"], category: "service", hotspot: ["Lancaster", "Fylde coast", "Blackpool"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
// MISC

  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Lancaster, Morecambe) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "King's Own Scottish Borderers": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th (Border) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["East"], category: "tf_renumbering", hotspot: ["Galashiels", "Hawick", "Selkirk"], },
{ range: [240001, 265000], battalion: "5th (Dumfries and Galloway) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["East"], category: "tf_renumbering", hotspot: ["Dumfries", "Maxwelltown", "Annan"], },

// Regulars
{ range: [1, 11800], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Somme", "Arras", "Hundred"], category: "regular_prewar", hotspot: ["Berwick-upon-Tweed", "Leith", "Borders mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [11801, 15200], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["Berwick-upon-Tweed", "Leith", "Borders mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [15201, 20000], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["Berwick-upon-Tweed", "Leith", "Borders mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

  // PRE-1917 TERRITORIAL FORCE
{ range: [1,2100], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Jul 1914", theatre: ["East"], category: "tf_pre1917", hotspot: ["Berwick-upon-Tweed", "Leith", "Borders mill towns"], },
{ range: [2101,3600], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – Jun 1915", theatre: ["East"], category: "tf_pre1917", hotspot: ["Berwick-upon-Tweed", "Leith", "Borders mill towns"], },
{ range: [3601,9999], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Jul 1915 – early 1917", theatre: ["East"], category: "tf_pre1917", hotspot: ["Berwick-upon-Tweed", "Leith", "Borders mill towns"], },

// SERVICE BATTALIONS (Kitchener’s Army)
 { range: [11800, 15500], battalion: "6th–8th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Dumfries", "Galashiels", "Hawick"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [15501, 18500], battalion: "6th–8th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Dumfries", "Galashiels", "Hawick"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [18501, 25000], battalion: "6th–8th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Dumfries", "Galashiels", "Hawick"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [25001, 31000], battalion: "6th–8th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Dumfries", "Galashiels", "Hawick"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

//MISC
 
  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Dumfries, Galashiels) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
 { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "King’s Own Yorkshire Light Infantry": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Wakefield", "Ossett", "Normanton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Pontefract", "Doncaster", "Goole"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// Regulars
{ range: [1, 11000], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Mons", "Loos", "Somme", "Hundred"], category: "regular_prewar", hotspot: ["Pontefract", "south Yorkshire coalfields", "Wakefield"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" },] },
{ range: [11001, 14400], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Loos", "Somme", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Pontefract", "south Yorkshire coalfields", "Wakefield"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" },] },
{ range: [14401, 20000], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Pontefract", "south Yorkshire coalfields", "Wakefield"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" },] },
   
   // PRE-1917 TERRITORIAL FORCE
{ range: [1,1650], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_pre1917", hotspot: ["Wakefield", "Barnsley", "Rotherham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [1651,5200], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_pre1917", hotspot: ["Wakefield", "Barnsley", "Rotherham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [5201,9999], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_pre1917", hotspot: ["Wakefield", "Barnsley", "Rotherham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

// SERVICE BATTALIONS (Kitchener’s Army)
       
{ range: [11000, 21500], battalion: "6th–10th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["West Riding industrial towns", "coalfield communities", "steel districts"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [21501, 26000], battalion: "6th–10th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["West Riding industrial towns", "coalfield communities", "steel districts"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [26001, 38000], battalion: "6th–10th & 12th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["West Riding industrial towns", "coalfield communities", "steel districts"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [38001, 50000], battalion: "6th–10th & 12th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["West Riding industrial towns", "coalfield communities", "steel districts"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
{ range: [1, 1300], battalion: "12th (Service) Battalion (Miners)", date: "Sep 1914 – June 1915" , battles: ["Somme", "Hundred", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["12/"], category: "service", hotspot: ["Leeds coalfields HQ", "Wakefield coalfield communities", "Barnsley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege"], },
{ range: [1301, 1500], battalion: "12th (Service) Battalion (Miners)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Hundred", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["12/"], category: "service", hotspot: ["Leeds coalfields HQ", "Wakefield coalfield communities", "Barnsley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege"], },
   
// MISC

  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Pontefract, Wakefield) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
 { range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
      
"King's Royal Rifle Corps": [

// Regulars
{ range: [1, 11615], battalion: "1st–4th (Regular) Battalions", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Loos", "Somme"], category: "regular_prewar", hotspot: ["London", "Birmingham", "Liverpool"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 3, theatre: "East" }, { bn: 4, theatre: "East"},] },
{ range: [11616, 15015], battalion: "1st–4th (Regular) Battalions", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele"], category: "regular_wartime", hotspot: ["London", "Birmingham", "Liverpool"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 3, theatre: "East" }, { bn: 4, theatre: "East"},] },
 { range: [15016, 19999], battalion: "1st–4th (Regular) Battalions", date: "1916 – 1918" , battles: ["Somme", "Passchendaele"], category: "regular_wartime", hotspot: ["London", "Birmingham", "Liverpool"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 3, theatre: "East" }, { bn: 4, theatre: "East"},] },

// SERVICE BATTALIONS (Kitchener’s Army)
  
  { range: [1, 13000], battalion: "7th–13th & 17th (Service) battalions", date: "Aug 1914 – June 1915", requiresPrefix: true, allowedPrefixes: ["R", "R/"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["London districts", "Middlesex", "South-East England"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [13001, 18000], battalion: "7th–13th & 17th (Service) battalions", date: "July 1915 – Dec 1915", requiresPrefix: true, allowedPrefixes: ["R", "R/"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["London districts", "Middlesex", "South-East England"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [18001, 34000], battalion: "7th–13th & 17th (Service) battalions", date: "Jan 1916 – Nov 1916", requiresPrefix: true, allowedPrefixes: ["R", "R/"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["London districts", "Middlesex", "South-East England"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [34001, 39000], battalion: "7th–13th, 17th-18th & 20th-21st (Service) battalions", date: "Dec 1916 – mid 1917", requiresPrefix: true, allowedPrefixes: ["R", "R/"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["London districts", "Middlesex", "South-East England"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
  { range: [1, 1100], battalion: "16th (Service) battalion", date: "Aug 1914 – June 1915", requiresPrefix: true, allowedPrefixes: ["C", "C/"], battles: ["Hundred", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["London", "Manchester", "Yorkshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1101, 1300], battalion: "16th (Service) battalion", date: "July 1915 – Dec 1915", requiresPrefix: true, allowedPrefixes: ["C", "C/"], battles: ["Hundred", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["London", "Manchester", "Yorkshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1301, 1600], battalion: "16th (Service) battalion", date: "Jan 1916 – Nov 1916", requiresPrefix: true, allowedPrefixes: ["C", "C/"], battles: ["Hundred", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["London", "Manchester", "Yorkshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
  { range: [1, 2500], battalion: "18th (Service) battalion (Arts & Crafts)", date: "June 1915 - Dec 1915", requiresPrefix: true, allowedPrefixes: ["A", "A/"], battles: ["Hundred", "Somme", "Passchendaele", "Spring"], category: "service", hotspot: ["London guilds and arts/crafts communities", "Surrey", "Hertfordshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [2501, 4000], battalion: "18th (Service) battalion (Arts & Crafts)", date: "Jan 1916 – Nov 1916", requiresPrefix: true, allowedPrefixes: ["A", "A/"], battles: ["Hundred", "Somme", "Passchendaele", "Spring"], category: "service", hotspot: ["London guilds and arts/crafts communities", "Surrey", "Hertfordshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
    { range: [1, 2500], battalion: "20th (Service) battalion (The British Empire League)", date: "Aug 1915 - Dec 1915", requiresPrefix: true, allowedPrefixes: ["A", "A/"], battles: ["Spring", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["London", "Middlesex", "Surrey"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [2501, 4000], battalion: "20th (Service) battalion (The British Empire League)", date: "Jan 1916 – Nov 1916", requiresPrefix: true, allowedPrefixes: ["A", "A/"], battles: ["Spring", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["London", "Middlesex", "Surrey"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
  { range: [2001, 3200], battalion: "21st (Service) battalion (Yeoman Rifles)", date: "Sep 1915 - Dec 1915", requiresPrefix: true, allowedPrefixes: ["C", "C/"], battles: ["Somme", "Passchendaele", "Spring"], category: "service", hotspot: ["Yorkshire country estates", "Northumberland farmers", "Durham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [3201, 4000], battalion: "21st (Service) battalion (Yeoman Rifles)", date: "Jan 1916 - Nov 1916", requiresPrefix: true, allowedPrefixes: ["C", "C/"], battles: ["Somme", "Passchendaele", "Spring"], category: "service", hotspot: ["Yorkshire country estates", "Northumberland farmers", "Durham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
//MISC 

 { range: [2965, 5721], battalion: "5th (Special Reserve) Battalion", requiresPrefix: true, allowedPrefixes: ["R/"] , date: "Pre-WWI – 1918", category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (London, Birmingham) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [152, 9802], battalion: "6th (Special Reserve) Battalion", requiresPrefix: true, allowedPrefixes: ["R/"] , date: "Pre-WWI – 1918", category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (London, Birmingham) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 2000], battalion: "Special Reserve/Short Service posting", requiresPrefix: true, allowedPrefixes: ["Y/"] , date: "1914 – 1915", category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (London, Birmingham) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home",},
{ range: [80001, 90000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

// No Territorial Force battalions

],
     
"King's Shropshire Light Infantry": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 225000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918",  battles: ["Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Shrewsbury", "Bridgnorth", "Wellington mining communities"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [225001, 235000], battalion: "10th (Shropshire and Cheshire Yeomanry) Territorial Force (TF) Battalion", tf: true, date: "Mar–Apr 1917" , category: "tf_renumbering", hotspot: ["Shrewsbury", "Bridgnorth", "Wellington"], theatre: "East", },

// Regulars
  { range: [1, 10500], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_prewar", hotspot: ["Shrewsbury", "Oswestry", "east Shropshire coalfields"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
{ range: [10501, 13900], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Shrewsbury", "Oswestry", "east Shropshire coalfields"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
  { range: [13901, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Shrewsbury", "Oswestry", "east Shropshire coalfields"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },


  // PRE-1917 TERRITORIAL FORCE
{ range: [1,2100], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Pre-WWI – Jul 1914", battles: ["Spring", "Arras", "Hundred"], category: "tf_pre1917", hotspot: ["Shrewsbury", "Wellington", "Oswestry"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2101,3600], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Aug 1914 – Jun 1915", battles: ["Spring", "Arras", "Hundred"], category: "tf_pre1917", hotspot: ["Shrewsbury", "Wellington", "Oswestry"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3601,9999], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Jul 1915 – early 1917", battles: ["Spring", "Arras", "Hundred"], category: "tf_pre1917", hotspot: ["Shrewsbury", "Wellington", "Oswestry"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// SERVICE BATTALIONS (Kitchener’s Army)
 { range: [10501, 17500], battalion: "5th–8th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Shrewsbury", "Oswestry", "Shropshire mining districts"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }] },
  { range: [17501, 20500], battalion: "5th–8th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Shrewsbury", "Oswestry", "Shropshire mining districts"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }] },
  { range: [20501, 28000], battalion: "5th–8th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Shrewsbury", "Oswestry", "Shropshire mining districts"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }] },
  { range: [28001, 35000], battalion: "5th–8th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Shrewsbury", "Oswestry", "Shropshire mining districts"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }] },

// MISC
  
  { range: [1, 20000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Shrewsbury, Oswestry) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Lancashire Fusiliers": [
  // POST-1917 TF RENUMBERING
  { range: [200001, 240000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Bury", "Ramsbottom", "Tottington"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 280000], battalion: "6th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Rochdale", "Littleborough", "Wardle"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [280001, 305000], battalion: "7th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Salford", "Pendleton", "Weaste"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [305001, 330000], battalion: "8th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Bolton", "Farnworth", "Kearsley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

 // Regulars
{ range: [1, 3100], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_prewar", hotspot: ["Bury", "Manchester", "Oldham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3101, 4800], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["Bury", "Manchester", "Oldham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4801, 9999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["Bury", "Manchester", "Oldham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

 // PRE-1917 TERRITORIAL FORCE
{ range: [1,8700], battalion: "5th–8th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", theatre: ["East"], category: "tf_pre1917", hotspot: ["Bury", "Rochdale", "Salford"], },
{ range: [8701,9300], battalion: "5th–8th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", theatre: ["East"], category: "tf_pre1917", hotspot: ["Bury", "Rochdale", "Salford"], },
{ range: [9301,9999], battalion: "5th–8th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", theatre: ["East"], category: "tf_pre1917", hotspot: ["Bury", "Rochdale", "Salford"], },
    
// SERVICE BATTALIONS (Kitchener’s Army)
  { range: [2912, 9500], battalion: "9th–12th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Manchester", "Salford", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [9501, 12500], battalion: "9th–12th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Manchester", "Salford", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [12501, 32000], battalion: "9th–12th, 15th–20th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Manchester", "Salford", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [32001, 48000], battalion: "9th–12th, 15th–20th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "service", hotspot: ["Manchester", "Salford", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 2500], battalion: "15th (Service) Battalion (1st Salford Pals)", date: "Sep 1914 – June 1915" , battles: ["Somme", "Spring", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["W/", "W", "S/", "S"], category: "service", hotspot: ["Salford", "Pendleton", "Broughton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [2501, 4000], battalion: "15th (Service) Battalion (1st Salford Pals)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Spring", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["W/", "W", "S/", "S"], category: "service", hotspot: ["Salford", "Pendleton", "Broughton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
         { range: [1, 2500], battalion: "16th (Service) Battalion (2nd Salford Pals)", date: "Nov 1914 – June 1915" , battles: ["Somme", "Spring", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["W/", "W", "S/", "S"], category: "service", hotspot: ["Salford docks and canals", "Weaste", "Seedley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [2501, 4000], battalion: "16th (Service) Battalion (2nd Salford Pals)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Spring", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["W/", "W", "S/", "S"], category: "service", hotspot: ["Salford docks and canals", "Weaste", "Seedley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 1500], battalion: "17th (Service) Battalion (1st Bantams)", date: "Dec 1914 – June 1915" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["L/", "L"], category: "service", hotspot: ["Bury", "Rochdale", "Middleton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1501, 2200], battalion: "17th (Service) Battalion (1st Bantams)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["L/", "L"], category: "service", hotspot: ["Bury", "Rochdale", "Middleton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], }, 
       
        { range: [1, 1500], battalion: "18th (Service) Battalion (2nd Bantams)", date: "Jan 1915 – June 1915" , battles: ["Somme", "Passchendaele", "Arras", "Spring"], requiresPrefix: true, allowedPrefixes: ["L/", "L"], category: "service", hotspot: ["Manchester industrial areas", "Bury", "Bolton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1501, 2200], battalion: "18th (Service) Battalion (2nd Bantams)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Arras", "Spring"], requiresPrefix: true, allowedPrefixes: ["L/", "L"], category: "service", hotspot: ["Manchester industrial areas", "Bury", "Bolton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
         { range: [1, 2500], battalion: "19th (Service) Battalion (3rd Salford Pals)", date: "Jan 1915 – June 1915" , battles: ["Somme", "Spring", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["W/", "W", "S/", "S"], category: "service", hotspot: ["Manchester engineers", "Salford tradesmen", "Eccles"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [2501, 4000], battalion: "19th (Service) Battalion (3rd Salford Pals)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Spring", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["W/", "W", "S/", "S"], category: "service", hotspot: ["Manchester engineers", "Salford tradesmen", "Eccles"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
         { range: [1, 2500], battalion: "20th (Service) Battalion (4th Salford Pals)", date: "Mar 1915 – June 1915" , battles: ["Somme", "Passchendaele", "Arras", "Spring"], requiresPrefix: true, allowedPrefixes: ["W/", "W", "S/", "S"], category: "service", hotspot: ["Swinton", "Salford", "Walkden"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [2501, 4000], battalion: "20th (Service) Battalion (4th Salford Pals)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Arras", "Spring"], requiresPrefix: true, allowedPrefixes: ["W/", "W", "S/", "S"], category: "service", hotspot: ["Swinton", "Salford", "Walkden"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

  // MISC
  
  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Manchester, Salford) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 99999], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Manchester, Salford) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
  
],
     
     "Leicestershire Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Leicester", "Loughborough", "Coalville"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Hinckley", "Melton Mowbray", "Market Harborough"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// Regulars
{ range: [1, 9900], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_prewar", hotspot: ["Leicester", "Loughborough", "Hinckley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
{ range: [9901, 13300], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Leicester", "Loughborough", "Hinckley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
{ range: [13301, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Leicester", "Loughborough", "Hinckley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
       
 // PRE-1917 TERRITORIAL FORCE
{ range: [1,2000], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", requiresPrefix: true, allowedPrefixes: ["4/", "5/"], battles: ["Passchendaele", "Arras", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Leicester", "Loughborough", "Melton Mowbray"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [2001,3500], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "Sep 1914 – mid 1915", requiresPrefix: true, allowedPrefixes: ["4/", "5/"], battles: ["Passchendaele", "Arras", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Leicester", "Loughborough", "Melton Mowbray"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [3501,6000], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", requiresPrefix: true, allowedPrefixes: ["4/", "5/"], battles: ["Passchendaele", "Arras", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Leicester", "Loughborough", "Melton Mowbray"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
       
  // SERVICE BATTALIONS (Kitchener’s Army)
{ range: [9900, 17500], battalion: "6th–9th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "service", hotspot: ["Leicester", "Loughborough", "coalfield districts"],cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [17501, 21000], battalion: "6th–9th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "service", hotspot: ["Leicester", "Loughborough", "coalfield districts"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [21001, 32000], battalion: "6th–9th & 11th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "service", hotspot: ["Leicester", "Loughborough", "coalfield districts"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [32001, 45000], battalion: "6th–9th & 11th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Hundred", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Leicester", "Loughborough", "coalfield districts"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 1500], battalion: "11th (Service) Battalion (Midland Pioneers)", date: "Oct 1915 – Dec 1915" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["11/", "11"], category: "service", hotspot: ["Leicester hosiery and engineering factories", "Loughborough", "Coalfield districts"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

  // MISC
  
  { range: [1, 50000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Leicester, Loughborough) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
 
],
     
     "Lincolnshire Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["East"], category: "tf_renumbering", hotspot: ["Lincoln", "Grantham", "Horncastle"], },
{ range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Boston", "Spalding", "Louth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 290000], battalion: "13th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Grimsby", "Cleethorpes", "Immingham"], theatre: "Home", },

  // Regulars
{ range: [1, 9750], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Loos", "Somme", "Arras"], category: "regular_prewar", hotspot: ["Lincoln", "Grimsby", "Boston"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [9751, 13150], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Lincoln", "Grimsby", "Boston"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [13151, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Lincoln", "Grimsby", "Boston"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

 // PRE-1917 TERRITORIAL FORCE
{ range: [1,2200], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Jul 1914", battles: ["Spring", "Arras", "Hundred"], category: "tf_pre1917", hotspot: ["Lincoln", "Grimsby", "Horncastle"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2201,5000], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – Dec 1915", battles: ["Spring", "Arras", "Hundred"], category: "tf_pre1917", hotspot: ["Lincoln", "Grimsby", "Horncastle"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [5001,9999], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Jan 1916 – early 1917", battles: ["Spring", "Arras", "Hundred"], category: "tf_pre1917", hotspot: ["Lincoln", "Grimsby", "Horncastle"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [9763, 16500], battalion: "6th–8th (Service) Battalions", date: "Aug – June 1915", battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Lincoln", "Grimsby", "agricultural districts"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [16501, 19500], battalion: "6th–8th (Service) Battalions", date: "July 1915 – Dec 1915", battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Lincoln", "Grimsby", "agricultural districts"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [19501, 30000], battalion: "6th–8th & 10th (Service) Battalions", date: "Jan 1916 – Nov 1916", battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Lincoln", "Grimsby", "agricultural districts"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [30001, 45000], battalion: "6th–8th & 10th (Service) Battalions", date: "Dec 1916 – mid 1916", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Lincoln", "Grimsby", "agricultural districts"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
{ range: [1, 1050], battalion: "10th (Service) Battalion (Grimsby Chums)", date: "Sep 1914 – June 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["10/"], category: "service", hotspot: ["Grimsby", "Cleethorpes", "Immingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [1051, 1300], battalion: "10th (Service) Battalion (Grimsby Chums)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["10/"], category: "service", hotspot: ["Grimsby", "Cleethorpes", "Immingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
  // MISC

 { range: [1, 20000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Lincoln, Grimsby) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "London Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [300001, 320000], battalion: "5th (London Rifle Brigade) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Bishopgate", "City of London professionals", "Bunhill Row"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [320001, 350000], battalion: "6th (Rifles) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Finsbury", "Clerkenwell", "Islington"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [350001, 370000], battalion: "7th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Shoreditch", "Hoxton", "Hackney"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [370001, 390000], battalion: "8th (Post Office Rifles) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["General Post Office employees", "Clerkenwell", "Mount Pleasant"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [390001, 420000], battalion: "9th (Queen Victoria’s Rifles) Territorial Force (TF) Battalion", tf: true,  date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Paddington", "Marylebone", "St Johns Wood"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [420001, 450000], battalion: "10th (Hackney) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["East"], category: "tf_renumbering", hotspot: ["Hackney", "Dalston", "Stoke Newington"], },
{ range: [450001, 470000], battalion: "11th (Finsbury Rifles) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["East"], category: "tf_renumbering", hotspot: ["Finsbury", "Islington", "Clerkenwell"],  },
{ range: [470001, 490000], battalion: "12th (The Rangers) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Westminster", "Holborn", "St Pancreas"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [490001, 510000], battalion: "13th (Kensington) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Kensington", "Notting Hill", "Hammersmith"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

{ range: [510001, 530000], battalion: "14th (London Scottish) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Scottish community in London", "Chelsea", "Paddington"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [530001, 550000], battalion: "15th (Prince of Wales’s Own Civil Service Rifles) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Civil Service employees in London", "Holborn", "Westminster"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [550001, 570000], battalion: "16th (Queen’s Westminster Rifles) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Westminster", "Pimlico", "Chelsea"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [570001, 590000], battalion: "17th (Poplar and Stepney Rifles) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Poplar", "Stepney", "Bow"] ,cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

{ range: [590001, 610000], battalion: "18th (London Irish Rifles) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Irish community in London", "Camberwell", "Peckham"] ,cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [610001, 630000], battalion: "19th (St Pancras) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["St Pancras", "Camden Town", "Kentish Town"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [630001, 650000], battalion: "20th (Blackheath and Woolwich) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Blackheath", "Woolwich", "Greenwich"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [650001, 680000], battalion: "21st (First Surrey Rifles) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Camberwell", "Peckham", "Dulwich"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [680001, 700000], battalion: "22nd (The Queen’s) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Clapham", "Battersea", "Wandsworth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [700001, 720000], battalion: "23rd Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"],  category: "tf_renumbering", hotspot: ["Kensington", "Paddington", "Holborn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [720001, 740000], battalion: "24th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Chelsea", "Kensington athletic clubs", "Paddington"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [740001, 760000], battalion: "25th (Cyclist) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Fulham", "Hammersmith", "Acton"], theatre: "India", },
// Note: there is NO TF block for '26th' or '27th' Londons in 1917 renumbering
{ range: [760001, 780000], battalion: "28th (Artist’s Rifles) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Hundred", "Spring", "Passchendaele"], category: "tf_renumbering", hotspot: ["Chelsea artistic community", "Westminster professionals", "Bloomsbury university candidates"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [780001, 800000], battalion: "29th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Westminster public schools", "Kensington", "Hampstead public schools"], theatre: "Home" },
{ range: [800001, 820000], battalion: "30th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering",  hotspot: ["Holborn civil servants", "Westminster clerical workers", "Bloomsbury administrators"], theatre: "Home", },
{ range: [820001, 840000], battalion: "31st Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Clapham", "Battersea", "Wandsworth"], theatre: "Home", },
{ range: [840001, 860000], battalion: "32nd Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Clapham", "Battersea", "Wandsworth"], theatre: "Home", },
  
  // PRE-1917 TERRITORIAL FORCE
{ range: [1,2000], battalion: "5th-28th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Jul 1914", battles: ["Loos", "Somme", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Finsbury", "Kensington", "Hackney"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 10, theatre: "East" }, { bn:11, theatre: "East"},] },
{ range: [2001,3300], battalion: "5th-28th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – Dec 1915", battles: ["Loos", "Somme", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Finsbury", "Kensington", "Hackney"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 10, theatre: "East" }, { bn:11, theatre: "East"},] },
{ range: [3301,9999], battalion: "5th-28th Territorial Force (TF) Battalions", tf: true, date: "Jan 1916 – early 1917", battles: ["Loos", "Somme", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Finsbury", "Kensington", "Hackney"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 10, theatre: "East" }, { bn:11, theatre: "East"},] },

  // MISC
  { range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

//No regulars nor service battalions

],
     
     "Loyal North Lancashire Regiment": [
 // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Somme"], category: "tf_renumbering", hotspot: ["Preston", "Chorley", "Leyland"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Somme", "Hundred"], category: "tf_renumbering", hotspot: ["Wigan", "Leigh", "Tyldesley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 290000], battalion: "12th Territorial Force (TF) Battalion", tf: true, date: "Aug 1915-1918", category: "tf_renumbering", hotspot: ["Blackpool", "Fleetwood", "Poulton le Fylde"], theatre: "East", },
{ range: [290001, 315000], battalion: "14th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Blackburn", "Darwen", "Accrington"], theatre: "Home", },

   //Regulars
{ range: [1, 11456], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Loos", "Somme", "Hundred"], category: "regular_prewar", hotspot: ["Preston", "Blackburn", "Wigan"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
{ range: [11457, 14856], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Preston", "Blackburn", "Wigan"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
{ range: [14857, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Preston", "Blackburn", "Wigan"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },

  // PRE-1917 TERRITORIAL FORCE
{ range: [1, 2100], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Jul 1914", battles: ["Somme", "Passchendaele", "Hundred", "Spring"], category: "tf_pre1917", hotspot: ["Preston", "Bolton", "Blackburn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2101, 5000], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – Jun 1915", battles: ["Somme", "Passchendaele", "Hundred", "Spring"], category: "tf_pre1917", hotspot: ["Preston", "Bolton", "Blackburn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [5001, 9999], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Jul 1915 – early 1917", battles: ["Somme", "Passchendaele", "Hundred", "Spring"], category: "tf_pre1917", hotspot: ["Preston", "Bolton", "Blackburn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// SERVICE BATTALIONS (Kitchener’s Army)
 { range: [11000, 18500], battalion: "6th–10th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Arras", "Passchendaele"], category: "service", hotspot: ["Preston", "Bolton", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" },] },
  { range: [18501, 21500], battalion: "6th–10th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Arras", "Passchendaele"], category: "service", hotspot: ["Preston", "Bolton", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" },] },
  { range: [21501, 32000], battalion: "6th–10th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Arras", "Passchendaele"], category: "service", hotspot: ["Preston", "Bolton", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" },] },
  { range: [32001, 45000], battalion: "6th–10th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Preston", "Bolton", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" },] },

// MISC

  { range: [1, 999999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Preston, Lancashire mill towns) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
   { range: [1, 999999], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],

     "Manchester Regiment": [
  // POST-1917 TF RENUMBERING
  { range: [200001, 250000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Wigan", "Leigh", "Tyldesley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [250001, 275000], battalion: "6th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Hulme", "Moss Side", "Chorlton on Medlock"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [275001, 300000], battalion: "7th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Aldwick", "Gorton", "Openshaw"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [300001, 350000], battalion: "8th (Ardwick) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Ardwick", "Longsight", "Levenshulme"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [350001, 375000], battalion: "9th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Ashton-under-Lyne", "Stalybridge", "Dukinfield"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [375001, 400000], battalion: "10th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Oldham", "Royton", "Chadderton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [400001, 425000], battalion: "28th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Eccles", "Swinton", "Pendlebury"], theatre: "Home", },


// Regulars
{ range: [1, 2900], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Mons", "Loos", "Somme", "Hundred"], category: "regular_prewar", hotspot: ["Manchester", "Salford", "Oldham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" },] },
{ range: [2901, 4600], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Loos", "Somme", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Manchester", "Salford", "Oldham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" },] },
{ range: [4601, 9999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Manchester", "Salford", "Oldham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" },] },

 // PRE-1917 TERRITORIAL FORCE
{ range: [1,2000], battalion: "5th-10th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Jul 1914", theatre: ["East"], category: "tf_pre1917", hotspot: ["Wigan", "Ardwick", "Oldham"], },
{ range: [2001,4300], battalion: "5th-10th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – Dec 1915", theatre: ["East"], category: "tf_pre1917", hotspot: ["Wigan", "Ardwick", "Oldham"], },
{ range: [4301,9999], battalion: "5th-10th Territorial Force (TF) Battalions", tf: true, date: "Jan 1916 – early 1917", theatre: ["East"], category: "tf_pre1917", hotspot: ["Wigan", "Ardwick", "Oldham"], },

// SERVICE BATTALIONS (Kitchener’s Army)
       
   { range: [2800, 6100], battalion: "11th–13th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "service",hotspot: ["Manchester city", "Salford", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 13, theatre: "East" },] },    
   { range: [13000, 16900], battalion: "11th–13th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "service",hotspot: ["Manchester city", "Salford", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 13, theatre: "East" },] }, 
   { range: [23000, 35000], battalion: "11th–13th & 16th-24th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "service",hotspot: ["Manchester city", "Salford", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 13, theatre: "East" },] },   
   { range: [35001, 55000], battalion: "11th–13th & 16th-24th (Service) Battalions", date: "Dec 1916 - mid 1917" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "service",hotspot: ["Manchester city", "Salford", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 13, theatre: "East" },] }, 
       
       
  { range: [1, 1500], battalion: "16th (Service) Battalion (1st City)", date: "Aug 1914 – Dec 1915" , battles: ["Spring", "Arras", "Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["16/"], category: "service", hotspot: ["Manchester city", "Salford", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 1500], battalion: "17th (Service) Battalion", date: "Aug 1914 – Dec 1915" , battles: ["Spring", "Arras", "Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["17/"], category: "service", hotspot: ["Manchester city", "Salford", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 1500], battalion: "18th (Service) Battalion", date: "Aug 1914 – Dec 1915" , battles: ["Spring", "Arras", "Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["18/"], category: "service", hotspot: ["Manchester city", "Salford", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 1500], battalion: "19th (Service) Battalion", date: "Aug 1914 – Dec 1915" , battles: ["Spring", "Arras", "Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["19/"], category: "service", hotspot: ["Manchester city", "Salford", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 1500], battalion: "20th (Service) Battalion", date: "Nov 1914 – Dec 1915" , battles: ["Spring", "Arras", "Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["20/"], category: "service", hotspot: ["Manchester city", "Salford", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 1500], battalion: "21st (Service) Battalion", date: "Nov 1914 – Dec 1915" , battles: ["Spring", "Arras", "Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["21/"], category: "service", hotspot: ["Manchester city", "Salford", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 1500], battalion: "22nd (Service) Battalion", date: "Nov 1914 – Dec 1915" , battles: ["Spring", "Arras", "Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["22/"], category: "service", hotspot: ["Manchester city", "Salford", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 1500], battalion: "23th (Service) Battalion", date: "Nov 1914 – Dec 1915" , battles: ["Spring", "Arras", "Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["23/"], category: "service", hotspot: ["Manchester city", "Salford", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 1500], battalion: "24th (Service) Battalion", date: "Oct 1914 – Dec 1915" , battles: ["Spring", "Arras", "Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["24/"], category: "service", hotspot: ["Manchester city", "Salford", "Lancashire mill towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  // MISC

  { range: [1, 100000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Manchester, Salford) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 100000], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Manchester, Salford) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
 { range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
      "Middlesex Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "7th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Hornsey", "Tottenham", "Wood Green"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "8th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Hounslow", "Brentford", "Isleworth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 290000], battalion: "9th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Willesden", "Harlesden", "Kilburn"], theatre: "East", },
{ range: [290001, 315000], battalion: "10th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["India"], category: "tf_renumbering", hotspot: ["Hammersmith", "Sherherds Bush", "Fulham"], },
{ range: [315001, 340000], battalion: "32nd Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Hounslow", "Brentford", "Isleworth"], theatre: "Home", },

// Regulars
{ range: [1, 14820], battalion: "1st-4th (Regular) Battalion", date: "Pre-WWI – Aug 1914" , requiresPrefix: true, allowedPrefixes: ["L/", "L"], battles: ["Mons", "Loos", "Somme", "Arras"], category: "regular_prewar", hotspot: ["Mill Hill", "Hendon", "Finchley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 3, theatre: "East" },] },
{ range: [14821, 18220], battalion: "1st-4th (Regular) Battalion", date: "Aug 1914 – early 1916" , requiresPrefix: true, allowedPrefixes: ["L/", "L"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Mill Hill", "Hendon", "Finchley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 3, theatre: "East" },] },
{ range: [18221, 22000], battalion: "1st-4th (Regular) Battalion", date: "1916 – 1918" , requiresPrefix: true, allowedPrefixes: ["L/", "L"], battles: ["Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Mill Hill", "Hendon", "Finchley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 3, theatre: "East" },] },

 // PRE-1917 TERRITORIAL FORCE
{ range: [1, 2300], battalion: "7th-10th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Jul 1914", battles: ["Loos", "Somme", "Passchendaele", "Hundred"], category: "tf_pre1917", hotspot: ["Hornsey", "Hounslow", "Willesden"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 9, theatre: "East" }, { bn: 10, theatre: "India"},] },
{ range: [2301, 5000], battalion: "7th-10th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – Jun 1915", battles: ["Loos", "Somme", "Passchendaele", "Hundred"], category: "tf_pre1917", hotspot: ["Hornsey", "Hounslow", "Willesden"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 9, theatre: "East" }, { bn: 10, theatre: "India"},] },
{ range: [5001,9999], battalion: "7th-10th Territorial Force (TF) Battalions", tf: true, date: "Jul 1915 – early 1917", battles: ["Loos", "Somme", "Passchendaele", "Hundred"], category: "tf_pre1917", hotspot: ["Hornsey", "Hounslow", "Willesden"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 9, theatre: "East" }, { bn: 10, theatre: "India"},] },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [1, 9500], battalion: "11th–13th (Service) Battalions", date: "Aug 1914 – Jun 1915" , requiresPrefix: true, allowedPrefixes: ["G/", "GS/"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Central London", "Westminster", "Kensington"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], }, 
 { range: [9501, 18500], battalion: "11th–13th, 18th & 20th-21st (Service) Battalions", date: "July 1915 – Dec 1915" , requiresPrefix: true, allowedPrefixes: ["G/", "GS/"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Central London", "Westminster", "industrial suburbs"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
 { range: [18501, 45000], battalion: "11th–13th, 16th-19th, 20th-23rd & 26th (Service) Battalions", date: "Jan 1916 - Nov 1916" , requiresPrefix: true, allowedPrefixes: ["G/", "GS/"], battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Central London", "Westminster", "industrial suburbs"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
 { range: [45001, 65000], battalion: "11th–13th, 16th-19th, 20th-23rd & 26th (Service) Battalions", date: "Dec 1916 - mid 1917" , requiresPrefix: true, allowedPrefixes: ["G/", "GS/"], battles: ["Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Central London", "Westminster", "industrial suburbs"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
        
{ range: [1, 4200], battalion: "16th (Service) Battalion (1st Public Schools)", date: "Sept 1914 – June 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["PS/"], category: "service", hotspot: ["Public schools intake across London and Home Counties"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4201, 4600], battalion: "16th (Service) Battalion (1st Public Schools)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["PS/"], category: "service", hotspot: ["Public schools intake across London and Home Counties"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
        
{ range: [1, 2000], battalion: "17th (Service) Battalion (1st Football)", date: "Dec 1914 – June 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["F/"], category: "service", hotspot: ["Recruited from London and the national football community"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
        
 { range: [1, 1500], battalion: "18th (Service) Battalion (1st Public Works)", date: "Jan 1915 – June 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["PW/"], category: "service", hotspot: ["Skilled labourers, miners and construction workers from the Middlesex area"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
        
 { range: [1501, 2800], battalion: "19th (Service) Battalion (2nd Public Works)", date: "Apr 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Hundred"], requiresPrefix: true, allowedPrefixes: ["PW/"], category: "service", hotspot: ["Skilled labourers, miners and construction workers from the Middlesex area"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
        
 { range: [2801, 3800], battalion: "22nd (Service) Battalion (Kensington Tigers)", date: "June 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["PW/"], category: "service", hotspot: ["Kensington", "Paddington", "Hammersmith"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
        
 { range: [2001, 3500], battalion: "23rd (Service) Battalion (2nd Football)", date: "June 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Hundred"], requiresPrefix: true, allowedPrefixes: ["F/"], category: "service", hotspot: ["Recruited from London and the national football community"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
        
 { range: [3801, 4500], battalion: "26th (Service) Battalion (3rd Public Works)", date: "Aug 1915 – Dec 1915" , battles: ["Somme", "Hundred"], requiresPrefix: true, allowedPrefixes: ["PW/"], category: "service", hotspot: ["Skilled labourers, miners and construction workers from the Middlesex area"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

  // MISC

  { range: [1, 20000], battalion: "Special Reserve, feeds 5th & 6th (Reserve) depot/training", date: "pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["SR/"] , category: "misc", hotspot: "Mill Hill depot; reserve administration", theatre: "Home", },
 { range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Monmouthshire Regiment": [
  // POST-1917 TF RENUMBERING BLOCKS
  // ⚠️ These ranges are officially part of the South Wales Borderers allocation in 1917 TF renumbering tables.
  // DO NOT duplicate these in the SWB entry when that regiment is added – they belong to Monmouthshire TF battalions.
{ range: [225001, 265000], battalion: "1st Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras"], category: "tf_renumbering", hotspot: ["Newport", "Chepstow", "Blackwood"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 290000], battalion: "2nd Territorial Force (TF) Battalion", tf: true,  date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Pontypool", "Abertillery", "Blaina"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [290001, 315000], battalion: "3rd Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring"], category: "tf_renumbering", hotspot: ["Abergavenny", "Brynmawr", "Crickhowell"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [315001, 340000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Rhymney", "Tredegar", "Ebbw Vale"], theatre: "Home", },

// PRE-1917 TERRITORIAL FORCE
{ range: [1,1900], battalion: "1st-3rd Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Jul 1914", battles: ["Loos", "Somme", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Newport", "Pontypool", "Abergavenny"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "Home" },] },
{ range: [1901,3600], battalion: "1st-3rd Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – Jun 1915", battles: ["Loos", "Somme", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Newport", "Pontypool", "Abergavenny"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "Home" },] },
{ range: [3601,9999], battalion: "1st-3rd Territorial Force (TF) Battalions", tf: true, date: "Jul 1915 – early 1917", battles: ["Loos", "Somme", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Newport", "Pontypool", "Abergavenny"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "Home" },] },

// MISC
 
  { range: [1, 50000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Abertillery, Abergavenny) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
 { range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

//No regulars nor service battalions

],
     
     "Norfolk Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" ,category: "tf_renumbering", hotspot: ["Norwich", "Dereham", "Aylsham"], theatre: "East", },
{ range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["North Walsham", "Cromer", "Sheringham"], theatre: "East", },
{ range: [265001, 290000], battalion: "6th (Cyclist) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Yarmouth", "Gorleston", "Lowestoft"], theatre: "Home", },
{ range: [290001, 315000], battalion: "11th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Kings Lynn", "Downham Market", "Swaffham"], theatre: "Home", },
{ range: [315001, 325000], battalion: "12th (Norfolk Yeomanry) Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918", category: "tf_renumbering", hotspot: ["Norwich", "Great Yarmouth", "Dereham"], theatre: "East", },

// Regulars
{ range: [1, 6500], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Somme", "Passchendaele", "Arras"], category: "regular_prewar", hotspot: ["Norwich", "Kings Lynn", "Great Yarmouth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
{ range: [6501, 7100], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Norwich", "Kings Lynn", "Great Yarmouth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
{ range: [7101, 9999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Norwich", "Kings Lynn", "Great Yarmouth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
  
// PRE-1917 TERRITORIAL FORCE
{ range: [1,2200], battalion: "4th–6th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", category: "tf_pre1917", hotspot: ["Norwich", "Dereham", "North Walsham"], alt: [{ bn: 4, theatre: "East" }, { bn: 5, theatre: "East"}, { bn:6, theatre: "Home"},] },
{ range: [2201,5200], battalion: "4th–6th Territorial Force (TF) Battalions", tf: true, date: "Sep 1914 – mid 1915", category: "tf_pre1917", hotspot: ["Norwich", "Dereham", "North Walsham"], alt: [{ bn: 4, theatre: "East" }, { bn: 5, theatre: "East"}, { bn:6, theatre: "Home"},] },
{ range: [5201,9999], battalion: "4th–6th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", category: "tf_pre1917", hotspot: ["Norwich", "Dereham", "North Walsham"], alt: [{ bn: 4, theatre: "East" }, { bn: 5, theatre: "East"}, { bn:6, theatre: "Home"},] },


// SERVICE BATTALIONS (Kitchener’s Army)

{ range: [1, 4500], battalion: "7th–9th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Norwich", "Great Yarmouth", "Kings Lynn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4501, 11500], battalion: "7th–9th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Norwich", "Great Yarmouth", "Kings Lynn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [11501, 20000], battalion: "7th–9th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Norwich", "Great Yarmouth", "Kings Lynn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [20001, 28000], battalion: "7th–9th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Norwich", "Great Yarmouth", "Kings Lynn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

  // MISC

  { range: [1, 50000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Norwich, Kings Lynn) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "North Staffordshire Regiment (Prince of Wales's)": [

  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Burton upon Trent", "Uttoxeter", "Tutbury"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "6th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Arras", "Hundred", "Spring"], category: "tf_renumbering", hotspot: ["Burton-upon-Trent", "Leek", "Biddulph"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

   //Regulars
  { range: [1, 11166], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_prewar", hotspot: ["Lichfield", "Stoke on Trent", "Staffordshire coalfields"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "India" },] },
{ range: [11167, 14566], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Lichfield", "Stoke on Trent", "Staffordshire coalfields"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "India" },] },
{ range: [14567, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Lichfield", "Stoke on Trent", "Staffordshire coalfields"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "India" },] },

    // PRE-1917 TERRITORIAL FORCE
{ range: [1,3600], battalion: "5th–6th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Loos", "Somme", "Spring", "Arras"], category: "tf_pre1917", hotspot: ["Hanley", "Burton-upon-Trent", "Staffordshire coalfield towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [3601,6000], battalion: "5th–6th Territorial Force (TF) Battalions", tf: true, date: "Sep 1914 – mid 1915", battles: ["Loos", "Somme", "Spring", "Arras"], category: "tf_pre1917", hotspot: ["Hanley", "Burton-upon-Trent", "Staffordshire coalfield towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [6001,9999], battalion: "5th–6th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Loos", "Somme", "Spring", "Arras"], category: "tf_pre1917", hotspot: ["Hanley", "Burton-upon-Trent", "Staffordshire coalfield towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

 // SERVICE BATTALIONS (Kitchener’s Army)
  { range: [10000, 17500], battalion: "7th, 8th or 9th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Stoke-on-Trent", "Burton-upon-Trent", "Staffordshire mining towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" },] },
  { range: [17501, 24000], battalion: "7th, 8th or 9th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Stoke-on-Trent", "Burton-upon-Trent", "Staffordshire mining towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" },] },
  { range: [24001, 42000], battalion: "7th, 8th or 9th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Stoke-on-Trent", "Burton-upon-Trent", "Staffordshire mining towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" },] },
  { range: [42001, 55000], battalion: "7th, 8th or 9th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Stoke-on-Trent", "Burton-upon-Trent", "Staffordshire mining towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" },] },

// MISC

  { range: [1, 50000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Stoke on Trent, Hanley) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 50000], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Stoke on Trent, Hanley) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
 { range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Northamptonshire Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 225000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Northampton", "Kettering", "Wellingborough"], theatre: "East", },
{ range: [225001, 250000], battalion: "9th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Northampton", "Kettering", "Rushden"], theatre: "Home", },

//Regulars
  { range: [1, 10944], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Loos", "Somme"], category: "regular_prewar", hotspot: ["Northampton", "Peterborough", "Wellingborough"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [10945, 14344], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele"], category: "regular_wartime", hotspot: ["Northampton", "Peterborough", "Wellingborough"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
 { range: [14345, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele"], category: "regular_wartime", hotspot: ["Northampton", "Peterborough", "Wellingborough"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

  // PRE-1917 TERRITORIAL FORCE
{ range: [1, 2400], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Pre-WWI – Aug 1914", category: "tf_pre1917", hotspot: ["Northampton", "Rushden", "Kettering"], theatre: "East" },
{ range: [2401, 5475], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Sep 1914 – mid 1915", category: "tf_pre1917", hotspot: ["Northampton", "Rushden", "Kettering"], theatre: "East" },
{ range: [5476, 9999], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "mid 1915 – early 1917", category: "tf_pre1917", hotspot: ["Northampton", "Rushden", "Kettering"], theatre: "East" },

// SERVICE BATTALIONS (Kitchener’s Army)
 { range: [11000, 17500], battalion: "5th–7th (Service) Battalions", date: "Aug 1914 - June 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Northampton", "Wellingborough", "Rushden"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [17501, 24000], battalion: "5th–7th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Northampton", "Wellingborough", "Rushden"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [24001, 45000], battalion: "5th–7th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Northampton", "Wellingborough", "Rushden"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [450001, 55000], battalion: "5th–7th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Somme", "Passchendaele", "Spring", "Hundred"],  category: "service", hotspot: ["Northampton", "Wellingborough", "Rushden", "Arras"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// MISC

  { range: [1, 50000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Northampton, Wellingborough) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Northumberland Fusiliers": [

  // POST-1917 TF RENUMBERING
  { range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Hexham", "Morpeth", "Alnwick"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Newcastle upon Tyne", "Gateshead", "Tyneside industrial areas"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [265001, 290000], battalion: "6th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Ashington", "Bedlington", "Coal mining towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [290001, 315000], battalion: "7th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Blyth", "Ashington", "Coal mining towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [315001, 340000], battalion: "35th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Newcastle upon Tyne", "North Shields", "Sunderland"], theatre: "Home", },
  { range: [340001, 365000], battalion: "36th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Newcastle upon Tyne", "South Shields", "Gateshead"], theatre: "Home", },
  { range: [365001, 390000], battalion: "1st Northern Cyclist Battalion (Territorial Force)", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Alnwick", "Morpeth", "Berwick upon Tweed"], theatre: "Home", },
  // ⚠️ If you add a separate “Northern Cyclist Battalion” entry later, do NOT duplicate 365001–390000.

  // REGULARS
  { range: [1, 6500], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Loos", "Somme", "Arras"], category: "regular_prewar", hotspot: ["Newcastle upon Tyne", "Gateshead", "Morpeth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
  { range: [6501, 7499], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – Aug 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Newcastle upon Tyne", "Gateshead", "Morpeth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
  { range: [7500, 8499], battalion: "1st or 2nd (Regular) Battalion", date: "late 1915 – mid 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Newcastle upon Tyne", "Gateshead", "Morpeth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
  { range: [8500, 9999], battalion: "1st or 2nd (Regular) Battalion", date: "late 1916 – 1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["Newcastle upon Tyne", "Gateshead", "Morpeth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },

    // PRE-1917 TERRITORIAL FORCE
{ range: [1,2600], battalion: "4th–7th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "tf_pre1917", hotspot: ["Newcastle", "Hexham", "Alnwick"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [2601,6000], battalion: "4th–7th Territorial Force (TF) Battalions", tf: true, date: "Sep 1914 – mid 1915", battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "tf_pre1917", hotspot: ["Newcastle", "Hexham", "Alnwick"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [6001,9999], battalion: "4th–7th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "tf_pre1917", hotspot: ["Newcastle", "Hexham", "Alnwick"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
   
  // SERVICE BATTALIONS (Kitchener’s Army)
  { range: [6501, 19000], battalion: "8th–14th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Newcastle upon Tyne", "Tyneside industrial belt", "Morpeth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [19001, 28000], battalion: "8th–14th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Newcastle upon Tyne", "Tyneside industrial belt", "Morpeth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
 { range: [28001, 48000], battalion: "8th–14th & 16th-19th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Passchendaele", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Newcastle upon Tyne", "Tyneside industrial belt", "Morpeth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [48001, 65000], battalion: "8th–14th & 16th-27th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Newcastle upon Tyne", "Tyneside industrial belt", "Morpeth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
       
   { range: [1, 2000], battalion: "16th (Service) Battalion (1st Newcastle Pals)", date: "Sep 1914 – Dec 1915" , battles: ["Somme", "Arras", "Spring"], requiresPrefix: true, allowedPrefixes: ["16/"], category: "service", hotspot: ["Newcastle commercial workers", "Gosforth managers", "Tynemouth commercial and shipping personnel"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 2000], battalion: "17th (Service) Battalion (N.E.R Railway Pioneers)", date: "Sep 1914 – Dec 1915" , battles: ["Somme", "Arras", "Spring", "Hundred"], requiresPrefix: true, allowedPrefixes: ["17/"], category: "service", hotspot: ["North Eastern Railway employees", "Darlington", "York"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 4000], battalion: "18th (Service) Battalion (1st Tyneside Pioneers)", date: "Oct 1914 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["18/"], category: "service", hotspot: ["Newcastle upon Tyne labourers", "Gateshead miners", "Wallsend dock workers"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 4000], battalion: "19th (Service) Battalion (2nd Tyneside Pioneers)", date: "Nov 1914 – Dec 1915" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["19/"], category: "service", hotspot: ["Newcastle upon Tyne labourers", "Gateshead miners", "Wallsend dock workers"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 1500], battalion: "20th (Service) Battalion (1st Tyneside Scottish)", date: "Oct 1914 – June 1915" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["20/"], category: "service", hotspot: ["Newcastle upon Tyne", "Gateshead", "Wallsend"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1501, 2000], battalion: "20th (Service) Battalion (1st Tyneside Scottish)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["20/"], category: "service", hotspot: ["Newcastle upon Tyne", "Gateshead", "Wallsend"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [2001, 3500], battalion: "20th (Service) Battalion (1st Tyneside Scottish)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["20/"], category: "service", hotspot: ["Newcastle upon Tyne", "Gateshead", "Wallsend"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 1500], battalion: "21st (Service) Battalion (2nd Tyneside Scottish)", date: "Sep 1914 – June 1915" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["21/"], category: "service", hotspot: ["Newcastle upon Tyne", "Gateshead", "Wallsend"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1501, 2000], battalion: "21st (Service) Battalion (2nd Tyneside Scottish)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["21/"], category: "service", hotspot: ["Newcastle upon Tyne", "Gateshead", "Wallsend"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [2001, 3500], battalion: "21st (Service) Battalion (2nd Tyneside Scottish)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["21/"], category: "service", hotspot: ["Newcastle upon Tyne", "Gateshead", "Wallsend"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 1500], battalion: "22nd (Service) Battalion (3rd Tyneside Scottish)", date: "Nov 1914 – June 1915" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["22/"], category: "service", hotspot: ["Newcastle upon Tyne", "Gateshead", "Wallsend"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1501, 2000], battalion: "22nd (Service) Battalion (3rd Tyneside Scottish)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["22/"], category: "service", hotspot: ["Newcastle upon Tyne", "Gateshead", "Wallsend"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [2001, 3500], battalion: "22nd (Service) Battalion (3rd Tyneside Scottish)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["22/"], category: "service", hotspot: ["Newcastle upon Tyne", "Gateshead", "Wallsend"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 1500], battalion: "23rd (Service) Battalion (4th Tyneside Scottish)", date: "Nov 1914 – June 1915" , battles: ["Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["23/"], category: "service", hotspot: ["Newcastle upon Tyne", "Gateshead", "Wallsend"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1501, 2000], battalion: "23rd (Service) Battalion (4th Tyneside Scottish)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["23/"], category: "service", hotspot: ["Newcastle upon Tyne", "Gateshead", "Wallsend"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [2001, 3500], battalion: "23rd (Service) Battalion (4th Tyneside Scottish)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["23/"], category: "service", hotspot: ["Newcastle upon Tyne", "Gateshead", "Wallsend"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 1500], battalion: "24th (Service) Battalion (1st Tyneside Irish)", date: "Nov 1914 – June 1915" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["24/"], category: "service", hotspot: ["Newcastle upon Tyne", "Sunderland", "Jarrow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1501, 2000], battalion: "24th (Service) Battalion (1st Tyneside Irish)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["24/"], category: "service", hotspot: ["Newcastle upon Tyne", "Sunderland", "Jarrow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [2001, 3500], battalion: "24th (Service) Battalion (1st Tyneside Irish)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["24/"], category: "service", hotspot: ["Newcastle upon Tyne", "Sunderland", "Jarrow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 1500], battalion: "25th (Service) Battalion (2nd Tyneside Irish)", date: "Nov 1914 – June 1915" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["25/"], category: "service", hotspot: ["Newcastle upon Tyne", "Hebburn", "Jarrow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1501, 2000], battalion: "25th (Service) Battalion (2nd Tyneside Irish)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["25/"], category: "service", hotspot: ["Newcastle upon Tyne", "Hebburn", "Jarrow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [2001, 3500], battalion: "25th (Service) Battalion (2nd Tyneside Irish)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["25/"], category: "service", hotspot: ["Newcastle upon Tyne", "Hebburn", "Jarrow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 1500], battalion: "26th (Service) Battalion (3rd Tyneside Irish)", date: "Nov 1914 – June 1915" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["26/"], category: "service", hotspot: ["Newcastle upon Tyne", "Gateshead", "Durham coalfields"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1501, 2000], battalion: "26th (Service) Battalion (3rd Tyneside Irish)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["26/"], category: "service", hotspot: ["Newcastle upon Tyne", "Gateshead", "Durham coalfields"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [2001, 3500], battalion: "26th (Service) Battalion (3rd Tyneside Irish)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["26/"], category: "service", hotspot: ["Newcastle upon Tyne", "Gateshead", "Durham coalfields"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  { range: [1, 1500], battalion: "27th (Service) Battalion (4th Tyneside Irish)", date: "Jan 1915 – June 1915" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["27/"], category: "service", hotspot: ["Newcastle upon Tyne", "Gateshead", "Consett"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1501, 2000], battalion: "27th (Service) Battalion (4th Tyneside Irish)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["27/"], category: "service", hotspot: ["Newcastle upon Tyne", "Gateshead", "Consett"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [2001, 3500], battalion: "27th (Service) Battalion (4th Tyneside Irish)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Arras", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["27/"], category: "service", hotspot: ["Newcastle upon Tyne", "Gateshead", "Consett"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

  // MISC

  { range: [1, 120000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Newcastle, Gateshead) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Oxfordshire & Buckinghamshire Light Infantry": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Oxford", "Abingdon", "Banbury"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "10th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Oxford", "Abingdon", "Reading"], theatre: "Home", },
// ⚠️ Buckinghamshire Battalion is carried under OBLI; don’t duplicate under a separate “Buckinghamshire Regiment”
{ range: [265001, 290000], battalion: "1st (Buckinghamshire) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Buckingham", "Aylesbury", "High Wycombe"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

 // Regulars
{ range: [1, 11296], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Loos", "Somme", "Arras"], category: "regular_prewar", hotspot: ["Oxford", "High Wycombe", "Reading"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" },] },
{ range: [11297, 14696], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Oxford", "High Wycombe", "Reading"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" },] },
{ range: [14697, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Oxford", "High Wycombe", "Reading"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" },] },

   // PRE-1917 TERRITORIAL FORCE
{ range: [1,2400], battalion: "4th (and Buckinghamshire) Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Somme", "Passchendaele", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Oxford", "Aylesbury", "Buckingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [2401,6000], battalion: "4th (and Buckinghamshire) Territorial Force (TF) Battalions", tf: true, date: "Sep 1914 – mid 1915", battles: ["Somme", "Passchendaele", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Oxford", "Aylesbury", "Buckingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [6001,9999], battalion: "4th (and Buckinghamshire) Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Somme", "Passchendaele", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Oxford", "Aylesbury", "Buckingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },


// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [11500, 17500], battalion: "5th–8th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Oxford", "Banbury", "Reading"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" }, { bn: 8, theatre: "East" },] },
  { range: [17501, 23000], battalion: "5th–8th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Oxford", "Banbury", "Reading"],cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" }, { bn: 8, theatre: "East" },] },
  { range: [23001, 35000], battalion: "5th–8th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Oxford", "Banbury", "Reading"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" }, { bn: 8, theatre: "East" },] },
  { range: [35501, 45000], battalion: "5th–8th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Oxford", "Banbury", "Reading"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" }, { bn: 8, theatre: "East" },] },
       
// MISC

  { range: [1, 50000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Oxford, High Wycombe) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Queen's Own Cameron Highlanders": [
  // POST-1917 TF RENUMBERING
// Note: there was a number block allocated to 4th TF bn [200001, 225000], but they were actually disbanded in 1916
// ⚠️ Yeomanry lineage — avoid duplicate if listing Lovat’s Scouts under Yeomanry
{ range: [225001, 250000], battalion: "10th (Lovat’s Scouts) Territorial Force (TF) Battalion", tf: true, date: "Sept 1916-1918" , category: "tf_renumbering", hotspot: ["Highland estates", "Scottish diaspora with hunting connections", "Cairo"], theatre: "East", },

// Regulars
  { range: [1, 9625], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Loos", "Somme"], category: "regular_prewar", hotspot: ["Inverness", "Fort William", "Nairn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
{ range: [9626, 13025], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele"], category: "regular_wartime", hotspot: ["Inverness", "Fort William", "Nairn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
 { range: [13026, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele"], category: "regular_wartime", hotspot: ["Inverness", "Fort William", "Nairn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },

 // PRE-1917 TERRITORIAL FORCE
{ range: [1,2100], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Pre-WWI – Jul 1914", battles: ["Loos", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Inverness", "Fort William", "Nairn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2101,3600], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Aug 1914 – Jun 1915", battles: ["Loos", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Inverness", "Fort William", "Nairn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3601,9999], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Jul 1915 – Dec 1916", battles: ["Loos", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Inverness", "Fort William", "Nairn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [9700, 18500], battalion: "5th–7th (Service) Battalions", date: "Aug 1914 – June 1915" , requiresPrefix: true, allowedPrefixes: ["S/", "S"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Inverness", "Fort William", "Glasgow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [18501, 22000], battalion: "5th–7th (Service) Battalions", date: "July 1915 – Dec 1915", requiresPrefix: true, allowedPrefixes: ["S/", "S"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Inverness", "Fort William", "Glasgow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [22001, 30000], battalion: "5th–7th (Service) Battalions", date: "Jan 1916 – Nov 1916", requiresPrefix: true, allowedPrefixes: ["S/", "S"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Inverness", "Fort William", "Glasgow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [30001, 43000], battalion: "5th–7th (Service) Battalions", date: "Dec 1916 – mid 1917", requiresPrefix: true, allowedPrefixes: ["S/", "S"], battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Inverness", "Fort William", "Glasgow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// MISC
  { range: [1, 50000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Inverness, Fort William) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
 
],
     
     "Queen's Own Royal West Kent Regiment": [
  // POST-1917 TF RENUMBERING FIRST
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Maidstone", "Tonbridge tradesmen", "Sevenoaks"], theatre: "India", },
{ range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Bromley", "Beckenham", "Orpington"], theatre: "India", },
// ⚠️ Kent Cyclist Battalion was treated under Royal West Kent for renumbering — avoid duplicate if listing cyclists separately
{ range: [265001, 290000], battalion: "1st Kent Cyclist Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Canterbury", "Maidstone", "Dover"], theatre: "India", },

 //Regulars
 { range: [1, 11500], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Somme", "Passchendaele", "Arras"], category: "regular_prewar", hotspot: ["Maidstone", "Gravesend", "Tunbridge Wells"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
{ range: [11501, 14900], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Maidstone", "Gravesend", "Tunbridge Wells"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },
{ range: [14901, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Maidstone", "Gravesend", "Tunbridge Wells"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "East" },] },

    // PRE-1917 TERRITORIAL FORCE
{ range: [1,1900], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", category: "tf_pre1917", hotspot: ["Maidstone", "Tonbridge tradesmen", "Bromley"], theatre: "India" },
{ range: [1901,5400], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "Sep 1914 – mid 1915", category: "tf_pre1917", hotspot: ["Maidstone", "Tonbridge tradesmen", "Bromley"], theatre: "India" },
{ range: [5401,9999], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", category: "tf_pre1917", hotspot: ["Maidstone", "Tonbridge tradesmen", "Bromley"], theatre: "India" },

// SERVICE BATTALIONS (Kitchener’s Army)
 { range: [1, 7000], battalion: "6th–8th (Service) Battalions", date: "Aug 1914 – June 1915", requiresPrefix: true, allowedPrefixes: ["G/", "G"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Maidstone", "Tunbridge Wells", "Gravesend"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [7001, 12000], battalion: "6th–8th (Service) Battalions", date: "July 1915 – Dec 1915" , requiresPrefix: true, allowedPrefixes: ["G/", "G"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Maidstone", "Tunbridge Wells", "Gravesend"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [12001, 18000], battalion: "6th–8th & 10th–11th (Service) Battalions", date: "Jan 1916 – Nov 1916" , requiresPrefix: true, allowedPrefixes: ["G/", "G"], battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Maidstone", "Tunbridge Wells", "Gravesend"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [18001, 25000], battalion: "6th–8th & 10th–11th (Service) Battalions", date: "Dec 1916 – mid 1917" , requiresPrefix: true, allowedPrefixes: ["G/", "G"], battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Maidstone", "Tunbridge Wells", "Gravesend"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
            
{ range: [1, 2500], battalion: "10th–11th (Service) Battalions", date: "May 1915 – Dec 1915" , requiresPrefix: true, allowedPrefixes: ["G/", "G"], battles: ["Hundred", "Somme", "Passchendaele", "Spring"], category: "service", hotspot: ["Maidstone", "Lewisham", "Catford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },    

// MISC

{ range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Maidstone, Tunbridge Wells) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
 
],
     
     "Queen's (Royal West Surrey Regiment)": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Croydon", "Mitcham", "Sutton"], theatre: "India", },
{ range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Guilford", "Godalming", "Farnham"], theatre: "India", },
{ range: [265001, 290000], battalion: "19th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Lowestoft", "Guilford", "Croydon"], theatre: "Home" },

  //Regulars
{ range: [1, 10641], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Loos", "Somme", "Arras"], category: "regular_prewar", hotspot: ["Guilford", "Croydon", "Kingston upon Thames"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [10642, 14041], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Guilford", "Croydon", "Kingston upon Thames"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
 { range: [14042, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Guilford", "Croydon", "Kingston upon Thames"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

    // PRE-1917 TERRITORIAL FORCE
{ range: [1,2100], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Jul 1914", category: "tf_pre1917", hotspot: ["Croydon", "Guildford", "Reigate"], theatre: "India", },
{ range: [2101,3600], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – Jun 1915", category: "tf_pre1917", hotspot: ["Croydon", "Guildford", "Reigate"], theatre: "India", },
{ range: [3601,9999], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Jul 1915 – early 1917", category: "tf_pre1917", hotspot: ["Croydon", "Guildford", "Reigate"], theatre: "India", },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [1, 5500], battalion: "6th–8th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Guilford", "Croydon", "Reigate"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [5501, 8500], battalion: "6th–8th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Guilford", "Croydon", "Reigate"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [8501, 15000], battalion: "6th–8th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Guilford", "Croydon", "Reigate"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris", "Paris"], },
{ range: [15001, 25000], battalion: "6th–8th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Guilford", "Croydon", "Reigate"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris", "Paris"], },
       
{ range: [1, 1200], battalion: "10th (Service) Battalion (Battersea Pals)", date: "June 1915 – Dec 1915" , battles: ["Spring", "Somme", "Passchendaele", "Hundred"], requiresPrefix: true, allowedPrefixes: ["10/"], category: "service", hotspot: ["Battersea", "Clapham", "Wandsworth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [1201, 2000], battalion: "10th (Service) Battalion (Battersea Pals)", date: "Jan 1916 – Nov 1916" , battles: ["Spring", "Somme", "Passchendaele", "Hundred"], requiresPrefix: true, allowedPrefixes: ["10/"], category: "service", hotspot: ["Battersea", "Clapham", "Wandsworth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris", "Paris"], },  
{ range: [2001, 3500], battalion: "10th (Service) Battalion (Battersea Pals)", date: "Dec 1916 – mid 1917" , battles: ["Spring", "Passchendaele", "Hundred"], requiresPrefix: true, allowedPrefixes: ["10/"], category: "service", hotspot: ["Battersea", "Clapham", "Wandsworth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris", "Paris"], },
       
{ range: [1, 1200], battalion: "11th (Service) Battalion (Lambeth Pals)", date: "June 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["11/"], category: "service", hotspot: ["Lambeth", "Kennington", "Brixton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [1201, 2000], battalion: "11th (Service) Battalion (Lambeth Pals)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["11/"], category: "service", hotspot: ["Lambeth", "Kennington", "Brixton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris", "Paris"], },  
{ range: [2001, 3500], battalion: "11th (Service) Battalion (Lambeth Pals)", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["11/"], category: "service", hotspot: ["Lambeth", "Kennington", "Brixton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris", "Paris"], },

// MISC
  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Croydon, Guilford) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],

     "Rifle Brigade (The Prince Consort’s Own)": [
 //Regulars
 { range: [1, 5568], battalion: "1st–4th (Regular) Battalions", date: "Pre-WWI – Aug 1914", battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_prewar", hotspot: ["South & East London", "Black Country", "Ireland"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" },] },
{ range: [5569, 8021], battalion: "1st–4th (Regular) Battalions", date: "Aug 1914 – early 1916", battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["South & East London", "Black Country", "Ireland"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" },] },
{ range: [8022, 19999], battalion: "1st–4th (Regular) Battalions", date: "1916 – 1918", battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["South & East London", "Black Country", "Ireland"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" },] },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [1, 11000], battalion: "7th–9th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["S/", "GS/"], category: "service", hotspot: ["South & East London", "South Wales Coalfields", "Winchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [22001, 28000], battalion: "7th–9th & 16th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["S/", "GS/"], category: "service", hotspot: ["South & East London", "South Wales Coalfields", "Winchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [32001, 45000], battalion: "7th–9th, 10th–13th & 16th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["S/", "GS/"], category: "service", hotspot: ["South & East London", "South Wales Coalfields", "Winchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [45001, 55500], battalion: "7th–9th, 10th–13th & 16th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["S/", "GS/"], category: "service", hotspot: ["South & East London", "South Wales Coalfields", "Winchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
{ range: [11001, 22000], battalion: "10th–13th (Service) Battalions", date: "Sep 1914 – June 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["S/", "GS/"], category: "service", hotspot: ["South & East London", "South Wales Coalfields", "Winchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [28001, 32000], battalion: "10th–13th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["S/", "GS/"], category: "service", hotspot: ["South & East London", "South Wales Coalfields", "Winchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

{ range: [1, 1100], battalion: "16th (Service) Battalion (St Pancreas)", date: "Apr 1915 – June 1915" , battles: ["Somme", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["16/"], category: "service", hotspot: ["Birmingham", "West Midlands", "Warwickshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// MISC

{ range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

// No Territorial Force battalions

],
     
     "Royal Berkshire Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 225000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Reading", "Newbury", "Abingdon"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

//Regulars
  { range: [1, 10500], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Loos", "Somme", "Hundred"], category: "regular_prewar", hotspot: ["Slough", "Wantage", "Hungerford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [10501, 13900], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Slough", "Wantage", "Hungerford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [13901, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Slough", "Wantage", "Hungerford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

   // PRE-1917 TERRITORIAL FORCE
{ range: [1,2100], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Pre-WWI – Jul 1914", battles: ["Somme", "Passchendaele", "Hundred", "Spring"], category: "tf_pre1917", hotspot: ["Reading", "Newbury", "Abingdon"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2101,3600], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Aug 1914 – Jun 1915", battles: ["Somme", "Passchendaele", "Hundred", "Spring"], category: "tf_pre1917", hotspot: ["Reading", "Newbury", "Abingdon"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3601,9999], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Jul 1915 – early 1917", battles: ["Somme", "Passchendaele", "Hundred", "Spring"], category: "tf_pre1917", hotspot: ["Reading", "Newbury", "Abingdon"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [10501, 18500], battalion: "5th–8th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Reading", "Newbury", "Vale of White Horse"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" }] },
{ range: [18501, 23000], battalion: "5th–8th (Service) Battalions", date: "July 1915 - Dec 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Reading", "Newbury", "Vale of White Horse"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" }] },
{ range: [23001, 38000], battalion: "5th–8th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Reading", "Newbury", "Vale of White Horse"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" }] },
{ range: [38001, 48000], battalion: "5th–8th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Reading", "Newbury", "Vale of White Horse"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 7, theatre: "East" }] },
       
// MISC

  { range: [1, 50000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Reading, Slough) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Royal Dublin Fusiliers": [
// Regulars
 { range: [1, 12000], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_prewar", hotspot: ["Dublin Docklands", "County Kildare", "County Wicklow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" },] },
{ range: [12001, 15400], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["Dublin Docklands", "County Kildare", "County Wicklow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" },] },
{ range: [15401, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["Dublin Docklands", "County Kildare", "County Wicklow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" },] },

 // SERVICE BATTALIONS (Kitchener’s Army)
{ range: [12001, 19000], battalion: "6th–9th (Service) Battalions", date: "Aug 1914 – Jun 1915", battles: ["Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["the Liberties", "Kingstown", "Naas"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }, { bn: 7, theatre: "East" }] },
{ range: [19001, 22500], battalion: "6th–9th (Service) Battalions", date: "July 1915 – Dec 1915", battles: ["Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["the Liberties", "Kingstown", "Naas"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }, { bn: 7, theatre: "East" }] },
{ range: [22501, 26500], battalion: "6th–9th (Service) Battalions", date: "Jan 1916 – Nov 1916", battles: ["Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["the Liberties", "Kingstown", "Naas"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }, { bn: 7, theatre: "East" }] },
{ range: [26501, 35000], battalion: "6th–10th (Service) Battalions", date: "Dec 1916 – mid 1917", battles: ["Passchendaele", "Arras"], category: "service", hotspot: ["the Liberties", "Kingstown", "Naas"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }, { bn: 7, theatre: "East" }] },
       

{ range: [1, 2800], battalion: "10th (Service) Battalion (The Dublin Commercials)", date: "Dec 1915 – June 1916", battles: ["Passchendaele", "Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["10/"], category: "service", hotspot: ["Dublin business district", "Blackrock", "Trinity College"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [2801, 5100], battalion: "10th (Service) Battalion (The Dublin Commercials)", date: "July 1916 – Dec 1916", battles: ["Passchendaele", "Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["10/"], category: "service", hotspot: ["Dublin business district", "Blackrock", "Trinity College"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

// MISC

  { range: [1, 999999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Dublin Docklands, County Kildare) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 99999], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Dublin Docklands, County Kildare) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
   { range: [1, 999999], battalion: "5rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["5/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Dublin Docklands, County Kildare) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
 { range: [1, 999999], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

// No Territorial Force battalions

],

"Royal Fusiliers (City of London Regiment)": [

//  Regulars
{ range: [1, 16125], battalion: "1st–4th (Regular) Battalions", date: "Pre-WWI – Aug 1914" , requiresPrefix: true, allowedPrefixes: ["RF/", "L/"], battles: ["Mons", "Somme", "Arras", "Hundred"], category: "regular_prewar", hotspot: ["East End", "Hornsea", "Southwark"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 3, theatre: "East" },] },
{ range: [16126, 20184], battalion: "1st–4th (Regular) Battalions", date: "Aug 1914 – early 1916", requiresPrefix: true, allowedPrefixes: ["RF/", "L/"], battles: ["Loos", "Somme", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["East End", "Hornsea", "Southwark"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 3, theatre: "East" },] },
  { range: [20185, 39999], battalion: "1st–4th (Regular) Battalions", date: "1916 – 1918", requiresPrefix: true, allowedPrefixes: ["RF/", "L/"], battles: ["Loos", "Somme", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["East End", "Hornsea", "Southwark"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 3, theatre: "East" },] },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [1, 4500], battalion: "8th-9th, 11th-13th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["City of London", "Clerkenwell", "Tottenham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4501, 8000], battalion: "8th-9th, 11th-13th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["City of London", "Clerkenwell", "Tottenham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [8001, 16000], battalion: "8th-9th, 11th-13th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["City of London", "Clerkenwell", "Tottenham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [40000, 75000], battalion: "8th-13th, 17th, 20th, 22nd-24th, 26th & 32nd (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["City of London", "Clerkenwell", "Tottenham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
{ range: [1, 1600], battalion: "10th (Service) Battalion (Stock Exchange)", date: "Aug 1914 – June 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["STK/"], category: "service", hotspot: ["City of London", "Westminster", "Surrey commuter belt"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1601, 3200], battalion: "10th (Service) Battalion (Stock Exchange)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["STK/"], category: "service", hotspot: ["City of London", "Westminster", "Surrey commuter belt"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [3201, 5100], battalion: "10th (Service) Battalion (Stock Exchange)", date: "Jan 1916 –  Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["STK/"], category: "service", hotspot: ["City of London", "Westminster", "Surrey commuter belt"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

  { range: [1, 1500], battalion: "17th (Service) Battalion (1st Empire)", date: "Aug 1914 – June 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["E/"], category: "service", hotspot: ["British Empire Committee, plus recruitment from across the Empire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1501, 3000], battalion: "17th (Service) Battalion (1st Empire)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["E/"], category: "service", hotspot: ["British Empire Committee, plus recruitment from across the Empire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [3001, 5000], battalion: "17th (Service) Battalion (1st Empire)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["E/"], category: "service", hotspot: ["British Empire Committee, plus recruitment from across the Empire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
    { range: [1, 1200], battalion: "18th-19th & 21st (Service) Battalion", date: "Aug 1914 – June 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["PS/"], category: "service", hotspot: ["Hounslow", "Holborn", "Twickenham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1201, 2500], battalion: "18th-19th & 21st (Service) Battalion", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["PS/"], category: "service", hotspot: ["Hounslow", "Holborn", "Twickenham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
    { range: [1, 1200], battalion: "20th (Service) Battalion (1st Public Schools)", date: "Aug 1914 – June 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["PS/"], category: "service", hotspot: ["London", "Epsom", "Also recruited nationally"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1201, 2500], battalion: "20th (Service) Battalion (1st Public Schools)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["PS/"], category: "service", hotspot: ["London", "Epsom", "Also recruited nationally"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [2501, 4000], battalion: "20th (Service) Battalion (1st Public Schools)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["PS/"], category: "service", hotspot: ["London", "Epsom", "Also recruited nationally"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
  { range: [1, 1500], battalion: "22th (Service) Battalion (3rd Public Schools)", date: "Aug 1914 – June 1915" , battles: ["Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["K/"], category: "service", hotspot: ["London", "Epsom", "Also recruited nationally"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1501, 3500], battalion: "22th (Service) Battalion (3rd Public Schools)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["K/"], category: "service", hotspot: ["London", "Epsom", "Also recruited nationally"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [3501, 5500], battalion: "22th (Service) Battalion (3rd Public Schools)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["K/"], category: "service", hotspot: ["London", "Epsom", "Also recruited nationally"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
  { range: [1, 2000], battalion: "23rd (Service) Battalion (4th Public Schools)", date: "Aug 1914 – June 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["SPTS/"], category: "service", hotspot: ["London", "Home counties", "Also recruited nationally"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [2001, 4000], battalion: "23rd (Service) Battalion (4th Public Schools)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["SPTS/"], category: "service", hotspot: ["London", "Home counties", "Also recruited nationally"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [4001, 6000], battalion: "23rd (Service) Battalion (4th Public Schools)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["SPTS/"], category: "service", hotspot: ["London", "Home counties", "Also recruited nationally"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
  { range: [1, 2000], battalion: "24th (Service) Battalion (1st Sportsmen)", date: "Nov 1914 – June 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["SPTS/"], category: "service", hotspot: ["London", "National", "Empire wide"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [2001, 4000], battalion: "24th (Service) Battalion (1st Sportsmen)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["SPTS/"], category: "service", hotspot: ["London", "National", "Empire wide"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [4001, 6000], battalion: "24th (Service) Battalion (1st Sportsmen)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["SPTS/"], category: "service", hotspot: ["London", "National", "Empire wide"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
    { range: [1, 1200], battalion: "25th (Service) Battalion (Frontiersmen)", date: "Feb 1915 – June 1915" , theatre: ["east africa"], requiresPrefix: true, allowedPrefixes: ["F/"], category: "service", hotspot: ["Hounslow", "Holborn", "Twickenham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1201, 1500], battalion: "25th (Service) Battalion (Frontiersmen)", date: "July 1915 – Dec 1915" , theatre: ["east africa"], requiresPrefix: true, allowedPrefixes: ["F/"], category: "service", hotspot: ["Hounslow", "Holborn", "Twickenham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1501, 1800], battalion: "25th (Service) Battalion (Frontiersmen)", date: "Jan 1916 – Nov 1916" , theatre: ["east africa"], requiresPrefix: true, allowedPrefixes: ["F/"], category: "service", hotspot: ["Hounslow", "Holborn", "Twickenham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
  { range: [1, 2200], battalion: "26th (Service) Battalion (Bankers)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Hundred"], requiresPrefix: true, allowedPrefixes: ["BKS/"], category: "service", hotspot: ["City of London", "Westminster", "Surrey/Middlesex suburbs"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [2201, 3500], battalion: "26th (Service) Battalion (Bankers)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Hundred"], requiresPrefix: true, allowedPrefixes: ["BKS/"], category: "service", hotspot: ["City of London", "Westminster", "Surrey/Middlesex suburbs"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
  { range: [1001, 1500], battalion: "32nd (Service) Battalion (East Ham Pals)", date: "Oct 1915 – Jan 1916" , battles: ["Somme", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["GS/"], category: "service", hotspot: ["East Ham", "West Ham", "Barking"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1501, 3500], battalion: "32nd (Service) Battalion (East Ham Pals)", date: "Feb 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["GS/"], category: "service", hotspot: ["East Ham", "West Ham", "Barking"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
  // MISC

  { range: [1, 100000], battalion: "5th (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["5/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (East End, Hornsea) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 100000], battalion: "6th (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["6/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (East End, Hornsea) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 100000], battalion: "7th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["7/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (East End, Hornsea) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
 { range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

// No Territorial Force battalions

],
     
     "Royal Irish Fusiliers": [
  // Regulars
 { range: [1, 11500], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_prewar", hotspot: ["County Armagh", "County Cavan", "County Louth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [11501, 14900], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["County Armagh", "County Cavan", "County Louth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [14901, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["County Armagh", "County Cavan", "County Louth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [11500, 13000], battalion: "5th–9th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Somme", "Passchendaele", "Spring"], category: "service", hotspot: ["Portadown", "Lurgan", "Newry"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }, { bn: 6, theatre: "East" }] },
{ range: [13001, 17500], battalion: "5th–9th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring"], category: "service", hotspot: ["Portadown", "Lurgan", "Newry"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }, { bn: 6, theatre: "East" }] },
{ range: [17501, 26000], battalion: "5th–9th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring"], category: "service",hotspot: ["Portadown", "Lurgan", "Newry"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }, { bn: 6, theatre: "East" }] },
{ range: [26001, 40000], battalion: "5th–9th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Spring"], category: "service", hotspot: ["Portadown", "Lurgan", "Newry"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }, { bn: 6, theatre: "East" }] },

// MISC

  { range: [1, 100000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (County Armagh, County Cavan) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 99999], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (County Armagh, County Cavan) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 200000], battalion: "Garrison Battalions", date: "1915 – 1918", requiresPrefix: true, allowedPrefixes: ["G/"] , category: "misc", hotspot: "County Armagh, County Cavan", theatre: "Home", },
{ range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

// No Territorial Force battalions

],
     
     "Royal Irish Regiment": [
  // Regulars
{ range: [1, 10915], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Somme", "Passchendaele", "Hundred"], category: "regular_prewar", hotspot: ["Clonmel", "Waterford", "Kilkenny"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" },] },
{ range: [10916, 14315], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Somme", "Passchendaele", "Spring", "Hundred"], category: "regular_wartime", hotspot: ["Clonmel", "Waterford", "Kilkenny"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" },] },
{ range: [14316, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Spring", "Hundred"], category: "regular_wartime", hotspot: ["Clonmel", "Waterford", "Kilkenny"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" },] },

// SERVICE BATTALIONS (Kitchener’s Army)
 { range: [1, 4000], battalion: "5th–6th (Service) Battalions", date: "Aug 1914 – June 1915", battles: ["Somme", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["5/", "6/"], category: "service", hotspot: ["Carrick on Suir", "Dungarvan", "Wexford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }] },
{ range: [4001, 7500], battalion: "5th–6th (Service) Battalions", date: "July 1915 – Dec 1915", battles: ["Somme", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["5/", "6/"], category: "service", hotspot: ["Carrick on Suir", "Dungarvan", "Wexford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }] },
{ range: [7501, 11000], battalion: "5th–6th (Service) Battalions", date: "Jan 1916 – Nov 1916", battles: ["Somme", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["5/", "6/"], category: "service", hotspot: ["Carrick on Suir", "Dungarvan", "Wexford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }] },
{ range: [25000, 29000], battalion: "5th–6th (Service) Battalions", date: "Dec 1916 – mid 1917", battles: ["Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Carrick on Suir", "Dungarvan", "Wexford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }] },

// MISC
 
  { range: [1, 50000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Clonmel, Waterford) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 99999], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Clonmel, Waterford) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 400000], battalion: "Training Reserve", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

// No Territorial Force battalions

],
     
     "Royal Irish Rifles": [
//Regulars
  { range: [1, 10500], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Loos", "Somme", "Hundred"], category: "regular_prewar", hotspot: ["Belfast", "Newry", "Portadown"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [10501, 13900], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Belfast", "Newry", "Portadown"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
 { range: [13901, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Belfast", "Newry", "Portadown"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [10501, 11500], battalion: "6th–16th (Service) Battalions", date: "Aug 1914 - Oct 1914" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Shankill", "Falls", "Lisburn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }] },
       
{ range: [11501, 14500], battalion: "6th–7th (Service) Battalions", date: "Nov 1914 - June 1915" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Shankill", "Falls", "Lisburn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }] },
{ range: [14501, 17000], battalion: "6th–7th (Service) Battalions", date: "July 1915 - Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Shankill", "Falls", "Lisburn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }] },
 { range: [17001, 20000], battalion: "6th–7th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Shankill", "Falls", "Lisburn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }] },
 { range: [20001, 45000], battalion: "6th–16th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "service", hotspot: ["Shankill", "Falls", "Lisburn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }] },
       
 { range: [1, 3500], battalion: "8th–16th (Service) Battalions", date: "Nov 1914 - June 1915" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Shankill", "Falls", "Lisburn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [3501, 6000], battalion: "8th–16th (Service) Battalions", date: "July 1915 - Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Shankill", "Falls", "Lisburn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
 { range: [6001, 9500], battalion: "8th–16th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Shankill", "Falls", "Lisburn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

// MISC

  { range: [1, 60000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Belfast, Newry) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 99999], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Belfast, Newry) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },  
  { range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

// No Territorial Force battalions

],

"Royal Inniskilling Fusiliers": [
// Regulars
{ range: [1, 10750], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_prewar", hotspot: ["County Tyrone", "Enniskillen", "Letterkenny"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [10751, 14150], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["County Tyrone", "Enniskillen", "Letterkenny"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [14151, 20000], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["County Tyrone", "Enniskillen", "Letterkenny"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

  // New Army Service battalions
{ range: [10750, 16500], battalion: "5th–8th (Service) Battalions", date: "Aug 1914 - June 1915" , battles: ["Somme", "Passchendaele", "Hundred"], category: "service", hotspot: ["Omagh", "Enniskillen", "Strabane"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }, { bn: 6, theatre: "East" }] },
{ range: [16501, 21000], battalion: "5th–8th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Hundred"], category: "service", hotspot: ["Omagh", "Enniskillen", "Strabane"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }, { bn: 6, theatre: "East" }] },
{ range: [21001, 28000], battalion: "5th–8th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Hundred"], category: "service", hotspot: ["Omagh", "Enniskillen", "Strabane"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }, { bn: 6, theatre: "East" }] },
{ range: [40000, 45000], battalion: "5th–11th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Somme", "Passchendaele", "Hundred"], requiresPrefix: true, allowedPrefixes: ["GS/"], category: "service", hotspot: ["Omagh", "Enniskillen", "Strabane"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }, { bn: 6, theatre: "East" }] },
  
{ range: [1, 1800], battalion: "9th (Service) Battalion (Tyrone Volunteers)", date: "Sep 1914 - June 1915" , battles: ["Somme", "Passchendaele", "Spring", "Hundred"], requiresPrefix: true, allowedPrefixes: ["9/"], category: "service", hotspot: ["Omagh", "Dungannon", "Strabane"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [1801, 3500], battalion: "9th (Service) Battalion (Tyrone Volunteers)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring", "Hundred"], requiresPrefix: true, allowedPrefixes: ["9/"], category: "service", hotspot: ["Omagh", "Dungannon", "Strabane"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [3501, 5000], battalion: "9th (Service) Battalion (Tyrone Volunteers)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Hundred"], requiresPrefix: true, allowedPrefixes: ["9/"], category: "service", hotspot: ["Omagh", "Dungannon", "Strabane"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
  
{ range: [1, 1500], battalion: "10th (Service) Battalion (Derry Volunteers)", date: "Sep 1914 - June 1915" , battles: ["Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["10/"], category: "service", hotspot: ["Londonderry", "Coleraine", "Limavady"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [1501, 3200], battalion: "10th (Service) Battalion (Derry Volunteers)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["10/"], category: "service", hotspot: ["Londonderry", "Coleraine", "Limavady"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [3201, 4800], battalion: "10th (Service) Battalion (Derry Volunteers)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["10/"], category: "service", hotspot: ["Londonderry", "Coleraine", "Limavady"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
  
  { range: [1, 1200], battalion: "11th (Service) Battalion (Donegal and Fermanagh Volunteers)", date: "Sep 1914 - June 1915" , battles: ["Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["11/"], category: "service", hotspot: ["Donegal", "Enniskillen", "Londonderry"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [1201, 3000], battalion: "11th (Service) Battalion (Donegal and Fermanagh Volunteers)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["11/"], category: "service", hotspot: ["Donegal", "Enniskillen", "Londonderry"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [3001, 4500], battalion: "11th (Service) Battalion (Donegal and Fermanagh Volunteers)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["11/"], category: "service", hotspot: ["Donegal", "Enniskillen", "Londonderry"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
  

// MISC
  { range: [1, 60000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (County Tyrone, Enniskillen) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 99999], battalion: "4th ( Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (County Tyrone, Enniskillen) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

// No Territorial Force battalions

],
     
     "Royal Munster Fusiliers": [
  // Regulars
 { range: [1, 10200], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Mons", "Somme", "Passchendaele", "Hundred"], category: "regular_prewar", hotspot: ["Tralee", "Killarney", "Cork City"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [10201, 14450], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Loos", "Somme", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Tralee", "Killarney", "Cork City"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [14451, 25000], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Tralee", "Killarney", "Cork City"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [1, 4500], battalion: "6th-9th (Service) Battalion", date: "Aug 1914 – June 1915", requiresPrefix: true, allowedPrefixes: ["S/"], category: "service", battles: ["Somme", "Passchendaele"], category: "service", hotspot: ["Fermoy", "Midleton", "Cobh"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }, { bn: 7, theatre: "East" }] },
{ range: [4501, 9000], battalion: "6th-9th (Service) Battalion", date: "July 1915 – Dec 1915", requiresPrefix: true, allowedPrefixes: ["S/"], category: "service", battles: ["Somme", "Passchendaele"], category: "service", hotspot: ["Fermoy", "Midleton", "Cobh"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }, { bn: 7, theatre: "East" }] },
{ range: [9001, 12000], battalion: "6th-9th (Service) Battalion", date: "Jan 1916 – Nov 1916", requiresPrefix: true, allowedPrefixes: ["S/"], category: "service", battles: ["Somme", "Passchendaele"], category: "service", hotspot: ["Fermoy", "Midleton", "Cobh"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }, { bn: 7, theatre: "East" }] },
{ range: [12001, 24000], battalion: "6th-9th (Service) Battalion", date: "Dec 1916 – mid 1917", requiresPrefix: true, allowedPrefixes: ["S/"], category: "service", battles: ["Somme", "Passchendaele"], category: "service", hotspot: ["Fermoy", "Midleton", "Cobh"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }, { bn: 7, theatre: "East" }] },

// MISC

  { range: [1, 60000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Tralee, Cork City) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 60000], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", battles: ["Spring", "Somme", "Loos", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: ["Tralee", "Killarney", "Cork City"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [1, 60000], battalion: "5th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["5/"], category: "misc", hotspot: ["Tralee", "Killarney", "Cork City"], theatre: "East", },
{ range: [1, 400000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

// No Territorial Force battalions 

],
     
     "Royal Scots": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th (Queen’s Edinburgh Rifles) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Edinburgh", "Leith", "Dalkeith"], theatre: "East" },
{ range: [240001, 275000], battalion: "5th (Queen’s Edinburgh Rifles) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Spring", "Hundred", "Somme"], category: "tf_renumbering", hotspot: ["Dalkeith", "Bonnyrigg", "Loanhead"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [275001, 300000], battalion: "6th Territorial Force (TF) Battalion", tf: true,  date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Leith", "Newhaven", "Granton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [300001, 325000], battalion: "7th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["East"], category: "tf_renumbering", hotspot: ["Leith", "Broughton", "Canonmills"], },
{ range: [325001, 350000], battalion: "8th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Haddington", "Dunbar", "Tranent"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [350001, 375000], battalion: "9th (Highlanders) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras"], category: "tf_renumbering", hotspot: ["Linlithgow", "Bathgate", "Broxburn"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [375001, 400000], battalion: "10th (Lothian Cyclist) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Morningside", "Liberton", "Dalkeith"], theatre: "Home", },

 // Regulars
{ range: [1, 12000], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Somme", "Passchendaele", "Arras"], category: "regular_prewar", hotspot: ["Leith", "Canongate", "Gorgie"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [12001, 15400], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Leith", "Canongate", "Gorgie"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [15401, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Leith", "Canongate", "Gorgie"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
// PRE-1917 TERRITORIAL FORCE
{ range: [1,2000], battalion: "4th–9th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Passchendaele", "Spring", "Somme", "Hundred"], category: "tf_pre1917", hotspot: ["Edinburgh", "Dalkeith", "Leith"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" }, {bn: 7, theatre: "East"},] },
{ range: [2001,6000], battalion: "4th–9th Territorial Force (TF) Battalions", tf: true, date: "Sep 1914 – mid 1915", battles: ["Passchendaele", "Spring", "Somme", "Hundred"], category: "tf_pre1917", hotspot: ["Edinburgh", "Dalkeith", "Leith"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" }, {bn: 7, theatre: "East"},] },
{ range: [6001,9999], battalion: "4th–9th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Passchendaele", "Spring", "Somme", "Hundred"], category: "tf_pre1917", hotspot: ["Edinburgh", "Dalkeith", "Leith"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" }, {bn: 7, theatre: "East"},] },
  
// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [12000, 19500], battalion: "11th–13th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Leith", "Canongate", "Dalkeith"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [19501, 24000], battalion: "11th–13th (Service) Battalions", date: "July 1915 - Dec 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Leith", "Canongate", "Dalkeith"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [24001, 35000], battalion: "11th–13th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Leith", "Canongate", "Dalkeith"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [35001, 45000], battalion: "11th–13th & 15th-17th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Leith", "Canongate", "Dalkeith"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
{ range: [1, 2000], battalion: "15th (Service) Battalion (1st City of Edinburgh)", date: "Sep 1914 – June 1915" , battles: ["Spring", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["15/"], category: "service", hotspot: ["Edinburgh", "The Lothians", "Manchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2001, 4000], battalion: "15th (Service) Battalion (1st City of Edinburgh)", date: "July 1915 - Dec 1915" , battles: ["Spring", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["15/"], category: "service", hotspot: ["Edinburgh", "The Lothians", "Manchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4001, 5500], battalion: "15th (Service) Battalion (1st City of Edinburgh)", date: "Jan 1916 – Nov 1916" , battles: ["Spring", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["15/"], category: "service", hotspot: ["Edinburgh", "The Lothians", "Manchester"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
{ range: [1, 1500], battalion: "16th (Service) Battalion (McCrae’s Battalion)", date: "Dec 1914 – June 1915" , battles: ["Spring", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["16/"], category: "service", hotspot: ["Edinburgh", "The Lothians", "Fife"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [1501, 3500], battalion: "16th (Service) Battalion (McCrae’s Battalion)", date: "July 1915 - Dec 1915" , battles: ["Spring", "Somme", "Passchendaele", "Arras"], requiresPrefix: true, allowedPrefixes: ["16/"], category: "service", hotspot: ["Edinburgh", "The Lothians", "Fife"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3501, 5000], battalion: "16th (Service) Battalion (McCrae’s Battalion)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["16/"], category: "service", hotspot: ["Edinburgh", "The Lothians", "Fife"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },      
       
 { range: [1, 1100], battalion: "17th (Service) Battalion (Bantams)", date: "Feb 1915 – June 1915" , battles: ["Hundred", "Somme", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["17/"], category: "service", hotspot: ["Edinburgh", "Glasgow", "The Lothians"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [1101, 2500], battalion: "17th (Service) Battalion (Bantams)", date: "July 1915 - Dec 1915" , battles: ["Hundred", "Somme", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["17/"], category: "service", hotspot: ["Edinburgh", "Glasgow", "The Lothians"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2501, 4000], battalion: "17th (Service) Battalion (Bantams)", date: "Jan 1916 – Nov 1916" , battles: ["Hundred", "Somme", "Passchendaele", "Spring"], requiresPrefix: true, allowedPrefixes: ["17/"], category: "service", hotspot: ["Edinburgh", "Glasgow", "The Lothians"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },        

// MISC

  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Leith, Canongate) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 76000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Royal Scots Fusiliers": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["East"], category: "tf_renumbering", hotspot: ["Ayr", "Prestwick", "Kilmarnock"], },
{ range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["East"], category: "tf_renumbering", hotspot: ["Kilmarnock", "Darvel", "mining districts"], },
{ range: [265001, 290000], battalion: "11th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Ayr", "Kilmarnock", "Irvine Valley"], theatre: "Home", },
// ⚠️ 12th originated from Ayrshire & Lanarkshire Yeomanry — avoid duplicates if Yeomanry blocks are listed separately
{ range: [290001, 300000], battalion: "12th (Ayr and Lanark Yeomanry) Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918", category: "tf_renumbering", hotspot: ["Kilmarnock", "Irvine Valley", "Paisley"], theatre: "East", },

 //Regulars
{ range: [1, 11000], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Loos", "Somme", "Arras"], category: "regular_prewar", hotspot: ["Ayr", "Kilmarnock", "Glasgow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [11001, 14400], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Ayr", "Kilmarnock", "Glasgow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [14401, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Ayr", "Kilmarnock", "Glasgow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

  // PRE-1917 TERRITORIAL FORCE
{ range: [1,2100], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Jul 1914", theatre: ["East"], category: "tf_pre1917", hotspot: ["Ayr", "Kilmarnock", "Mining Districts"], },
{ range: [2101,3600], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – Jun 1915", theatre: ["East"], category: "tf_pre1917", hotspot: ["Ayr", "Kilmarnock", "Mining Districts"], },
{ range: [3601,9999], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Jul 1915 – early 1917", theatre: ["East"], category: "tf_pre1917", hotspot: ["Ayr", "Kilmarnock", "Mining Districts"], },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [11000, 16500], battalion: "6th–8th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["S/"], category: "service", hotspot: ["Ayr", "Kilmarnock", "Glasgow southside"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }] },
{ range: [16501, 22000], battalion: "6th–8th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["S/"], category: "service", hotspot: ["Ayr", "Kilmarnock", "Glasgow southside"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }] }, 
{ range: [22001, 35000], battalion: "6th–8th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["S/"], category: "service", hotspot: ["Ayr", "Kilmarnock", "Glasgow southside"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }] },
{ range: [35001, 46000], battalion: "6th–8th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["S/"], category: "service", hotspot: ["Ayr", "Kilmarnock", "Glasgow southside"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }] },

// MISC

  { range: [1, 200000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Ayr, Kilmarnock) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 20000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Royal Sussex Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["East"], category: "tf_renumbering", hotspot: ["Billinghurst", "Pulborough", "Horsham"], },
{ range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Spring", "Passchendaele"], category: "tf_renumbering", hotspot: ["Hastings", "St Leonards", "Rye"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 290000], battalion: "6th (Cyclist) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Brighton", "Worthing", "Chichester"], theatre: "Home", },
{ range: [290001, 315000], battalion: "15th Battalion Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Brighton", "Hove", "Newhaven"], theatre: "Home", },
// ⚠️ Originated from Sussex Yeomanry — avoid duplicate if Yeomanry blocks are listed separately
{ range: [315001, 325000], battalion: "16th (Sussex Yeomanry) Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Brighton", "Hove", "Lewes"], theatre: "East", },

 // Regulars
  { range: [1, 10300], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Mons", "Loos", "Somme"], category: "regular_prewar", hotspot: ["Chichester", "Arundel", "Brighton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "India" }] },
{ range: [10301, 14500], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele"], category: "regular_wartime", cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "India" }] },
 { range: [14501, 25000], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Passchendaele"], category: "regular_wartime", cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "India" }] },

 // PRE-1917 TERRITORIAL FORCE
{ range: [1,2000], battalion: "4th-6th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Jul 1914", battles: ["Somme", "Spring", "Passchendaele"], category: "tf_pre1917", hotspot: ["Rye", "Hove", "Brighton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" }, { bn: 6, theatre: "Home"}] },
{ range: [2001,3500], battalion: "4th-6th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – Jun 1915", battles: ["Somme", "Spring", "Passchendaele"], category: "tf_pre1917", hotspot: ["Rye", "Hove", "Brighton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" }, { bn: 6, theatre: "Home"}] },
{ range: [3501,5500], battalion: "4th-6th Territorial Force (TF) Battalions", tf: true, date: "Jul 1915 – Feb 1917", battles: ["Somme", "Spring", "Passchendaele"], category: "tf_pre1917", hotspot: ["Rye", "Hove", "Brighton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" }, { bn: 6, theatre: "Home"}] },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [1, 7000], battalion: "7th–9th (Service) Battalions", date: "Aug 1914 – June 1915", requiresPrefix: true, allowedPrefixes: ["G/", "GS/"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Chichester", "Arundel", "Worthing"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [7001, 8500], battalion: "7th–9th (Service) Battalions", date: "July 1915 – Dec 1915", requiresPrefix: true, allowedPrefixes: ["G/", "GS/"], battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Chichester", "Arundel", "Worthing"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [8501, 14500], battalion: "7th–9th (Service) Battalions", date: "Jan 1916 – Nov 1916", requiresPrefix: true, allowedPrefixes: ["G/", "GS/"], battles: ["Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Chichester", "Arundel", "Worthing"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [14501, 16500], battalion: "7th–9th & 11th-13th (Service) Battalions", date: "Dec 1916 – mid 1917", requiresPrefix: true, allowedPrefixes: ["G/", "GS/"], battles: [ "Passchendaele", "Arras"], category: "service", hotspot: ["Chichester", "Arundel", "Worthing"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
{ range: [1, 4500], battalion: "11th–13th (Service) Battalions", date: "Aug 1914 – June 1915", requiresPrefix: true, allowedPrefixes: ["SD/"], battles: ["Somme", "Passchendaele", "Spring"], category: "service", hotspot: ["Lewes", "Eastbourne", "Hastings"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4501, 5500], battalion: "11th–13th (Service) Battalions", date: "July 1915 – Dec 1915", requiresPrefix: true, allowedPrefixes: ["SD/"], battles: ["Somme", "Passchendaele", "Spring"], category: "service", hotspot: ["Lewes", "Eastbourne", "Hastings"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [5501, 6500], battalion: "11th–13th (Service) Battalions", date: "Jan 1916 – Nov 1916", requiresPrefix: true, allowedPrefixes: ["SD/"], battles: ["Somme", "Passchendaele", "Spring"], category: "service", hotspot: ["Lewes", "Eastbourne", "Hastings"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// MISC

  { range: [1, 200000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Lewes, Eastbourne) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [8001, 36000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],

     "Royal Warwickshire Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Digbeth", "Aston", "Small Heath"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "6th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Erdington", "Coventry", "Handsworth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 305000], battalion: "7th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Coventry", "Rugby", "the motor works factories"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [305001, 330000], battalion: "8th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring"], category: "tf_renumbering", hotspot: ["Small Heath", "Sparkbrook", "Bordesley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [330001, 355000], battalion: "18th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Digbeth", "Aston", "Ladywood"], theatre: "Home", },

// Regulars
{ range: [1, 1999], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_prewar", hotspot: ["Birmingham industrial districts", "Coventry", "Leamington Spa"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2000, 3359], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Birmingham industrial districts", "Coventry", "Leamington Spa"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3360, 9999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Birmingham industrial districts", "Coventry", "Leamington Spa"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
    // PRE-1917 TERRITORIAL FORCE
{ range: [1,2300], battalion: "5th–8th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Somme", "Passchendaele", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Small Heath", "Aston", "Digbeth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [2301,5800], battalion: "5th–8th Territorial Force (TF) Battalions", tf: true, date: "Sep 1914 – mid 1915", battles: ["Somme", "Passchendaele", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Small Heath", "Aston", "Digbeth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [5801,9999], battalion: "5th–8th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Somme", "Passchendaele", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Small Heath", "Aston", "Digbeth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

  // SERVICE BATTALIONS (Kitchener’s Army)
{ range: [2300, 9500], battalion: "9th–11th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Birmingham industrial districts", "Coventry", "Rugby"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 9, theatre: "East" }] },
{ range: [9501, 13000], battalion: "9th–11th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Birmingham industrial districts", "Coventry", "Rugby"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 9, theatre: "East" }] },
{ range: [13001, 21000], battalion: "9th–11th (Service) Battalions", date: "Jan 1916- Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Birmingham industrial districts", "Coventry", "Rugby"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 9, theatre: "East" }] },
 { range: [21001, 30000], battalion: "9th–11th & 14th-16th (Service) Battalions", date: "Dec 1916 - mid 1917" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], requiresPrefix: true, allowedPrefixes: ["G/"], category: "service", hotspot: ["Birmingham industrial districts", "Coventry", "Rugby"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 9, theatre: "East" }] },      
       
{ range: [1, 3500], battalion: "14th-16th (Service) Battalions", date: "Aug 1914 – June 1915" , requiresPrefix: true, allowedPrefixes: ["W/"], battles: ["Somme", "Passchendaele", "Spring", "Hundred"], category: "service", hotspot: ["Digbeth", "Aston", "Ladywood"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3501, 4800], battalion: "14th-16th (Service) Battalions", date: "July 1915 – Dec 1915" , requiresPrefix: true, allowedPrefixes: ["W/"], battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Digbeth", "Aston", "Ladywood"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4801, 5500], battalion: "14th-16th (Service) Battalions", date: "Jan 1916 – Nov 1916" , requiresPrefix: true, allowedPrefixes: ["W/"], battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Digbeth", "Aston", "Ladywood"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

  // MISC

  { range: [1, 200000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Digbeth, Aston) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 200000], battalion: "4th (Extra Reserve) Battalion", date: "pre-WWI – 1917", requiresPrefix: true, allowedPrefixes: ["4/"] , battles: ["Loos", "Somme", "Arras", "Passchendaele"], category: "misc", hotspot: ["Digbeth", "Aston", "Ladywood"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [1, 16000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Royal Welch Fusiliers": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th (Denbighshire) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Anglesey", "Caernarfon", "Holyhead"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "5th (Flintshire) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Flint", "Holywell", "Mold"], theatre: "East", },
{ range: [265001, 290000], battalion: "6th (Carnarvonshire and Anglesey) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Denbigh", "Ruthin", "Colwyn Bay"], theatre: "East", },
{ range: [290001, 315000], battalion: "7th (Merioneth and Montgomery) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Caernarfon", "Bangor", "slate quarry communities"], theatre: "East", },
{ range: [315001, 340000], battalion: "23rd Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Wrexham", "Mold", "Denbighshire coalfield towns"], theatre: "Home", },
// ⚠️ Yeomanry origin — avoid duplicates if Yeomanry blocks are listed separately
{ range: [340001, 350000], battalion: "24th (Denbighshire Yeomanry) Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Wrexham", "Denbighshire coalfield towns", "Flintshire industrial belt"], theatre: "East", },
// ⚠️ Yeomanry origin — avoid duplicates if Yeomanry blocks are listed separately
{ range: [350001, 360000], battalion: "25th (Montgomeryshire and Welsh Horse Yeomanry) Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Welshpool", "Oswestry", "Newtown"], theatre: "Home", },

//Regulars
  { range: [1, 11450], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Loos", "Somme", "Arras"], category: "regular_prewar", hotspot: ["Wrexham", "Caernarfon", "Montgomeryshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [11451, 15700], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime",hotspot: ["Wrexham", "Caernarfon", "Montgomeryshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [15701, 25000], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Arras"], category: "regular_wartime",hotspot: ["Wrexham", "Caernarfon", "Montgomeryshire"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

    // PRE-1917 TERRITORIAL FORCE
{ range: [1,1600], battalion: "4th–7th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Spring", "Hundred", "Somme"], category: "tf_pre1917", hotspot: ["Denbighshire coalfield towns", "Flintshire industrial belt", "Wrexham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }, { bn: 6, theatre: "East"}, { bn: 7, theatre: "East"}] },
{ range: [1601,5000], battalion: "4th–7th Territorial Force (TF) Battalions", tf: true, date: "Sep 1914 – mid 1915", battles: ["Spring", "Hundred", "Somme"], category: "tf_pre1917", hotspot: ["Denbighshire coalfield towns", "Flintshire industrial belt", "Wrexham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }, { bn: 6, theatre: "East"}, { bn: 7, theatre: "East"}] },
{ range: [5001,9999], battalion: "4th–7th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Spring", "Hundred", "Somme"], category: "tf_pre1917", hotspot: ["Denbighshire coalfield towns", "Flintshire industrial belt", "Wrexham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }, { bn: 6, theatre: "East"}, { bn: 7, theatre: "East"}] },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [11451, 21000], battalion: "8th–11th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Hundred"], category: "service", hotspot: ["Denbighshire coalfield towns", "Flintshire industrial belt", "Wrexham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }, { bn: 11, theatre: "East" }] },
 { range: [21001, 28000], battalion: "8th–11th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Hundred"], category: "service", hotspot: ["Denbighshire coalfield towns", "Flintshire industrial belt", "Wrexham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }, { bn: 11, theatre: "East" }] },      
 { range: [28001, 45000], battalion: "8th–11th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Hundred"], category: "service", hotspot: ["Denbighshire coalfield towns", "Flintshire industrial belt", "Wrexham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }, { bn: 11, theatre: "East" }] },      
 { range: [45001, 60000], battalion: "8th–11th, 13th–17th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Hundred"], category: "service", hotspot: ["Denbighshire coalfield towns", "Flintshire industrial belt", "Wrexham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }, { bn: 11, theatre: "East" }] },      
       
 { range: [1, 6000], battalion: "13th–14th & 16th-17th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Hundred"], requiresPrefix: true, allowedPrefixes: ["W/"], category: "service", hotspot: ["Denbighshire coalfield towns", "Flintshire industrial belt", "Wrexham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
 { range: [22000, 36000], battalion: "13th–14th & 16th-17th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Hundred"], requiresPrefix: true, allowedPrefixes: ["W/"], category: "service", hotspot: ["Denbighshire coalfield towns", "Flintshire industrial belt", "Wrexham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },     
 { range: [36001, 55000], battalion: "13th–14th & 16th-17th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Hundred"], requiresPrefix: true, allowedPrefixes: ["W/"], category: "service", hotspot: ["Denbighshire coalfield towns", "Flintshire industrial belt", "Wrexham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },        
           
 { range: [1, 2500], battalion: "15th (Service) Battalion (1st London Welsh)", date: "Oct 1914 – June 1915" , battles: ["Passchendaele", "Somme", "Hundred", "Spring"], requiresPrefix: true, allowedPrefixes: ["15/", "LW/"], category: "service", hotspot: ["London", "North Wales", "Wrexham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
 { range: [2501, 4500], battalion: "15th (Service) Battalion (1st London Welsh)", date: "July 1915 – Dec 1915" , battles: ["Passchendaele", "Somme", "Hundred", "Spring"], requiresPrefix: true, allowedPrefixes: ["15/", "LW/"], category: "service", hotspot: ["London", "North Wales", "Wrexham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },     
 { range: [4501, 6000], battalion: "15th (Service) Battalion (1st London Welsh)", date: "Jan 1916 – Nov 1916" , battles: ["Passchendaele", "Somme", "Hundred", "Spring"], requiresPrefix: true, allowedPrefixes: ["15/", "LW/"], category: "service", hotspot: ["London", "North Wales", "Wrexham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },       

//MISC

  { range: [1, 200000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Wrexham, Caernarfon) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [20001, 32000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
  
],
     
     "Seaforth Highlanders": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th (Ross Highland) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Dingwall", "Invergordon", "Alness"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "5th (The Sutherland and Caithness) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Golspie", "Brora", "Dornoch"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 290000], battalion: "6th (Morayshire) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Elgin", "Lossiemouth", "Forres"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// Regulars
{ range: [1, 1435], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_prewar", hotspot: ["Fort George", "Inverness", "Beauly"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" }] },
{ range: [1436, 3134], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Fort George", "Inverness", "Beauly"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" }] },
{ range: [3135, 9999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Fort George", "Inverness", "Beauly"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" }] },

  // PRE-1917 TERRITORIAL FORCE
{ range: [1,2100], battalion: "4th-6th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Jul 1914", battles: ["Loos", "Somme", "Spring", "Passchendaele"], category: "tf_pre1917", hotspot: ["Dingwall", "Golspie", "Elgin"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2101,3600], battalion: "4th-6th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – Jun 1915", battles: ["Loos", "Somme", "Spring", "Passchendaele"], category: "tf_pre1917", hotspot: ["Dingwall", "Golspie", "Elgin"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3601,9999], battalion: "4th-6th Territorial Force (TF) Battalions", tf: true, date: "Jul 1915 – early 1917", battles: ["Loos", "Somme", "Spring", "Passchendaele"], category: "tf_pre1917", hotspot: ["Dingwall", "Golspie", "Elgin"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// SERVICE BATTALIONS (Kitchener’s Army)
  { range: [1500, 9000], battalion: "7th-9th (Service) Battalions", date: "Aug 1914 - June 1915", requiresPrefix: true, allowedPrefixes: ["S/"], battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "service", hotspot: ["Inverness", "Fort George", "Beauly"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [9001, 11500], battalion: "7th-9th (Service) Battalions", date: "July 1915 - Dec 1915" , requiresPrefix: true, allowedPrefixes: ["S/"], battles: ["Loos", "Somme", "Passchendaele", "Spring"], category: "service", hotspot: ["Inverness", "Nairn", "Forres"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [11501, 16000], battalion: "7th-9th (Service) Battalions", date: "Jan 1916 - Nov 1916", requiresPrefix: true, allowedPrefixes: ["S/"], battles: ["Somme", "Spring", "Arras"], category: "service", hotspot: ["Dingwall", "Alness", "Tain"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [16001, 22000], battalion: "7th-9th (Service) Battalions", date: "Dec 1916 - mid 1917", requiresPrefix: true, allowedPrefixes: ["S/"], battles: ["Spring", "Arras"], category: "service", hotspot: ["Dingwall", "Alness", "Tain"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
  // MISC

  { range: [1, 40000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Fort George, Inverness) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [4001, 8000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Sherwood Foresters (Notts & Derby Regiment)": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Derby", "Chesterfield", "Staveley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "6th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Chesterfield", "Staveley", "Bakewell"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 305000], battalion: "7th (Robin Hood) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Nottingham", "Nottingham Coalfield District", "Newark"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [305001, 330000], battalion: "8th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Nottingham", "Arnold", "Southwell"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [330001, 355000], battalion: "21st Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Mansfield", "Chesterfield", "Sutton in Ashfield"], theatre: "Home", },

 // Regulars
  { range: [1, 12195], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_prewar", hotspot: ["Derby", "Belper", "Nottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [12196, 16445], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Derby", "Belper", "Nottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [16446, 25000], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Derby", "Belper", "Nottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

   // PRE-1917 TERRITORIAL FORCE
{ range: [1,2000], battalion: "5th–8th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Loos", "Somme", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Derby", "Bakewell", "Nottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [2001,5800], battalion: "5th–8th Territorial Force (TF) Battalions", tf: true, date: "Sep 1914 – mid 1915", battles: ["Loos", "Somme", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Derby", "Bakewell", "Nottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [5801,9999], battalion: "5th–8th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Loos", "Somme", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Derby", "Bakewell", "Nottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },

// SERVICE BATTALIONS (Kitchener’s Army)
 { range: [12195, 21000], battalion: "9th–12th (Service) Battalions", date: "Aug 1914 – June 1915", battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Derby", "Chesterfield", "Nottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [21001, 38000], battalion: "9th–12th (Service) Battalions", date: "July 1915 - Dec 1915", battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Derby", "Chesterfield", "Nottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [38001, 70000], battalion: "9th–12th (Service) Battalions", date: "Jan 1916 – Nov 1916", battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Derby", "Chesterfield", "Nottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [70001, 95000], battalion: "9th–12th & 15th-17th (Service) Battalions", date: "Dec 1916 – mid 1917", battles: ["Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Derby", "Chesterfield", "Nottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
{ range: [1, 3500], battalion: "15th (Service) Battalion (Nottingham Bantams)", date: "Feb 1915 – June 1915", battles: ["Spring", "Somme", "Passchendaele", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["15/"], hotspot: ["Derbyshire coalfields", "Mansfield", "Nottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3501, 5500], battalion: "15th (Service) Battalion (Nottingham Bantams)", date: "July 1915 - Dec 1915", battles: ["Spring", "Somme", "Passchendaele", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["15/"], hotspot: ["Derbyshire coalfields", "Mansfield", "Nottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [5501, 7500], battalion: "15th (Service) Battalion (Nottingham Bantams)", date: "Jan 1916 – Nov 1916", battles: ["Spring", "Somme", "Passchendaele", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["15/"], hotspot: ["Derbyshire coalfields", "Mansfield", "Nottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
{ range: [1, 2800], battalion: "16th (Service) Battalion (Chatsworth Rifles)", date: "Apr 1915 – June 1915", battles: ["Somme", "Passchendaele", "Spring"], category: "service", requiresPrefix: true, allowedPrefixes: ["16/"], hotspot: ["Derby", "Chesterfield", "Buxton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2801, 4500], battalion: "16th (Service) Battalion (Chatsworth Rifles)", date: "July 1915 - Dec 1915", battles: ["Somme", "Passchendaele", "Spring"], category: "service", requiresPrefix: true, allowedPrefixes: ["16/"], hotspot: ["Derby", "Chesterfield", "Buxton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4501, 6000], battalion: "16th (Service) Battalion (Chatsworth Rifles)", date: "Jan 1916 – Nov 1916", battles: ["Somme", "Passchendaele", "Spring"], category: "service", requiresPrefix: true, allowedPrefixes: ["16/"], hotspot: ["Derby", "Chesterfield", "Buxton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
              
{ range: [1, 4200], battalion: "17th (Service) Battalion (Welbeck Rangers)", date: "June 1915 - Dec 1915", battles: ["Somme", "Passchendaele", "Spring"], category: "service", requiresPrefix: true, allowedPrefixes: ["17/"], hotspot: ["Retford", "Worksop", "Nottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4201, 5800], battalion: "17th (Service) Battalion (Welbeck Rangers)", date: "Jan 1916 – Nov 1916", battles: ["Somme", "Passchendaele", "Spring"], category: "service", requiresPrefix: true, allowedPrefixes: ["17/"], hotspot: ["Retford", "Worksop", "Nottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// MISC

  { range: [1, 200000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Derby, Chesterfield) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 200000], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Derby, Chesterfield) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [4001, 36000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Somerset Light Infantry (Prince Albert's)": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["India"], category: "tf_renumbering", hotspot: ["Taunton", "Yeovil", "Wellington"], },
{ range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Bath", "Weston super Mare", "Frome"], theatre: "India", },
{ range: [265001, 290000], battalion: "11th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Taunton", "Yeovil", "Bristol"], theatre: "Home" },
// ⚠️ 12th originated from West Somerset Yeomanry — avoid duplicate if Yeomanry blocks are listed separately
{ range: [290001, 300000], battalion: "12th (West Somerset Yeomanry) Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918", category: "tf_renumbering", hotspot: ["Taunton", "Wellington", "Bridgwater"], theatre: "East", },

// Regulars
{ range: [1, 9800],  battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Jun 1914" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_prewar", hotspot: ["Taunton", "Yeovil", "Bath"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "India" }] },
{ range: [9800, 13200], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Taunton", "Yeovil", "Bath"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "India" }] },
 { range: [13201, 20000], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "regular_wartime", hotspot: ["Taunton", "Yeovil", "Bath"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 2, theatre: "India" }] },

// PRE-1917 TERRITORIAL FORCE
{ range: [1,2000], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", category: "tf_pre1917", hotspot: ["Taunton", "Yeovil", "Bristol"], theatre: "India" },
{ range: [2001,5200], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "Sep 1914 – mid 1915", category: "tf_pre1917", hotspot: ["Taunton", "Yeovil", "Bristol"], theatre: "India" },
{ range: [5201,9999], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", category: "tf_pre1917", hotspot: ["Taunton", "Yeovil", "Bristol"], theatre: "India" },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [11000, 16000], battalion: "6th–8th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Taunton", "Yeovil", "Bridgwater"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [16001, 19500], battalion: "6th–8th (Service) Battalions", date: "July 1915 – Dec 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Taunton", "Yeovil", "Bridgwater"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [19001, 27000], battalion: "6th–8th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Taunton", "Yeovil", "Bridgwater"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [27001, 35500], battalion: "6th–8th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Taunton", "Yeovil", "Bridgwater"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// MISC

  { range: [1, 200000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Taunton, Yeovil) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [24001, 28000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
 
],
     
     "South Lancashire Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["St Helens", "Widnes", "Haydock"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Spring", "Passchendaele", "Hundred"],  category: "tf_renumbering", hotspot: ["Warrington", "Stockton Heath", "Widnes"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 290000], battalion: "14th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["St Helens", "Widnes", "Prescot"], theatre: "Home", },
  
// Regulars
{ range: [1, 10200], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Somme", "Passchendaele", "Hundred"], category: "regular_prewar", hotspot: ["Warrington", "Widnes", "Newton le Willow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "India" }] },
{ range: [10201, 14620], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Somme", "Passchendaele", "Spring", "Hundred"], category: "regular_wartime", hotspot: ["Warrington", "Widnes", "Newton le Willow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "India" }] },
{ range: [14621, 25999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Spring", "Hundred"], category: "regular_wartime", hotspot: ["Warrington", "Widnes", "Newton le Willow"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "India" }] },

   // PRE-1917 TERRITORIAL FORCE
{ range: [1,2100], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Somme", "Passchendaele", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Warrington", "Widnes", "St Helens"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2101,3600], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", battles: ["Somme", "Passchendaele", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Warrington", "Widnes", "St Helens"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3601,9999], battalion: "4th-5th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Somme", "Passchendaele", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Warrington", "Widnes", "St Helens"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [10201, 18000], battalion: "6th–9th (Service) Battalions", date: "Aug 1914 – June 1915", battles: ["Loos", "Somme", "Arras"], category: "service", hotspot: ["Warrington", "Bootle", "St Helens"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }] },
{ range: [18001, 22000], battalion: "6th–9th (Service) Battalions", date: "July 1915 - Dec 1915", battles: ["Loos", "Somme", "Arras"], category: "service", hotspot: ["Warrington", "Bootle", "St Helens"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }] },
{ range: [22001, 35000], battalion: "6th–9th & 11th (Service) Battalions", date: "Jan 1916 – Nov 1916", battles: ["Somme", "Arras"], category: "service", hotspot: ["Warrington", "Bootle", "St Helens"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }] },
{ range: [35001, 45000], battalion: "6th–9th & 11th (Service) Battalions", date: "Dec 1916 – mid 1917", battles: ["Arras"], category: "service", hotspot: ["Warrington", "Bootle", "St Helens"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 6, theatre: "East" }] },
       
{ range: [1, 3000], battalion: "11th (Service) Battalion (St Helens Pioneers)", date: "Sep 1914 – June 1915", battles: ["Passchendaele", "Spring", "Somme", "Arras"], category: "service", requiresPrefix: true, allowedPrefixes: ["11/"], hotspot: ["St Helens", "Haydock", "Prescot"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3001, 4500], battalion: "11th (Service) Battalion (St Helens Pioneers)", date: "July 1915 - Dec 1915", battles: ["Passchendaele", "Spring", "Somme", "Arras"], category: "service", requiresPrefix: true, allowedPrefixes: ["11/"], hotspot: ["St Helens", "Haydock", "Prescot"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
{ range: [1, 3500], battalion: "12th (Service) Battalion (Bermondsey)", date: "June 1915 - Dec 1915", battles: ["Passchendaele", "Somme", "Spring"], category: "service", requiresPrefix: true, allowedPrefixes: ["12/"], hotspot: ["Bermondsey", "Rotherhithe", "Southwark"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3501, 5000], battalion: "12th (Service) Battalion (Bermondsey)", date: "Jan 1916 – Nov 1916", battles: ["Passchendaele", "Somme", "Spring"], category: "service", requiresPrefix: true, allowedPrefixes: ["12/"], hotspot: ["Bermondsey", "Rotherhithe", "Southwark"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// MISC

  { range: [1, 200000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Warrington, Widnes) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [12001, 28000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "South Staffordshire Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Wolverhampton", "Walsall", "Black Country Industrial belt"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "6th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", battles: ["Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Cannock", "Hednesford", "Rugeley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
// Regulars
{ range: [1, 9850], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Loos", "Somme", "Arras"], category: "regular_prewar", hotspot: ["Wolverhampton", "Cannock Chase", "Lichfield"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [9851, 15350], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Wolverhampton", "Cannock Chase", "Lichfield"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
 { range: [15351, 24999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Wolverhampton", "Cannock Chase", "Lichfield"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

    // PRE-1917 TERRITORIAL FORCE
{ range: [1,2100], battalion: "5th-6th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Loos", "Somme", "Spring", "Arras"], category: "tf_pre1917", hotspot: ["Wolverhampton", "Walsall", "Black Country Industrial Belt"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2101,3600], battalion: "5th-6th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", battles: ["Loos", "Somme", "Spring", "Arras"], category: "tf_pre1917", hotspot: ["Wolverhampton", "Walsall", "Black Country Industrial Belt"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3601,9999], battalion: "5th-6th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Loos", "Somme", "Spring", "Arras"], category: "tf_pre1917", hotspot: ["Wolverhampton", "Walsall", "Black Country Industrial Belt"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [9850, 16500], battalion: "7th–9th (Service) Battalions", date: "Aug 1914 – June 1915", battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Wolverhampton", "Cannock Chase", "Bilston"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [16501, 20000], battalion: "7th–9th (Service) Battalions", date: "July 1915 - Dec 1915", battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Wolverhampton", "Cannock Chase", "Bilston"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [20001, 38000], battalion: "7th–9th (Service) Battalions", date: "Jan 1916 - Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Wolverhampton", "Cannock Chase", "Bilston"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], }, 
{ range: [38001, 50000], battalion: "7th–9th (Service) Battalions", date: "Dec 1916 - mid 1917" , battles: ["Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Wolverhampton", "Cannock Chase", "Bilston"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// MISC

  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Cannock, Wolverhampton) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
 { range: [1, 99999], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Cannock, Wolverhampton) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
 { range: [20001, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "South Wales Borderers": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 225000], battalion: "1st Brecknockshire Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Brecon", "Builth Wells", "Llandovery"], theatre: "India", },
// ⚠️ Monmouthshire Regiment TF allocations sit under their own parent — don’t duplicate here:
//    225001–265000 (1st Monmouthshire), 265001–290000 (2nd Monmouthshire), 290001–315000 (3rd Monmouthshire), 315001–340000 (4th Monmouthshire)

 //Regulars
{ range: [1, 11220], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Somme", "Arras", "Hundred"], category: "regular_prewar", hotspot: ["Cardiff", "Penarth", "South Wales Coalfield Towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [11221, 14620], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["Cardiff", "Penarth", "South Wales Coalfield Towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [14621, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["Cardiff", "Penarth", "South Wales Coalfield Towns"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

  // PRE-1917 TERRITORIAL FORCE
  { range: [1,2500], battalion: "Brecknockshire Territorial Force (TF) Battalion", tf: true, date: "Pre-WWI – Aug 1914", category: "tf_pre1917", hotspot: ["Brecon", "Builth Wells", "Llandovery"], theatre: "India" },
{ range: [2501,9999], battalion: "Brecknockshire Territorial Force (TF) Battalion", tf: true, date: "Sep 1914 – Feb 1917", category: "tf_pre1917", hotspot: ["Brecon", "Builth Wells", "Llandovery"], theatre: "India" },


// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [11221, 20000], battalion: "4th–8th (Service) Battalions", date: "Aug 1914 – June 1915", battles: ["Loos", "Somme", "Hundred"], category: "service", hotspot: ["South Wales Coalfield Towns", "Tredegar", "Cardiff"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" }] },
{ range: [20001, 25000], battalion: "4th–8th (Service) Battalions", date: "July 1915 – Dec 1915", battles: ["Loos", "Somme", "Hundred"], category: "service", hotspot: ["South Wales Coalfield Towns", "Tredegar", "Cardiff"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" }] },
{ range: [25001, 42000], battalion: "4th–8th (Service) Battalions", date: "Jan 1916 – Nov 1916", battles: ["Somme", "Hundred"], category: "service", hotspot: ["South Wales Coalfield Towns", "Tredegar", "Cardiff"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" }] },
{ range: [42001, 50000], battalion: "4th–8th, 10th-12th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Hundred"], category: "service", hotspot: ["South Wales Coalfield Towns", "Tredegar", "Cardiff"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" }] },
     
{ range: [1, 4500], battalion: "10th (Service) Battalion (1st Gwent)", date: "Oct 1914 – June 1915", battles: ["Passchendaele", "Spring", "Somme", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["10/"], hotspot: ["Monmouthshire", "Newport", "The Rhondda"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4501, 6000], battalion: "10th (Service) Battalion (1st Gwent)", date: "July 1915 – Dec 1915", battles: ["Passchendaele", "Spring", "Somme", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["10/"], hotspot: ["Monmouthshire", "Newport", "The Rhondda"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [6001, 9000], battalion: "10th (Service) Battalion (1st Gwent)", date: "Jan 1916 – Nov 1916", battles: ["Passchendaele", "Spring", "Somme", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["10/"], hotspot: ["Monmouthshire", "Newport", "The Rhondda"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
{ range: [1, 4500], battalion: "11th (Service) Battalion (2nd Gwent)", date: "Dec 1914 – June 1915", battles: ["Passchendaele", "Somme"], category: "service", requiresPrefix: true, allowedPrefixes: ["11/"], hotspot: ["Monmouthshire", "Ebbw Vale", "Tredegar"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4501, 6000], battalion: "11th (Service) Battalion (2nd Gwent)", date: "July 1915 – Dec 1915", battles: ["Passchendaele", "Somme"], category: "service", requiresPrefix: true, allowedPrefixes: ["11/"], hotspot: ["Monmouthshire", "Ebbw Vale", "Tredegar"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [6001, 9000], battalion: "11th (Service) Battalion (2nd Gwent)", date: "Jan 1916 – Nov 1916", battles: ["Passchendaele", "Somme"], category: "service", requiresPrefix: true, allowedPrefixes: ["11/"], hotspot: ["Monmouthshire", "Ebbw Vale", "Tredegar"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
{ range: [1, 4500], battalion: "12th (Service) Battalion (3rd Gwent)", date: "Mar 1915 – June 1915", battles: ["Passchendaele", "Somme", "Spring"], category: "service", requiresPrefix: true, allowedPrefixes: ["12/"], hotspot: ["Monmouthshire", "Newport", "Abergavenny"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4501, 6000], battalion: "12th (Service) Battalion (3rd Gwent)", date: "July 1915 – Dec 1915", battles: ["Passchendaele", "Somme", "Spring"], category: "service", requiresPrefix: true, allowedPrefixes: ["12/"], hotspot: ["Monmouthshire", "Newport", "Abergavenny"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [6001, 9000], battalion: "12th (Service) Battalion (3rd Gwent)", date: "Jan 1916 – Nov 1916", battles: ["Passchendaele", "Somme", "Spring"], category: "service", requiresPrefix: true, allowedPrefixes: ["12/"], hotspot: ["Monmouthshire", "Newport", "Abergavenny"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// MISC

  { range: [1, 200000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Cardiff, Penarth) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 40000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],
     
     "Suffolk Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Lowestoft", "Beccles", "Bungay"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918", category: "tf_renumbering", hotspot: ["Ipswich", "Stowmarket", "Bury St Edmunds"], theatre: "East", },
{ range: [265001, 290000], battalion: "6th (Cyclist) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Great Yarmouth", "Lowestoft", "Halesworth"], theatre: "Home", },
{ range: [290001, 315000], battalion: "14th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Bury St Edmunds", "Ipswich", "Stowmarket"], theatre: "Home", },
// ⚠️ Yeomanry origin — avoid duplicate if listing Suffolk Yeomanry separately
{ range: [315001, 325000], battalion: "15th (Suffolk Yeomanry) Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Ipswich", "Stowmarket", "Lowestoft"], theatre: "East", },
// ⚠️ All-TF regiment treated under SUFFOLK — don’t duplicate under a separate “Cambridgeshire Regiment” entry:
//    325001–350000 (Cambridgeshire Regiment) — amended from an original 315001–340000 allocation

  // Regulars
 { range: [1, 9015], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Loos", "Somme", "Hundred"], category: "regular_prewar", hotspot: ["Bury St Edmunds", "Ipswich", "Lowestoft"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [9016, 12415], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Bury St Edmunds", "Ipswich", "Lowestoft"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [12416, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Bury St Edmunds", "Ipswich", "Lowestoft"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

    // PRE-1917 TERRITORIAL FORCE
{ range: [1, 2100], battalion: "4th–6th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Jul 1914", battles: ["Loos", "Somme", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Bury St Edmunds", "Ipswich", "Lowestoft"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }] },
{ range: [2101, 4500], battalion: "4th–6th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", battles: ["Loos", "Somme", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Bury St Edmunds", "Ipswich", "Lowestoft"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }] },
{ range: [4501,7000], battalion: "4th–6th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Loos", "Somme", "Passchendaele", "Spring"], category: "tf_pre1917", hotspot: ["Bury St Edmunds", "Ipswich", "Lowestoft"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }] },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [9016, 13500], battalion: "7th–9th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Stowmarket", "Ipswich", "Haverhill"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [13501, 17500], battalion: "7th–9th (Service) Battalions", date: "July 1915 - Dec 1915" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Stowmarket", "Ipswich", "Haverhill"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [17501, 35000], battalion: "7th–9th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Stowmarket", "Ipswich", "Haverhill"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [35001, 48500], battalion: "7th–9th & 11th-12th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Stowmarket", "Ipswich", "Haverhill"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
    
       
{ range: [1, 1350], battalion: "11th (Service) Battalion (Cambridgeshire Pals)", date: "Sep 1914 – June 1915" , battles: ["Spring", "Somme", "Passchendaele", "Arras"], category: "service", requiresPrefix: true, allowedPrefixes: ["11/", "C/"], hotspot: ["Cambridge", "Ely", "March & Wisbech"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3501, 5000], battalion: "11th (Service) Battalion (Cambridgeshire Pals)", date: "July 1915 – Dec 1915" , battles: ["Spring", "Somme", "Passchendaele", "Arras"], category: "service", requiresPrefix: true, allowedPrefixes: ["11/", "C/"], hotspot: ["Cambridge", "Ely", "March & Wisbech"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [5001, 7000], battalion: "11th (Service) Battalion (Cambridgeshire Pals)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Spring", "Passchendaele", "Arras"], category: "service", requiresPrefix: true, allowedPrefixes: ["11/", "C/"], hotspot: ["Cambridge", "Ely", "March & Wisbech"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
{ range: [1, 2500], battalion: "12th (Service) Battalion (Bantams)", date: "Jan 1915 – June 1915" , battles: ["Somme", "Passchendaele", "Spring"], category: "service", requiresPrefix: true, allowedPrefixes: ["12/"], hotspot: ["Bury St Edmunds", "Sudbury", "Newmarket"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2501, 4000], battalion: "12th (Service) Battalion (Bantams)", date: "July 1915 – Dec 1915" , battles: ["Somme", "Passchendaele", "Spring"], category: "service", requiresPrefix: true, allowedPrefixes: ["12/"], hotspot: ["Bury St Edmunds", "Sudbury", "Newmarket"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4001, 6000], battalion: "12th (Service) Battalion (Bantams)", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Spring"], category: "service", requiresPrefix: true, allowedPrefixes: ["12/"], hotspot: ["Bury St Edmunds", "Sudbury", "Newmarket"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
       
  // MISC

  { range: [1, 200000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Bury St Edmunds, Ipswich) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
 { range: [4001, 24000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],

"Welsh Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Roath", "Rhondda Valley", "Merthyr Valleys"], theatre: "East", },
{ range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Morriston", "Landore", "Abercynon"], theatre: "East", },
{ range: [265001, 290000], battalion: "6th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["Home"], category: "tf_renumbering", hotspot: ["Carmarthen", "Amman Valley industrial villages", "Narbeth"], },
{ range: [290001, 315000], battalion: "7th (Cyclists) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , category: "tf_renumbering", hotspot: ["Knighton", "Rhayader", "Builth Wells"], theatre: "Home", },
{ range: [315001, 325000], battalion: "24th (Pembroke and Glamorgan Yeomanry) Territorial Force (TF) Battalion", tf: true, date: "Feb 1917-1918", category: "tf_renumbering", hotspot: ["Merthyr", "Cardiff", "Swansea"], theatre: "East", },

 // Regulars
{ range: [1, 11200], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914", battles: ["Mons", "Loos", "Somme", "Hundred"], category: "regular_prewar", hotspot: ["Swansea", "Cardiff", "Newport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" }] },
{ range: [11201, 15620], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916", battles: ["Loos", "Somme", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Swansea", "Cardiff", "Newport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" }] },
{ range: [15621, 25999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918", battles: ["Somme", "Passchendaele", "Hundred"], category: "regular_wartime", hotspot: ["Swansea", "Cardiff", "Newport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" }] },
     
 // PRE-1917 TERRITORIAL FORCE
{ range: [1,2100], battalion: "4th-7th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Loos", "Somme", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Carmarthen", "Narbeth", "Merthyr"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" },{ bn: 5, theatre: "East" }, { bn: 6, theatre: "Home" }] },
{ range: [2101,3600], battalion: "4th-7th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", battles: ["Loos", "Somme", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Carmarthen", "Narbeth", "Merthyr"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" },{ bn: 5, theatre: "East" }, { bn: 6, theatre: "Home" }] },
{ range: [3601,9999], battalion: "4th-7th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Loos", "Somme", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Carmarthen", "Narbeth", "Merthyr"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 4, theatre: "East" },{ bn: 5, theatre: "East" }, { bn: 6, theatre: "Home" }] },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [11200, 17500], battalion: "8th–11th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Hundred", "Passchendaele"], category: "service", hotspot: ["Roath", "Grangetown", "Landore"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }, { bn: 11, theatre: "East" }] },
{ range: [17501, 24000], battalion: "8th–11th(Service) Battalions", date: "July 1915 - Dec 1915" , battles: ["Loos", "Somme", "Hundred", "Passchendaele"], category: "service", hotspot: ["Roath", "Grangetown", "Landore"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }, { bn: 11, theatre: "East" }] },
{ range: [24001, 48000], battalion: "8th–11th(Service) Battalions", date: "Jan 1916 - Nov 1916" , battles: ["Spring", "Somme", "Hundred", "Passchendaele"], category: "service", hotspot: ["Roath", "Grangetown", "Landore"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }, { bn: 11, theatre: "East" }] },
{ range: [48001, 65000], battalion: "8th–11th, 13th–19th (Service) Battalions", date: "Dec 1916 - mid 1917" , battles: ["Passchendaele", "Spring", "Hundred"], category: "service", hotspot: ["Roath", "Grangetown", "Landore"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 8, theatre: "East" }, { bn: 11, theatre: "East" }] },
  
 { range: [1, 3000], battalion: "13th (Service) Battalion (1st Rhondda)", date: "Oct 1914 – June 1915" , battles: ["Spring", "Somme", "Hundred", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["13/", "W/"], category: "service", hotspot: ["Roath", "Grangetown", "Landore"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3001, 5000], battalion: "13th (Service) Battalion (1st Rhondda)", date: "July 1915 - Dec 1915" , battles: ["Spring", "Somme", "Hundred", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["13/", "W/"], category: "service", hotspot: ["Roath", "Grangetown", "Landore"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [5001, 7500], battalion: "13th (Service) Battalion (1st Rhondda)", date: "Jan 1916 - Nov 1916" , battles: ["Spring", "Somme", "Hundred", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["13/", "W/"], category: "service", hotspot: ["Roath", "Grangetown", "Landore"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
 { range: [1, 3200], battalion: "14th (Service) Battalion (2nd Rhondda)", date: "Oct 1914 – June 1915" , battles: ["Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["14/", "W/"], category: "service", hotspot: ["Roath", "Porth", "Tonypandy"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3201, 4800], battalion: "14th (Service) Battalion (2nd Rhondda)", date: "July 1915 - Dec 1915" , battles: ["Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["14/", "W/"], category: "service", hotspot: ["Roath", "Porth", "Tonypandy"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4801, 6500], battalion: "14th (Service) Battalion (2nd Rhondda)", date: "Jan 1916 - Nov 1916" , battles: ["Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["14/", "W/"], category: "service", hotspot: ["Roath", "Porth", "Tonypandy"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
{ range: [1, 2800], battalion: "15th (Service) Battalion (Carmarthenshire)", date: "Oct 1914 – June 1915" , battles: ["Spring", "Somme", "Hundred", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["15/", "W/"], category: "service", hotspot: ["Llanelli", "Ammanford", "Carmarthen"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2801, 4200], battalion: "15th (Service) Battalion (Carmarthenshire)", date: "July 1915 - Dec 1915" , battles: ["Spring", "Somme", "Hundred", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["15/", "W/"], category: "service", hotspot: ["Llanelli", "Ammanford", "Carmarthen"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4201, 6000], battalion: "15th (Service) Battalion (Carmarthenshire)", date: "Jan 1916 - Nov 1916" , battles: ["Spring", "Somme", "Hundred", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["15/", "W/"], category: "service", hotspot: ["Llanelli", "Ammanford", "Carmarthen"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
{ range: [1, 3000], battalion: "16th (Service) Battalion (Cardiff City)", date: "Nov 1914 – June 1915" , battles: ["Spring", "Somme", "Hundred", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["16/", "W/"], category: "service", hotspot: ["Cardiff", "Penarth", "Barry"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3001, 4500], battalion: "16th (Service) Battalion (Cardiff City)", date: "July 1915 - Dec 1915" , battles: ["Spring", "Somme", "Hundred", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["16/", "W/"], category: "service", hotspot: ["Cardiff", "Penarth", "Barry"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4501, 6500], battalion: "16th (Service) Battalion (Cardiff City)", date: "Jan 1916 - Nov 1916" , battles: ["Spring", "Somme", "Hundred", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["16/", "W/"], category: "service", hotspot: ["Cardiff", "Penarth", "Barry"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
{ range: [1, 2500], battalion: "17th (Service) Battalion (1st Glamorgan)", date: "Dec 1914 – June 1915" , battles: ["Spring", "Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["17/"], category: "service", hotspot: ["Merthyr Tydfil", "Aberdare", "Mountain Ash"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2501, 3800], battalion: "17th (Service) Battalion (1st Glamorgan)", date: "July 1915 - Dec 1915" , battles: ["Spring", "Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["17/"], category: "service", hotspot: ["Merthyr Tydfil", "Aberdare", "Mountain Ash"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3801, 5500], battalion: "17th (Service) Battalion (1st Glamorgan)", date: "Jan 1916 - Nov 1916" , battles: ["Spring", "Somme", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["17/"], category: "service", hotspot: ["Merthyr Tydfil", "Aberdare", "Mountain Ash"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
 { range: [1, 2500], battalion: "18th (Service) Battalion (2nd Glamorgan)", date: "Jan 1915 – June 1915" , battles: ["Somme", "Spring", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["18/"], category: "service", hotspot: ["Bridgend", "Maesteg", "Port Talbot"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2501, 4000], battalion: "18th (Service) Battalion (2nd Glamorgan)", date: "July 1915 - Dec 1915" , battles: ["Somme", "Spring", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["18/"], category: "service", hotspot: ["Bridgend", "Maesteg", "Port Talbot"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4001, 6000], battalion: "18th (Service) Battalion (2nd Glamorgan)", date: "Jan 1916 - Nov 1916" , battles: ["Somme", "Spring", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["18/"], category: "service", hotspot: ["Bridgend", "Maesteg", "Port Talbot"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
 { range: [1, 2500], battalion: "19th (Service) Battalion (Glamorgan Pioneers)", date: "Feb 1915 – June 1915" , battles: ["Spring", "Somme", "Hundred", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["19/", "W/"], category: "service", hotspot: ["Bridgend", "Neath", "Port Talbot"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2501, 4000], battalion: "19th (Service) Battalion (Glamorgan Pioneers)", date: "July 1915 - Dec 1915" , battles: ["Spring", "Somme", "Hundred", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["19/", "W/"], category: "service", hotspot: ["Bridgend", "Neath", "Port Talbot"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4001, 6000], battalion: "19th (Service) Battalion (Glamorgan Pioneers)", date: "Jan 1916 - Nov 1916" , battles: ["Spring", "Somme", "Hundred", "Passchendaele"], requiresPrefix: true, allowedPrefixes: ["19/", "W/"], category: "service", hotspot: ["Bridgend", "Neath", "Port Talbot"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
  // MISC

  { range: [1, 200000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Roath, Grangetown) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [24001, 36000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],

"West Yorkshire Regiment (Prince of Wales's Own)": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["York", "Selby", "Goole"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "6th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Otley", "Ilkley", "Skipton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 305000], battalion: "7th Battalion (Leeds Rifles) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras"], category: "tf_renumbering", hotspot: ["Leeds", "Hunslet", "Armley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"],  },
{ range: [305001, 330000], battalion: "8th Battalion (Leeds Rifles) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Pudsey", "Bramley", "Farsley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"],  },

  // Regulars
{ range: [1, 10200], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_prewar", hotspot: ["York", "Leeds", "Bradford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [10201, 13700], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["York", "Leeds", "Bradford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [13701, 22099], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["York", "Leeds", "Bradford"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// PRE-1917 TERRITORIAL FORCE
{ range: [1,2100], battalion: "5th–8th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Jul 1914", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "tf_pre1917", hotspot: ["York", "Leeds", "Otley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [2101,5000], battalion: "5th–8th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "tf_pre1917", hotspot: ["York", "Leeds", "Otley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [5001,9999], battalion: "5th–8th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "tf_pre1917", hotspot: ["York", "Leeds", "Otley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },


// SERVICE BATTALIONS (Kitchener’s Army)

{ range: [10201, 17500], battalion: "9th–12th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["York", "Leeds", "Selby"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [17501, 22000], battalion: "9th–12th (Service) Battalions", date: "July 1915 - Dec 1915" , battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["York", "Leeds", "Selby"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [22001, 38000], battalion: "9th–12th (Service) Battalions", date: "Dec 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["York", "Leeds", "Selby"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [38001, 52000], battalion: "9th–12th & 15th-18th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["York", "Leeds", "Selby"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },  
  
{ range: [1, 2500], battalion: "15th (Service) Battalion (1st Leeds)", date: "Sep 1914 – June 1915" , battles: ["Passchendaele", "Somme", "Arras", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["15/"], hotspot: ["Leeds", "Hunslet", "Holbeck"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2501, 4000], battalion: "15th (Service) Battalion (1st Leeds)", date: "July 1915 - Dec 1915" , battles: ["Passchendaele", "Somme", "Arras", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["15/"], hotspot: ["Leeds", "Hunslet", "Holbeck"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4001, 5500], battalion: "15th (Service) Battalion (1st Leeds)", date: "Dec 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["15/"], hotspot: ["Leeds", "Hunslet", "Holbeck"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
{ range: [1, 3500], battalion: "16th (Service) Battalion (1st Bradford)", date: "Sep 1914 – June 1915" , battles: ["Passchendaele", "Somme", "Arras", "Spring"], category: "service", requiresPrefix: true, allowedPrefixes: ["16/"], hotspot: ["Bradford", "Manningham", "Shipley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3501, 5000], battalion: "16th (Service) Battalion (1st Bradford)", date: "July 1915 - Dec 1915" , battles: ["Passchendaele", "Somme", "Arras", "Spring"], category: "service", requiresPrefix: true, allowedPrefixes: ["16/"], hotspot: ["Bradford", "Manningham", "Shipley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [5001, 6500], battalion: "16th (Service) Battalion (1st Bradford)", date: "Dec 1916 – Nov 1916" , battles: ["Passchendaele", "Somme", "Arras", "Spring"], category: "service", requiresPrefix: true, allowedPrefixes: ["16/"], hotspot: ["Bradford", "Manningham", "Shipley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
  { range: [1, 1500], battalion: "17th (Service) Battalion (2nd Leeds)", date: "Dec 1914 – June 1915" , battles: ["Spring", "Somme", "Passchendaele", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["17/"], hotspot: ["Leeds", "Bradford", "Huddersfield"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [1501, 2500], battalion: "17th (Service) Battalion (2nd Leeds)", date: "July 1915 - Dec 1915" , battles: ["Spring", "Somme", "Passchendaele", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["17/"], hotspot: ["Leeds", "Bradford", "Huddersfield"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2501, 4000], battalion: "17th (Service) Battalion (2nd Leeds)", date: "Dec 1916 – Nov 1916" , battles: ["Spring", "Somme", "Passchendaele", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["17/"], hotspot: ["Leeds", "Bradford", "Huddersfield"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

{ range: [1, 3500], battalion: "18th (Service) Battalion (2nd Bradford)", date: "Jan 1915 – June 1915" , battles: ["Spring", "Somme", "Arras", "Passchendaele"], category: "service", requiresPrefix: true, allowedPrefixes: ["18/"], hotspot: ["Bradford", "Bowling", "Thornton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3501, 5000], battalion: "18th (Service) Battalion (2nd Bradford)", date: "July 1915 - Dec 1915" , battles: ["Spring", "Somme", "Arras", "Passchendaele"], category: "service", requiresPrefix: true, allowedPrefixes: ["18/"], hotspot: ["Bradford", "Bowling", "Thornton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [5001, 6500], battalion: "18th (Service) Battalion (2nd Bradford)", date: "Dec 1916 – Nov 1916" , battles: ["Spring", "Somme", "Arras", "Passchendaele"], category: "service", requiresPrefix: true, allowedPrefixes: ["18/"], hotspot: ["Bradford", "Bowling", "Thornton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
{ range: [1, 800], battalion: "21st (Service) Battalion (Woolwich Pioneers)", date: "Sep 1915 – Dec 1915" , battles: ["Passchendaele", "Somme", "Arras", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["21/"], hotspot: ["Woolwich", "Deptford", "Greenwich"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [801, 2500], battalion: "21st (Service) Battalion (Woolwich Pioneers)", date: "Jan 1916 - Nov 1916" , battles: ["Passchendaele", "Somme", "Arras", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["21/"], hotspot: ["Woolwich", "Deptford", "Greenwich"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2501, 4500], battalion: "21st (Service) Battalion (Woolwich Pioneers)", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Somme", "Arras", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["21/"], hotspot: ["Woolwich", "Deptford", "Greenwich"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], }, 

  // MISC

  { range: [1, 200000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Leeds, Bradford) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 200000], battalion: "4th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["4/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Leeds, Bradford) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [20001, 80000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],

"Wiltshire Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 225000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , theatre: ["India"], category: "tf_renumbering", hotspot: ["Trowbridge", "Devizes", "Warminster"], },

// Regulars
{ range: [1, 9280], battalion: "1st or 2nd (Regular) Battalion", battles: ["Mons", "Loos", "Somme", "Arras"], date: "Pre-WWI – Aug 1914" , category: "regular_prewar", hotspot: ["Salisbury", "Warminster", "Swindon"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [9281, 12680], battalion: "1st or 2nd (Regular) Battalion", battles: ["Loos", "Somme", "Passchendaele", "Arras"], date: "Aug 1914 – early 1916" , category: "regular_wartime", hotspot: ["Salisbury", "Warminster", "Swindon"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [12681, 19999], battalion: "1st or 2nd (Regular) Battalion", battles: ["Somme", "Passchendaele", "Arras"], date: "1916 – 1918" , category: "regular_wartime", hotspot: ["Salisbury", "Warminster", "Swindon"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// PRE-1917 TERRITORIAL FORCE
{ range: [1,2250], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Pre-WWI – Jul 1914", category: "tf_pre1917", hotspot: ["Trowbridge", "Devizes", "Warminster"], theatre: "India" },
{ range: [2251,5000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Aug 1914 – mid 1915", category: "tf_pre1917", hotspot: ["Trowbridge", "Devizes", "Warminster"], theatre: "India" },
{ range: [5001,9999], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "mid 1915 – early 1917", category: "tf_pre1917", hotspot: ["Trowbridge", "Devizes", "Warminster"], theatre: "India" },


// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [9280, 18500], battalion: "5th–7th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Hundred", "Passchendaele"], category: "service",  hotspot: ["Devizes", "Warminster", "Salisbury"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }, { bn: 7, theatre: "East" }] },
{ range: [18501, 22000], battalion: "5th–7th (Service) Battalions", date: "July 1915 - Dec 1915" , battles: ["Loos", "Somme", "Hundred","Passchendaele"], category: "service", hotspot: ["Devizes", "Warminster", "Salisbury"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }, { bn: 7, theatre: "East" }] },
{ range: [22001, 32000], battalion: "5th–7th (Service) Battalions", date: "Jan 1916 - Nov 1916" , battles: ["Somme", "Passchendaele", "Hundred"], category: "service", hotspot: ["Devizes", "Warminster", "Salisbury"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }, { bn: 7, theatre: "East" }] },
{ range: [32001, 40000], battalion: "5th–7th (Service) Battalions", date: "Dec 1916- mid 1917" , battles: ["Passchendaele", "Hundred"], category: "service", hotspot: ["Devizes", "Warminster", "Salisbury"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 5, theatre: "East" }, { bn: 7, theatre: "East" }] },

// MISC

  { range: [1, 99999], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Devizes, Warminster) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [1, 20000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],

"Worcestershire Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "7th Territorial Force (TF) Battalion)", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring"], category: "tf_renumbering", hotspot: ["Kidderminster", "Stourport", "Bewdley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "8th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Hundred"], category: "tf_renumbering", hotspot: ["Worcester", "Droitwich", "Pershore"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// Regulars
{ range: [1, 13500], battalion: "1st–4th (Regular) Battalions", date: "Pre-WWI – Aug 1914" , battles: ["Mons", "Somme", "Arras", "Hundred"], category: "regular_prewar", hotspot: ["Worcester", "Kidderminster", "Malvern"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [13501, 17800], battalion: "1st–4th (Regular) Battalions", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["Worcester", "Kidderminster", "Malvern"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  { range: [17801, 25999], battalion: "1st–4th (Regular) Battalions", date: "1916 – 1918" , battles: ["Somme", "Arras", "Hundred"], category: "regular_wartime", hotspot: ["Worcester", "Kidderminster", "Malvern"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

  // PRE-1917 TERRITORIAL FORCE
{ range: [1,2100], battalion: "7th-8th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Somme", "Passchendaele", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Worcester", "Droitwich", "Pershore"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2101,3600], battalion: "7th-8th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", battles: ["Somme", "Passchendaele", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Worcester", "Droitwich", "Pershore"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3601,9999], battalion: "7th-8th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Somme", "Passchendaele", "Spring", "Hundred"], category: "tf_pre1917", hotspot: ["Worcester", "Droitwich", "Pershore"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [13500, 21000], battalion: "9th–11th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Hundred"], category: "service", hotspot: ["Worcester", "Kidderminster", "Malvern"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 9, theatre: "East" }, { bn: 11, theatre: "East" }] },
{ range: [21001, 26000], battalion: "9th–11th (Service) Battalions", date: "July 1915 - Dec 1915" , battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Worcester", "Kidderminster", "Malvern"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 9, theatre: "East" }, { bn: 11, theatre: "East" }] },
{ range: [26001, 45000], battalion: "9th–11th (Service) Battalions", date: "Jan 1916 - Nov 1916" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Worcester", "Kidderminster", "Malvern"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 9, theatre: "East" }, { bn: 11, theatre: "East" }] },
{ range: [45001, 60000], battalion: "9th–11th & 14th (Service) Battalions", date: "Dec 1916 - mid 1917" , battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "service", hotspot: ["Worcester", "Kidderminster", "Malvern"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 9, theatre: "East" }, { bn: 11, theatre: "East" }] },
  
{ range: [1, 2800], battalion: "14th (Service) Battalion (Severn Pioneers)", date: "Sep 1915 - Dec 1915", battles: ["Arras", "Passchendaele", "Somme", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["14/"], hotspot: ["Worcester", "Kidderminster", "Stourport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2801, 4000], battalion: "14th (Service) Battalion (Severn Pioneers)", date: "Jan 1916 - Nov 1916", battles: ["Arras", "Passchendaele", "Somme", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["14/"], hotspot: ["Worcester", "Kidderminster", "Stourport"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// MISC

  { range: [1, 999999], battalion: "5th (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["5/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Worcester, Kidderminster) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [1, 999999], battalion: "6th (Extra Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["6/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Worcester, Kidderminster) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
  { range: [16001, 36000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
 
],

"York & Lancaster Regiment": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th (Hallamshire) Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras", "Hundred"], category: "tf_renumbering", hotspot: ["Rotherham", "Maltby", "Swinton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "5th Battalion Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras"], category: "tf_renumbering", hotspot: ["Doncaster", "Bentley", "Thorne"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

  // Regulars
{ range: [1, 10575], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Jul 1914" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_prewar", hotspot: ["Sheffield", "Barnsley", "Pontefract"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" }] },
{ range: [10576, 27575], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Sheffield", "Barnsley", "Pontefract"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" }] },
{ range: [27576, 45000], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Sheffield", "Barnsley", "Pontefract"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "East" }] },

 // PRE-1917 TERRITORIAL FORCE
{ range: [1,2100], battalion: "4th-5th Territorial Force (TF) battalions", tf: true, date: "Pre-WWI – Aug 1914", battles: ["Somme", "Spring", "Arras", "Passchendaele"], category: "tf_pre1917", hotspot: ["Rotherham", "Barnsley", "Bentley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2101,3600], battalion: "4th-5th Territorial Force (TF) battalions", tf: true, date: "Aug 1914 – mid 1915", battles: ["Somme", "Spring", "Arras", "Passchendaele"], category: "tf_pre1917", hotspot: ["Rotherham", "Barnsley", "Bentley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3601,9999], battalion: "4th-5th Territorial Force (TF) battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Somme", "Spring", "Arras", "Passchendaele"], category: "tf_pre1917", hotspot: ["Rotherham", "Barnsley", "Bentley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [10576, 21000], battalion: "6th–10th (Service) Battalions", date: "Aug 1914 – June 1915", battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Pontefract", "Sheffield", "Doncaster"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [21001, 25000], battalion: "6th–10th (Service) Battalions", date: "July 1915 - Dec 1915", battles: ["Loos", "Somme", "Arras", "Hundred"], category: "service", hotspot: ["Pontefract", "Sheffield", "Doncaster"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [25001, 38000], battalion: "6th–10th (Service) Battalions", date: "Jan 1916 – Nov 1916", battles: ["Somme", "Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Pontefract", "Sheffield", "Doncaster"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [38001, 55000], battalion: "6th–10th & 12th-14th (Service) Battalions", date: "Dec 1916 – mid 1917", battles: ["Passchendaele", "Arras", "Hundred"], category: "service", hotspot: ["Pontefract", "Sheffield", "Doncaster"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
{ range: [1, 1500], battalion: "12th (Service) Battalion (Sheffield City)", date: "Sep 1914 – June 1915", battles: ["Passchendaele", "Somme", "Arras", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["12/"], hotspot: ["Recruited from Sheffield university, professional offices, and sports clubs"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [1501, 2000], battalion: "12th (Service) Battalion (Sheffield City)", date: "July 1915 - Dec 1915", battles: ["Passchendaele", "Somme", "Arras", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["12/"], hotspot: ["Recruited from Sheffield university, professional offices, and sports clubs"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2001, 3000], battalion: "12th (Service) Battalion (Sheffield City)", date: "Jan 1916 – Nov 1916", battles: ["Passchendaele", "Somme", "Arras", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["12/"], hotspot: ["Recruited from Sheffield university, professional offices, and sports clubs"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
{ range: [1, 2500], battalion: "13th (Service) Battalion (1st Barnsley)", date: "Sep 1914 – June 1915", battles: ["Passchendaele", "Somme", "Arras", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["13/"], hotspot: ["Barnsley", "Wombwell", "Cudworth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2501, 3500], battalion: "13th (Service) Battalion (1st Barnsley)", date: "July 1915 - Dec 1915", battles: ["Passchendaele", "Somme", "Arras", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["13/"], hotspot: ["Barnsley", "Wombwell", "Cudworth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3501, 5000], battalion: "13th (Service) Battalion (1st Barnsley)", date: "Jan 1916 – Nov 1916", battles: ["Passchendaele", "Somme", "Arras", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["13/"], hotspot: ["Barnsley", "Wombwell", "Cudworth"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
{ range: [1, 2500], battalion: "14th (Service) Battalion (2nd Barnsley)", date: "Nov 1914 – June 1915", battles: ["Passchendaele", "Somme", "Arras", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["14/"], hotspot: ["Barnsley", "Darfield", "Penistone"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [2501, 3500], battalion: "14th (Service) Battalion (2nd Barnsley)", date: "July 1915 - Dec 1915", battles: ["Passchendaele", "Somme", "Arras", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["14/"], hotspot: ["Barnsley", "Darfield", "Penistone"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3501, 5000], battalion: "14th (Service) Battalion (2nd Barnsley)", date: "Jan 1916 – Nov 1916", battles: ["Passchendaele", "Somme", "Arras", "Hundred"], category: "service", requiresPrefix: true, allowedPrefixes: ["14/"], hotspot: ["Barnsley", "Darfield", "Penistone"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// MISC

  { range: [1, 200000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Barnsley, Darfield) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
{ range: [84001, 88000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },

],

"Yorkshire Regiment (Green Howards)": [
  // POST-1917 TF RENUMBERING
{ range: [200001, 240000], battalion: "4th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras"], category: "tf_renumbering", hotspot: ["Northallerton", "Richmond", "Stokesley"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [240001, 265000], battalion: "5th Territorial Force (TF) Battalion", tf: true, date: "Mar 1917-1918" , battles: ["Passchendaele", "Spring", "Arras"], category: "tf_renumbering", hotspot: ["Scarborough", "Whitby", "Pickering"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [265001, 290000], battalion: "18th Territorial Force (TF) Battalion", tf: true, date: "Jan 1917-1918" , category: "tf_renumbering", hotspot: ["Middlesborough", "Stockton on Tees", "Redcar"], theatre: "Home", },

//Regulars
{ range: [1, 10500], battalion: "1st or 2nd (Regular) Battalion", date: "Pre-WWI – Aug 1914" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_prewar", hotspot: ["Richmond", "Teeside Industrial Belt", "Northallerton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "India" }] },
{ range: [10501, 13900], battalion: "1st or 2nd (Regular) Battalion", date: "Aug 1914 – early 1916" , battles: ["Loos", "Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Richmond", "Teeside Industrial Belt", "Northallerton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "India" }] },
  { range: [13901, 19999], battalion: "1st or 2nd (Regular) Battalion", date: "1916 – 1918" , battles: ["Somme", "Passchendaele", "Arras"], category: "regular_wartime", hotspot: ["Richmond", "Teeside Industrial Belt", "Northallerton"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], alt: [{ bn: 1, theatre: "India" }] },

    // PRE-1917 TERRITORIAL FORCE
{ range: [1,1880], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "Pre-WWI – Jul 1914", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "tf_pre1917", hotspot: ["Richmond", "Scarborough", "Middlesbrough"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [1881,5000], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "Aug 1914 – mid 1915", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "tf_pre1917", hotspot: ["Richmond", "Scarborough", "Middlesbrough"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },
{ range: [5001,9999], battalion: "4th–5th Territorial Force (TF) Battalions", tf: true, date: "mid 1915 – early 1917", battles: ["Somme", "Passchendaele", "Spring", "Arras"], category: "tf_pre1917", hotspot: ["Richmond", "Scarborough", "Middlesbrough"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"] },


// SERVICE BATTALIONS (Kitchener’s Army)
{ range: [10501, 18000], battalion: "6th–9th (Service) Battalions", date: "Aug 1914 – June 1915" , battles: ["Loos", "Somme", "Arras", "Passchendaele"], category: "service", hotspot: ["Richmond", "Teeside Industrial Belt", "Scarborough"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [18001, 22000], battalion: "6th–9th (Service) Battalions", date: "July 1915 - Dec 1915" , battles: ["Loos", "Somme", "Arras", "Passchendaele"], category: "service", hotspot: ["Richmond", "Teeside Industrial Belt", "Scarborough"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [22001, 35000], battalion: "6th–9th (Service) Battalions", date: "Jan 1916 – Nov 1916" , battles: ["Somme", "Passchendaele", "Arras"], category: "service", hotspot: ["Richmond", "Teeside Industrial Belt", "Scarborough"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [35001, 48000], battalion: "6th–10th (Service) Battalions", date: "Dec 1916 – mid 1917" , battles: ["Passchendaele", "Arras"], category: "service", hotspot: ["Richmond", "Teeside Industrial Belt", "Scarborough"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
  
  { range: [1, 3000], battalion: "10th (Service) Battalion (Hull Commercials)", date: "Oct 1914 – June 1915" , battles: ["Hundred", "Somme", "Arras", "Passchendaele"], category: "service", requiresPrefix: true, allowedPrefixes: ["10/"], hotspot: ["Hull commercial district", "Beverley", "Cottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [3001, 4500], battalion: "10th (Service) Battalion (Hull Commercials)", date: "July 1915 - Dec 1915" , battles: ["Hundred", "Somme", "Arras", "Passchendaele"], category: "service", requiresPrefix: true, allowedPrefixes: ["10/"], hotspot: ["Hull commercial district", "Beverley", "Cottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },
{ range: [4501, 6000], battalion: "10th (Service) Battalion (Hull Commercials)", date: "Jan 1916 – Nov 1916" , battles: ["Hundred", "Somme", "Arras", "Passchendaele"], category: "service", requiresPrefix: true, allowedPrefixes: ["10/"], hotspot: ["Hull commercial district", "Beverley", "Cottingham"], cities: ["Brussels", "Calais", "Germany", "France", "Luxembourg", "Netherlands", "Liege", "Paris"], },

// MISC

  { range: [1, 200000], battalion: "3rd (Special Reserve) Battalion", date: "Pre-WWI – 1918", requiresPrefix: true, allowedPrefixes: ["3/"], category: "misc", hotspot: "Reserve battalions acted as clearing-houses, absorbing men from the regiment’s heartland (Richmond, Teeside industrial belt) but increasingly fed by conscripts and transfers from across Britain", theatre: "Home", },
 { range: [36001, 48000], battalion: "Training Reserve posting", date: "1st Sep 1916 – 27th Oct 1917", requiresPrefix: true, allowedPrefixes: ["TR/"], category: "training reserve", hotspot: "Training depots and regional brigades within the Army’s Training Reserve system", theatre: "Home", },
 
],

     
};
    
if (typeof window !== "undefined") {
  // Ensure global store exists
  window.WWI_REGIMENT_DATA = window.WWI_REGIMENT_DATA || {};

  // Merge new data in
  Object.assign(window.WWI_REGIMENT_DATA, regimentData);

  // Debug confirmation
  console.log("[DATA LINK] WWI_REGIMENT_DATA loaded with keys:", Object.keys(window.WWI_REGIMENT_DATA));
}



  /* ------------------------------
   * Minimal DOM helpers (scoped)
   * ------------------------------ */

(() => {
  "use strict";
  
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ------------------------------
   * Core anchors from the page
   * ------------------------------ */
  const startup   = $(".startup");    // startup screen container
  const wwiBtn    = $("#wwiBtn");     // startup -> WWI
  const wwiiBtn   = $("#wwiiBtn");    // startup -> WWII

  // Mode selection panels (the cards that offer two choices per era)
  const wwiModePanel  = $("#wwiModePanel");
  const wwiiModePanel = $("#wwiiModePanel");

  // Estimator panels (the full input/results UIs)
  const wwiPanel   = $("#wwiPanel");
  const wwiiPanel  = $("#wwiiPanel");
  const wwiBattalionPanel = $("#wwiBattalionPanel");
  const wwiiRegimentalPanel = $("#wwiiRegimentalPanel");

  // Create a mount target for whatever panel is currently visible
  const panelMount = document.createElement("div");
  panelMount.id = "panelMount";
  // Insert mount right after the startup block if possible, else at end of body
  if (startup && startup.parentNode) {
    startup.parentNode.insertBefore(panelMount, startup.nextSibling);
  } else {
    document.body.appendChild(panelMount);
  }

  // A parking lot to hold panels while not visible (prevents duplicate IDs in DOM)
  const PARK = document.createDocumentFragment();

  function stashInitialPanels() {
    [wwiModePanel, wwiiModePanel, wwiPanel, wwiiPanel, wwiBattalionPanel, wwiiRegimentalPanel].forEach(node => {
      if (node && node.parentNode) {
        node.classList.add("hidden"); // ensure hidden while parked
        PARK.appendChild(node);
      }
    });
  }
  stashInitialPanels();

  /* ------------------------------
   * Global state
   * ------------------------------ */
  let activeEra = null;      // "wwi" | "wwii" | null
  let bootedWWI = false;
  let bootedWWII = false;

  // Safe no-op estimates until real ones are installed by later sections
  window.__wwiEstimate  = undefined;
  window.__wwiiEstimate = undefined;
  window.estimate = function () {
    console.warn("[DualAxis OS] estimate() called before estimator is initialised.");
  };

  /* ------------------------------
   * Utilities
   * ------------------------------ */
  function clearMount() {
    while (panelMount.firstChild) panelMount.removeChild(panelMount.firstChild);
  }

function mountNode(node) {
  if (!node) return;
  node.classList.remove("hidden");
  panelMount.appendChild(node);
  try { panelMount.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) {}
  queueEstimatorHeight();
}

   function sendEstimatorHeight() {
  const height = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight
  );

  window.parent.postMessage(
    {
      type: "setHeight",
      height: height
    },
    "https://britisharmyservicenumbers.co.uk"
  );
}

function queueEstimatorHeight() {
  setTimeout(sendEstimatorHeight, 50);
  setTimeout(sendEstimatorHeight, 250);
  setTimeout(sendEstimatorHeight, 600);
}
  
// ============================================================
// UNIVERSAL BACK-TO-HOME BUTTON — INSIDE KHAKI ESTIMATOR BORDER
// ============================================================
function addBackHomeButton(target = panelMount) {
  // Don’t add on startup or if one already exists
  if (!target || target.id === "startup" || target.querySelector(".back-home-link")) return;

  const btn = document.createElement("a");
  btn.textContent = "← Back to Home";
  btn.className = "back-home-link";

  // click handler
btn.addEventListener("click", () => {
  clearMount();
  if (startup) {
    startup.classList.remove("hidden");
    startup.scrollIntoView({ behavior: "smooth" });
  }
  queueEstimatorHeight();
});

  // === find the estimator container and append inside it ===
  const container = target.querySelector(".estimator-container");
  if (container) {
    const footer = document.createElement("div");
    footer.className = "back-home-wrap";
    footer.style.textAlign = "center";
    footer.style.marginTop = "15px";
    footer.appendChild(btn);
    container.appendChild(footer);   // ✅ inside the khaki border
  } else {
    console.warn("No .estimator-container found – using fallback");
    target.appendChild(btn);
  }
}



  function showErrorBox(message) {
    const box = document.createElement("div");
    box.style.cssText = "padding:12px;border:2px solid #b00;background:#fee;color:#900;border-radius:10px;margin:10px 0;font-weight:700;";
    box.textContent = message;
    panelMount.prepend(box);
  }

  /* ------------------------------
   * Mode mounting
   * ------------------------------ */
  function showMode(era) {
    clearMount();

    if (era === "wwi") {
      if (!wwiModePanel) return showErrorBox("WWI mode panel not found.");
      mountNode(wwiModePanel);
      activeEra = "wwi";
      bindWWIModeButtons();
      // ensure estimate() points nowhere dangerous
      window.estimate = function(){ console.warn("[DualAxis OS] WWI estimate not initialised yet."); };
      return;
    }

    if (era === "wwii") {
      if (!wwiiModePanel) return showErrorBox("WWII mode panel not found.");
      mountNode(wwiiModePanel);
      activeEra = "wwii";
      bindWWIIModeButtons();
      // ensure estimate() points nowhere dangerous
      window.estimate = function(){ console.warn("[DualAxis OS] WWII estimate not initialised yet."); };
      return;
    }
  }

  /* ------------------------------
   * Bind buttons inside WWI mode card
   * ------------------------------ */
  function bindWWIModeButtons() {
    const estimatorBtn = $("#wwiEstimatorBtn", panelMount);
    const researchBtn  = $("#wwiResearchBtn", panelMount);

    if (estimatorBtn) {
      estimatorBtn.onclick = () => {
        // Move in the WWI estimator panel
        clearMount();
        if (wwiPanel) {
          mountNode(wwiPanel);
          addBackHomeButton(panelMount);
          // Boot once
          if (!bootedWWI) { bootedWWI = true; try { HRBootWWI(); } catch (e) { console.error("HRBootWWI() failed:", e); } }
          // Wire the public estimate() to the WWI implementation if present
          if (typeof window.__wwiEstimate === "function") {
            window.estimate = window.__wwiEstimate;
          }
        } else {
          showErrorBox("WWI estimator panel not found.");
        }
      };
    }

if (researchBtn) {
  researchBtn.onclick = () => {
    clearMount();
    if (wwiBattalionPanel) {
      mountNode(wwiBattalionPanel);
      addBackHomeButton(panelMount);
      // Boot function for dropdown logic
      if (!window.bootedWWIBattalion) {
        window.bootedWWIBattalion = true;
        try { HRBootWWIBattalion(); } 
        catch (e) { console.error("HRBootWWIBattalion() failed:", e); }
      }
    } else {
      showErrorBox("WWI Battalion panel not found.");
    }
  };
}
  }

  /* ------------------------------
   * Bind buttons inside WWII mode card
   * ------------------------------ */
  function bindWWIIModeButtons() {
    const estimatorBtn = $("#wwiiEstimatorBtn", panelMount);
    const researchBtn  = $("#wwiiResearchBtn", panelMount);

    if (estimatorBtn) {
      estimatorBtn.onclick = () => {
        clearMount();
        if (wwiiPanel) {
          mountNode(wwiiPanel);
          addBackHomeButton(panelMount);
          if (!bootedWWII) { bootedWWII = true; try { HRBootWWII(); } catch (e) { console.error("HRBootWWII() failed:", e); } }
          if (typeof window.__wwiiEstimate === "function") {
            window.estimate = window.__wwiiEstimate;
          }
        } else {
          showErrorBox("WWII estimator panel not found.");
        }
      };
    }

if (researchBtn) {
  researchBtn.onclick = () => {
    clearMount();
    if (wwiiRegimentalPanel) {
      mountNode(wwiiRegimentalPanel);
      addBackHomeButton(panelMount);
      if (!window.bootedWWIIRegimental) {
        window.bootedWWIIRegimental = true;
        try { HRBootWWIIRegimental(); }
        catch (e) { console.error("HRBootWWIIRegimental() failed:", e); }
      }
    } else {
      showErrorBox("WWII Regimental panel not found.");
    }
  };
}
  }

  /* ------------------------------
   * Startup button wiring
   * ------------------------------ */
  function hideStartup() {
    if (startup) startup.classList.add("hidden");
  }

function wireStartupButtons() {
  if (wwiBtn) {
    wwiBtn.addEventListener("click", () => {
      hideStartup();
      showMode("wwi");
      queueEstimatorHeight();
    });
  }
  if (wwiiBtn) {
    wwiiBtn.addEventListener("click", () => {
      hideStartup();
      showMode("wwii");
      queueEstimatorHeight();
    });
  }
}

  /* ------------------------------
   * Initialise once DOM is ready
   * ------------------------------ */
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

ready(() => {
  wireStartupButtons();
  // Do NOT auto-show an era; we stay on the startup screen until the user chooses.
  queueEstimatorHeight();
});
})();

/* ============================================================
   SECTION B: WWI MODE + ESTIMATOR
   ============================================================ */

/* ============================================================
   PREFIX SUBSYSTEM — UNIFIED FOR DUAL AXIS (WWI)
   Based on the old working estimator, rebuilt cleanly
   ============================================================ */

function hrNormalise(input) {
  return String(input || "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "");
}

// Extract prefix + numeric from anything:
//  S/1234, S-1234, S 1234, 28/852, 3/9123, TR/12345, G/9999
function hrParsePrefix(raw) {
  const s = hrNormalise(raw);

  // Full match: prefix + separator + digits
  // prefix = 1–3 letters OR 1–2 digits
  const m = s.match(/^([A-Z]{1,5}|[0-9]{1,2})[\/\-\s]([0-9]+)$/);

  if (!m) {
    // No prefix => whole thing is numeric attempt
    return {
      prefix: null,
      numeric: Number(s.replace(/\D+/g, "")) || null
    };
  }

  return {
    prefix: m[1] + "/",     // normalise all prefixes to "X/"
    numeric: Number(m[2]) || null
  };
}

// Check if a prefix is allowed in this block
function hrPrefixAllowed(prefix, block) {
  if (!block.requiresPrefix) return true;      // no prefix required
  if (!prefix) return false;                   // prefix required but missing

  const allowed = Array.isArray(block.allowedPrefixes)
    ? block.allowedPrefixes
    : [];

  const p = prefix.toUpperCase();              // eg "S/"

  return allowed.some(a =>
    p.startsWith(a.toUpperCase().replace("/", ""))
  );
}

// Evidence marker for AI confidence logic
function hrPrefixEvidence(prefix, block) {
  if (!block.requiresPrefix) return false;
  return !!prefix;
}

/* ============================================================
   SECTION F — UNIVERSAL CASUALTY BURDEN (all four axes)
   ============================================================ */

// F.1 — Minimal dataset (expand later)
const casualtyBurdenData = {
  "Argyll & Sutherland Highlanders": { wwi: 6900, wwii: 2151 },
  "Bedfordshire Regiment": { wwi: 6500 },
  "Black Watch (Royal Highland Regiment)": { wwi: 8390, wwii: 2329 },
  "Border Regiment": { wwi: 7450, wwii: 1186 },
  "Buffs (East Kent Regiment)": { wwi: 6000, wwii: 1336 },
  "Cambridgeshire Regiment": { wwi: 870, wwii: 745 },
  "Cameronians (Scottish Rifles)": { wwi: 7070, wwii: 1275 },
  "Cheshire Regiment": { wwi: 8420, wwii: 779 },
  "Connaught Rangers": { wwi: 2050 },
  "Devonshire Regiment": { wwi: 5790, wwii: 1056 },
  "Dorsetshire Regiment": { wwi: 4060, wwii: 1278 },
  "Duke of Cornwall's Light Infantry": { wwi: 4510, wwii: 864 },
  "Duke of Wellington's (West Riding Regiment)": { wwi: 7870, wwii: 1104 },
  "Durham Light Infantry": { wwi: 12530, wwii: 3124 },
  "East Lancashire Regiment": { wwi: 7000, wwii: 727 },
  "East Surrey Regiment": { wwi: 6750, wwii: 1227 },
  "East Yorkshire Regiment": { wwi: 7480, wwii: 1071 },
  "Essex Regiment": { wwi: 8860, wwii: 1187 },
  "Gloucestershire Regiment": { wwi: 8100, wwii: 876 },
  "Gordon Highlanders": { wwi: 8870, wwii: 2284 },
  "Hampshire Regiment": { wwi: 7580, wwii: 2163 },
  "Herefordshire Regiment": { wwi: 480, wwii: 280 },
  "Highland Light Infantry": { wwi: 10030, wwii: 1410 },
  "Hertfordshire Regiment": { wwi: 900 },
  "King's (Liverpool Regiment)": { wwi: 14200, wwii: 1060 },
  "King's Own (Royal Lancaster Regiment)": { wwi: 5500 },
  "King's Own Scottish Borderers": { wwi: 7740, wwii: 1400 },
  "King’s Own Yorkshire Light Infantry": { wwi: 9450, wwii: 1198 },
  "King's Royal Rifle Corps": { wwi: 12840, wwii: 1179 },
  "King's Shropshire Light Infantry": { wwi: 4710, wwii: 1101 },
  "Lancashire Fusiliers": { wwi: 13640, wwii: 1366 },
  "Leicestershire Regiment": { wwi: 6870, wwii: 1332 },
  "Lincolnshire Regiment": { wwi: 8800, wwii: 1198 },
  "London Regiment": { wwi: 29100, },
  "Loyal North Lancashire Regiment": { wwi: 7590, wwii: 1110 },
  "Manchester Regiment": { wwi: 13770, wwii: 1006 },
  "Middlesex Regiment": { wwi: 12720, wwii: 1266 },
  "Monmouthshire Regiment": { wwi: 2430, wwii: 548 },
  "Norfolk Regiment": { wwi: 6000, wwii: 2075 },
  "North Staffordshire Regiment (Prince of Wales's)": { wwi: 5430, wwii: 712 },
  "Northamptonshire Regiment": { wwi: 5950, wwii: 968 },
  "Northumberland Fusiliers": { wwi: 16000, wwii: 899 },
  "Oxfordshire & Buckinghamshire Light Infantry": { wwi: 5880, wwii: 1414 },
  "Queen's Own Cameron Highlanders": { wwi: 5930, wwii: 1612 },
  "Queen's Own Royal West Kent Regiment": { wwi: 6900, wwii: 1739 },
  "Queen's (Royal West Surrey Regiment)": { wwi: 8000, wwii: 2742 },
  "Rifle Brigade (The Prince Consort’s Own)": { wwi: 11580, wwii: 1298 },
  "Royal Berkshire Regiment": { wwi: 7140, wwii: 1148 },
  "Royal Dublin Fusiliers": { wwi: 4780 },
  "Royal Fusiliers (City of London Regiment)": { wwi: 15600, wwii: 1804 },
  "Royal Irish Fusiliers": { wwi: 3330, wwii: 538 },
  "Royal Irish Regiment": { wwi: 2780 },
  "Royal Irish Rifles": { wwi: 7010 },
  "Royal Inniskilling Fusiliers": { wwi: 5890, wwii: 1164 },
  "Royal Munster Fusiliers": { wwi: 3070 },
  "Royal Scots": { wwi: 11160, wwii: 1306 },
  "Royal Scots Fusiliers": { wwi: 5600, wwii: 1094 },
  "Royal Sussex Regiment": { wwi: 6500, wwii: 1109 },
  "Royal Warwickshire Regiment": { wwi: 11610, wwii: 1149 },
  "Royal Welch Fusiliers": { wwi: 9800, wwii: 1428 },
  "Seaforth Highlanders": { wwi: 8830, wwii: 1912 },
  "Sherwood Foresters (Notts & Derby Regiment)": { wwi: 11410, wwii: 1577 },
  "Somerset Light Infantry (Prince Albert's)": { wwi: 4760, wwii: 949 },
  "South Lancashire Regiment": { wwi: 5450, wwii: 843 },
  "South Staffordshire Regiment": { wwi: 6360, wwii: 1191 },
  "South Wales Borderers": { wwi: 5600, wwii: 568 },
  "Suffolk Regiment": { wwi: 6550, wwii: 1465 },
  "Welsh Regiment": { wwi: 8360, wwii: 1307 },
  "West Yorkshire Regiment (Prince of Wales's Own)": { wwi: 12700, wwii: 1092 },
  "Wiltshire Regiment": { wwi: 5200, wwii: 1109 },
  "Worcestershire Regiment": { wwi: 9460, wwii: 1022 },
  "York & Lancaster Regiment": { wwi: 8810, wwii: 1190 },
  "Yorkshire Regiment (Green Howards)": { wwi: 7500, wwii: 1625 },
  "Royal Artillery": { wwii: 31968 },
  "Royal Engineers": { wwii: 12821 },
  "Royal Corps of Signals": { wwii: 4909 },
  "Grenadier Guards": { wwii: 1534 },
  "Coldstream Guards": { wwii: 1492 },
  "Scots Guards": { wwii: 1103 },
  "Irish Guards": { wwii: 837 },
  "Welsh Guards": { wwii: 678 },
  "The King's Own Royal Regiment": { wwii: 821 },
  "Bedfordshire & Hertfordshire Regiment": { wwii: 1087 },
  "The Inns of Court Regiment": { wwii: 64 },
  "Honourable Artillery Company (Infantry)": { wwii: 700 },
  "Royal Ulster Rifles": { wwii: 986 },
  "(Royal) Military Police": { wwii: 997 },
  "Small Arms School Corps": { wwii: 0 },
  "Royal Tank Regiment": { wwii: 2756 },
  "Intelligence Corps": { wwii: 273 },
  "Reconnaissance Corps": { wwii: 1084 },
  "Army Catering Corps": { wwii: 865 },
  "(Royal) Pioneer Corps": { wwii: 3500 },
  "The Lowland Regiment": { wwii: 0 },
  "The Highland Regiment": { wwii: 0 },
  "Royal Electrical & Mechanical Engineers": { wwii: 2121 },
  "The Lowland Regiment": { wwii: 4 },
  "The Highland Regiment": { wwii: 5 },
  "Royal Armoured Corps": { wwii: 7060 },
  "Lancers": { wwii: 478 },
  "Dragoons": { wwii: 504 },
  "Hussars": { wwii: 1648 },
  "Life Guards": { wwii: 6394 },
  "Royal Horse Guards": { wwii: 91 },
  "Royal Army Service Corps": { wwii: 9200 }
  
};

const globalBurdenUnits = [
  "Royal Army Medical Corps",
  "(Royal) Army Dental Corps",
  "Royal Army Ordnance Corps",
  "(Royal) Army Pay Corps",
  "Military Provost Staff Corps",
  "(Royal) Army Education Corps",
  "Indian local enlistments",
  "Small Arms School Corps",
  "Band of the Royal Military College",
  "Royal Army Veterinary Corps",
  "Militia",
  "Army Physical Training (Staff) Corps",
  "General Service Corps",
  "Non-Combatant Corps",
  
];

// F.2 — Totals for each war (used for burden % of Army deaths)
const totalArmyDeaths = { wwi: 956703, wwii: 224427 };

// F.3 — Map burden % to bar label + width + colour
function getBurdenBand(pct) {
  if (pct >= 1.0)  return { label: "High",   width: 100, color: "#d73027" };
  if (pct >= 0.5)  return { label: "Medium", width: 66,  color: "#fdae61" };
  return               { label: "Low",    width: 33,  color: "#78c679" };
}

// F.4 — Universal renderer (returns a complete .wwi-card block)
function renderCasualtyBurdenCard(regimentName, era) {
  if (globalBurdenUnits.includes(regimentName)) {
    return `
      <div class="wwi-card">
        <h3>Regimental Casualty Toll</h3>
        <p>
          Duties were diverse and widely distributed across theatres.
          Specific regimental casualty figures can’t be reliably inferred,
          so a comparative national sacrifice bar isn’t shown.
        </p>
      </div>
    `;
  }
  const deaths = casualtyBurdenData[regimentName]?.[era];
  if (!deaths) return ""; // quietly skip if we don't have data yet

  // Use era-specific deaths→casualties ratio
  const deathToCasualtyRatio = (era === "wwi") ? 0.30 : 0.394;

  const estCasualties = Math.round(deaths / deathToCasualtyRatio);
  const burdenPct = (deaths / totalArmyDeaths[era]) * 100;
  const band = getBurdenBand(burdenPct);
  const bandKey = band.label.toLowerCase(); // "low" | "medium" | "high"

  // Return a full card so every axis can drop it straight into its grid
return `
  <div class="wwi-card">
    <h3>Regimental Casualty Toll</h3>
    <p><strong>Deaths:</strong> ${deaths.toLocaleString()}</p>
    <p><strong>Estimated Total Casualties:</strong> ~${estCasualties.toLocaleString()}</p>
    <p><strong>National Sacrifice:</strong> ${band.label} (${burdenPct.toFixed(2)}% of Army deaths)</p>
   <div class="burden-bar" data-active="${bandKey}">
  <div class="burden-segment low" title="Low"></div>
  <div class="burden-segment medium" title="Medium"></div>
  <div class="burden-segment high" title="High"></div>
</div>

    <small class="burden-note" style="display:block;margin-top:6px;color:#555;">
      National sacrifice is calculated as a percentage of all Army deaths in the conflict.
    </small>
  </div>
`;

}

// ============================================================
// SHARED REGIMENT TYPEAHEAD  (used by both WWI panels)
// ============================================================

// 1) Global regiment list (moved out of HRBootWWI for reuse)
window.REGIMENT_LIST = [
  "Argyll & Sutherland Highlanders",
  "Bedfordshire Regiment",
  "Black Watch (Royal Highland Regiment)",
  "Border Regiment",
  "Buffs (East Kent Regiment)",
  "Cambridgeshire Regiment",
  "Cameronians (Scottish Rifles)",
  "Cheshire Regiment",
  "Connaught Rangers",
  "Devonshire Regiment",
  "Dorsetshire Regiment",
  "Duke of Cornwall's Light Infantry",
  "Duke of Wellington's (West Riding Regiment)",
  "Durham Light Infantry",
  "East Lancashire Regiment",
  "East Surrey Regiment",
  "East Yorkshire Regiment",
  "Essex Regiment",
  "Gloucestershire Regiment",
  "Gordon Highlanders",
  "Hampshire Regiment",
  "Herefordshire Regiment",
  "Highland Light Infantry",
  "Hertfordshire Regiment",
  "King's (Liverpool Regiment)",
  "King's Own (Royal Lancaster Regiment)",
  "King's Own Scottish Borderers",
  "King’s Own Yorkshire Light Infantry",
  "King's Royal Rifle Corps",
  "King's Shropshire Light Infantry",
  "Lancashire Fusiliers",
  "Leicestershire Regiment",
  "Lincolnshire Regiment",
  "London Regiment",
  "Loyal North Lancashire Regiment",
  "Manchester Regiment",
  "Middlesex Regiment",
  "Monmouthshire Regiment",
  "Norfolk Regiment",
  "North Staffordshire Regiment (Prince of Wales's)",
  "Northamptonshire Regiment",
  "Northumberland Fusiliers",
  "Oxfordshire & Buckinghamshire Light Infantry",
  "Queen's Own Cameron Highlanders",
  "Queen's Own Royal West Kent Regiment",
  "Queen's (Royal West Surrey Regiment)",
  "Rifle Brigade (The Prince Consort’s Own)",
  "Royal Berkshire Regiment",
  "Royal Dublin Fusiliers",
  "Royal Fusiliers (City of London Regiment)",
  "Royal Irish Fusiliers",
  "Royal Irish Regiment",
  "Royal Irish Rifles",
  "Royal Inniskilling Fusiliers",
  "Royal Munster Fusiliers",
  "Royal Scots",
  "Royal Scots Fusiliers",
  "Royal Sussex Regiment",
  "Royal Warwickshire Regiment",
  "Royal Welch Fusiliers",
  "Seaforth Highlanders",
  "Sherwood Foresters (Notts & Derby Regiment)",
  "Somerset Light Infantry (Prince Albert's)",
  "South Lancashire Regiment",
  "South Staffordshire Regiment",
  "South Wales Borderers",
  "Suffolk Regiment",
  "Welsh Regiment",
  "West Yorkshire Regiment (Prince of Wales's Own)",
  "Wiltshire Regiment",
  "Worcestershire Regiment",
  "York & Lancaster Regiment",
  "Yorkshire Regiment (Green Howards)"
];

// ============================================================
// MANUAL BATTALION LISTS (for dropdown only)
// ============================================================
window.BATTALION_LISTS = {
  
    "Argyll & Sutherland Highlanders": [
    { name: "1st Battalion (Regular)",  outbreak: "stationed at Dinapore, India" },
    { name: "2nd Battalion (Regular)",  outbreak: "stationed at Fort George, Scotland" },
    { name: "5th Battalion (Territorial)",  outbreak: "stationed at Finnart Street, Greenock" },
    { name: "6th Battalion (Territorial)",  outbreak: "stationed at High Street, Paisley" },
    { name: "7th Battalion (Territorial)",  outbreak: "stationed at Sterling, Scotland"  },
    { name: "8th Battalion (Territorial)",  outbreak: "stationed at Dunoon, Scotland"  },
    { name: "9th Battalion (Territorial)",  outbreak: "stationed at Hartfield, Dunbarton" },
    { name: "10th Battalion (Service)", outbreak: "formed at Sterling, Scotland in August 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Sterling, Scotland in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Sterling, Scotland in September 1914" },
    { name: "14th Battalion (Service)", outbreak: "formed at Sterling, Scotland in early 1915" }
  ],
  
      "Bedfordshire Regiment": [
    { name: "1st Battalion (Regular)",  outbreak: "stationed at Mullingar, India" },
    { name: "2nd Battalion (Regular)",  outbreak: "stationed at Pretoria, South Africa" },
    { name: "5th Battalion (Territorial)",  outbreak: "stationed at Gwyn Street, Bedford" },
    { name: "6th Battalion (Service)", outbreak: "formed at Bedford, Bedfordshire in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Bedford, Bedfordshire in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Bedford, Bedfordshire in September 1914" },
    { name: "11th Battalion (Territorial)",  outbreak: "formed at Lowestoft, Suffolk in January 1917" },
    { name: "1st Huntingdonshire Cyclist Battalion (Territorial)",  outbreak: "stationed at St Marys Street, Huntington" },
  ],
  
      "Black Watch (Royal Highland Regiment)": [
    { name: "1st Battalion (Regular)",  outbreak: "stationed at Oudenarde Barracks, Aldershot" },
    { name: "2nd Battalion (Regular)",  outbreak: "stationed at Bareilly, India" },
    { name: "4th Battalion (Territorial)",  outbreak: "stationed at Dundee, Scotland" },
    { name: "5th Battalion (Territorial)",  outbreak: "stationed at Arbroath, Scotland" },
    { name: "6th Battalion (Territorial)",  outbreak: "stationed at Perth, Scotland"  },
    { name: "7th Battalion (Territorial)",  outbreak: "stationed at St Andrews, Scotland"  },
    { name: "8th Battalion (Service)", outbreak: "formed at Perth, Scotland in August 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Perth, Scotland in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Perth, Scotland in September 1914" },
    { name: "13th (Scottish Horse Yeomanry) Battalion (Territorial)",  outbreak: "formed at Abbassia, Egypt in October 1916" },
    { name: "14th (Fife & Forfar Yeomanry) Battalion (Territorial)",  outbreak: "formed at Moascar, Egypt in December 1916" },
    { name: "1st Highland Cyclist Territorial Force (TF) Battalion",  outbreak: "stationed at Kirkaldy, Fife" },
  ],
  
        "Border Regiment": [
    { name: "1st Battalion (Regular)",  outbreak: "stationed at Maymyo, Burma" },
    { name: "2nd Battalion (Regular)",  outbreak: "stationed at Pembroke Docks, Wales" },
    { name: "4th Battalion (Territorial)",  outbreak: "stationed at Strand Road, Carlisle" },
    { name: "5th Battalion (Territorial)",  outbreak: "stationed at Workington, Cumbria " },
    { name: "6th Battalion (Service)", outbreak: "formed at Carlisle, Cumbria in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Carlisle, Cumbria in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Carlisle, Cumbria in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Carlisle, Cumbria in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Carlisle, Cumbria in September 1914" },
  ],
  
         "Buffs (East Kent Regiment)": [
    { name: "1st Battalion (Regular)",  outbreak: "stationed at Fermoy, Ireland" },
    { name: "2nd Battalion (Regular)",  outbreak: "stationed at Madras, India" },
    { name: "4th Battalion (Territorial)",  outbreak: "stationed at Canterbury, Kent" },
    { name: "5th Battalion (Territorial)",  outbreak: "stationed at Ashford, Kent" },
    { name: "6th Battalion (Service)", outbreak: "formed at Canterbury, Kent in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Canterbury, Kent in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Canterbury, Kent in September 1914" },
    { name: "10th (Royal East Kent and West Kent Yeomanry) Battalion (Territorial)",  outbreak: "formed at Sollum, Egypt in February 1917" },    
   ],
  
           "Cambridgeshire Regiment": [
    { name: "1st Battalion (Territorial)",  outbreak: "stationed at Corn Exchange Street, Cambridge" },
   ],
  
         "Cameronians (Scottish Rifles)": [
    { name: "1st Battalion (Regular)",  outbreak: "stationed at Glasgow, Scotland" },
    { name: "2nd Battalion (Regular)",  outbreak: "stationed at Malta in the Mediterranean" },
    { name: "5th Battalion (Territorial)",  outbreak: "stationed at Princes Street, Glasgow" },
    { name: "6th Battalion (Territorial)",  outbreak: "stationed at Muirhall, Hamilton" },
    { name: "7th Battalion (Territorial)",  outbreak: "stationed at Victoria Road, Glasgow" },
    { name: "8th Battalion (Territorial)",  outbreak: "stationed at Cathedral Street, Glasgow" },
    { name: "9th Battalion (Service)", outbreak: "formed at Hamilton, Scotland in August 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Hamilton, Scotland in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Hamilton, Scotland in October 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at Hamilton, Scotland in July 1915" },
    { name: "15th Battalion (Territorial)",  outbreak: "formed at Deal, Kent in January 1917" },
  ],
  
          "Cheshire Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Londonderry, Northern Ireland" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Jubbulpore, India" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Grange Road West, Birkenhead" }, 
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Volunteer Street, Chester" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at The Armoury, Stockport" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at The Drill Hall, Macclesfield" },
    { name: "8th Battalion (Service)", outbreak: "formed at Chester, Cheshire in August 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Chester, Cheshire in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Chester, Cheshire in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Chester, Cheshire in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Chester, Cheshire in September 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at Port Sunlight, Wirral in September 1914" },
    { name: "15th Battalion (Service)", outbreak: "formed at Birkenhead, Wirral in November 1914" },
    { name: "16th Battalion (Service)", outbreak: "formed at Birkenhead, Wirral in December 1914" },
  ],
  
   "Connaught Rangers": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Ferozepore, India" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Barossa Barracks, Aldershot" },
    { name: "5th Battalion (Service)", outbreak: "formed at Dublin, Ireland in August 1914" },
    { name: "6th Battalion (Service)", outbreak: "formed at Kilworth, County Cork in September 1914" },
  ],
  
   "Devonshire Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Jersey, Channel Islands" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Cairo, Egypt" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Exeter, Devonshire" }, 
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Millbay, Plymouth" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Barnstaple, Devonshire" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Exeter, Devonshire" },
    { name: "8th Battalion (Service)", outbreak: "formed at Exeter, Devonshire in August 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Exeter, Devonshire in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Exeter, Devonshire in September 1914" },
    { name: "15th Battalion (Territorial)", outbreak: "formed at Herne Bay, Kent in January 1917" },
    { name: "16th (Royal 1st Devon & Royal North Devon Yeomanry) Battalion (Territorial)", outbreak: "formed at Moascar, Egypt in January 1917" },     
  ],
  
     "Dorsetshire Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Belfast, Northern Ireland" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Pune, India" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Dorchester, Dorsetshire" }, 
    { name: "5th Battalion (Service)", outbreak: "formed at Dorchester, Dorsetshire in August 1914" },
    { name: "6th Battalion (Service)", outbreak: "formed at Dorchester, Dorsetshire in September 1914" },
  ],
  
    "Duke of Cornwall's Light Infantry": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Curragh, Ireland" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Hong Kong" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Truro, Cornwall" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Bodmin, Cornwall" },
    { name: "6th Battalion (Service)", outbreak: "formed at Bodmin, Cornwall in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Bodmin, Cornwall in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Bodmin, Cornwall in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Truro, Cornwall in March 1915" },
   ],
  
      "Duke of Wellington's (West Riding Regiment)": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Lahore, India" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Dublin, Ireland" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Halifax, Yorkshire" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Huddersfield, Yorkshire" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Skipton in Craven, Yorkshire" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Milnsbridge, Yorkshire" },
    { name: "8th Battalion (Service)", outbreak: "formed at Halifax, Yorkshire in August 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Halifax, Yorkshire in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Halifax, Yorkshire in March 1915" },
   ],
  
        "Durham Light Infantry": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Nowshera, India" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Lichfield, Staffordshire" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Drill Hall, Stockton on Tees" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Drill Hall, Bishop Auckland" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Livingstone Road, Sunderland" },
    { name: "8th Battalion (Territorial)", outbreak: "stationed at Gilesgate, Durham" },
    { name: "9th Battalion (Territorial)", outbreak: "stationed at Burts Terrace, Gateshead" },
    { name: "10th Battalion (Service)", outbreak: "formed at Newcastle, Tyne and Wear in August 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Newcastle, Tyne and Wear in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Newcastle, Tyne and Wear in September 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at Newcastle, Tyne and Wear in September 1914" },
    { name: "14th Battalion (Service)", outbreak: "formed at Newcastle, Tyne and Wear in September 1914" },
    { name: "15th Battalion (Service)", outbreak: "formed at Newcastle, Tyne and Wear in September 1914" },
    { name: "18th Battalion (Service)", outbreak: "formed at Cocken Hall, Durham in September 1914" },
    { name: "19th Battalion (Service)", outbreak: "formed at Durham, County Durham in January 1915" },
    { name: "20th Battalion (Service)", outbreak: "formed at Sunderland, Tyne and Wear in July 1915" },
    { name: "22nd Battalion (Service)", outbreak: "formed at Durham, County Durham in October 1915" },
   ],
  
        "East Lancashire Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Colchester, Essex" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Wynberg, South Africa" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Blackburn, Lancashire" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Burnley, Lancashire" },
    { name: "6th Battalion (Service)", outbreak: "formed at Preston, Lancashire in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Preston, Lancashire in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Preston, Lancashire in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Preston, Lancashire in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Accrington, Lancashire in September 1914" },
   ],
  
          "East Surrey Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Dublin, Ireland" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Chaubatia, India" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at St Georges Road, Wimbledon" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Orchard Road, Kingston on Thames" },
    { name: "7th Battalion (Service)", outbreak: "formed at Kingston on Thames, London in August 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Kingston on Thames, London in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Kingston on Thames, London in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Bermondsey, London in May 1915" },
    { name: "13th Battalion (Service)", outbreak: "formed at Dover, Kent in October 1914" },
   ],
  
            "East Yorkshire Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at York, Yorkshire" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Kamptee, India" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Londesborough Barracks, Hull" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Park Street, Hull" },
    { name: "6th Battalion (Service)", outbreak: "formed at Beverley, Yorkshire in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Beverley, Yorkshire in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Beverley, Yorkshire in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Hull, Yorkshire in August 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Hull, Yorkshire in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Hull, Yorkshire in August 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at Hull, Yorkshire in November 1914" },
   ],
  
              "Essex Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Mauritius, East Africa" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Chatham, Kent" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Brentwood, Essex" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Market Road, Chelmsford" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at West Ham, London" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Church Hill, Walthamstow" },
    { name: "8th Battalion (Territorial)", outbreak: "stationed at Colchester, Essex" },
    { name: "9th Battalion (Service)", outbreak: "formed at Warley, Essex in August 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Warley, Essex in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Warley, Essex in September 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at West Ham, London in December 1914" },
    { name: "15th Battalion (Territorial)", outbreak: "formed at Yarmouth, Isle of Wight in January 1917" },
    { name: "16th Battalion (Territorial)", outbreak: "formed at Fleet, Hampshire in January 1917" },
   ],
  
  "Gloucestershire Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Bordon, Hampshire" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Tientsin, China" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Queens Road in Clifton, Bristol" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Gloucester, Gloucestershire" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at St. Michaels Hill, Bristol" },
    { name: "7th Battalion (Service)", outbreak: "formed at Bristol, Gloucestershire in August 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Bristol, Gloucestershire in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Bristol, Gloucestershire in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Bristol, Gloucestershire in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Bristol, Gloucestershire in August 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at Malvern, Worcestershire in December 1914" },
    { name: "14th Battalion (Service)", outbreak: "formed at Bristol, Gloucestershire in April 1915" },
    { name: "17th Battalion (Territorial)", outbreak: "formed at Walton-on-the-Naze, Essex in January 1917" }
  ],
  
    "Gordon Highlanders": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Plymouth, Devonshire" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Cairo, Egypt" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Aberdeen, Scotland" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Peterhead, Aberdeenshire" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Keith, Banffshire" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Banchory, Aberdeenshire" },
    { name: "8th Battalion (Service)", outbreak: "formed at Aberdeen, Scotland in August 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Aberdeen, Scotland in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Aberdeen, Scotland in September 1914" },
    { name: "1st Shetland Companies (Territorial)", outbreak: "stationed at Lerwick, Shetland" },
   ],
  
  
  
      "Hampshire Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Colchester, Essex" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Mhow, India" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Winchester, Hampshire" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Carlton Place, Hampshire" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Connaught Road, Portsmouth" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Holdenhurst Road, Bournemouth" },
    { name: "8th Battalion (Territorial)", outbreak: "stationed at Newport, Isle of Wight" },
    { name: "9th Cyclist Battalion (Territorial)", outbreak: "stationed at Commercial Road, Southampton" },
    { name: "10th Battalion (Service)", outbreak: "formed at Winchester, Hampshire in August 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Winchester, Hampshire in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Winchester, Hampshire in October 1914" },
    { name: "14th Battalion (Service)", outbreak: "formed at Portsmouth, Devonshire in September 1914" },
    { name: "15th Battalion (Service)", outbreak: "formed at Portsmouth, Devonshire in April 1915" },
    { name: "17th Battalion (Territorial)", outbreak: "formed at Herne Bay, Kent in January 1917" },
   ],
  
   "Herefordshire Regiment": [
    { name: "1st Battalion (Territorial)", outbreak: "stationed at Hereford, Herefordshire" },
  ],
  
    "Highland Light Infantry": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Ambala, India" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Maida Barracks, Aldershot" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Garnethill, Glasgow" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Yorkhill, Glasgow" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Bridgeton, Glasgow" },
    { name: "8th Battalion (Territorial)", outbreak: "stationed at Lanark, South Lanarkshire" },
    { name: "9th Battalion (Territorial)", outbreak: "stationed at Greendyke Street, Glasgow" },
    { name: "10th Battalion (Service)", outbreak: "formed at Hamilton, South Lanarkshire in August 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Hamilton, South Lanarkshire in August 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Hamilton, South Lanarkshire in September 1914" },
    { name: "14th Battalion (Service)", outbreak: "formed at Hamilton, South Lanarkshire in July 1915" },
    { name: "15th Battalion (Service)", outbreak: "formed at Glasgow, Scotland in September 1914" },
    { name: "16th Battalion (Service)", outbreak: "formed at Glasgow, Scotland in September 1914" },
    { name: "17th Battalion (Service)", outbreak: "formed at Glasgow, Scotland in September 1914" },
    { name: "18th Battalion (Service)", outbreak: "formed at Glasgow, Scotland in February 1915" },
    { name: "21st Battalion (Territorial)", outbreak: "formed at Deal, Kent in January 1917" },
   ],
  
     "Hertfordshire Regiment": [
    { name: "1st Battalion (Territorial)", outbreak: "stationed at Hertford, Hertfordshire" },
  ],
  
      "King's (Liverpool Regiment)": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Talavera Barracks, Aldershot" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Peshawar, India" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at St Ann Street, Liverpool" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Upper Warwick Street, Liverpool" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Park Street, Bootle" },
    { name: "8th Battalion (Territorial)", outbreak: "stationed at Shaw Street, Liverpool" },
    { name: "9th Battalion (Territorial)", outbreak: "stationed at Everton Road, Liverpool" },
    { name: "10th Battalion (Territorial)", outbreak: "stationed at Fraser Street, Liverpool" },
    { name: "11th Battalion (Service)", outbreak: "formed at Seaforth, Liverpool in August 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Seaforth, Liverpool in September 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at Seaforth, Liverpool in October 1914" },
    { name: "14th Battalion (Service)", outbreak: "formed at Seaforth, Liverpool in October 1914" },
    { name: "17th Battalion (Service)", outbreak: "formed at Prescot, Liverpool in August 1914" },
    { name: "18th Battalion (Service)", outbreak: "formed at Liverpool, England in August 1914" },
    { name: "19th Battalion (Service)", outbreak: "formed at Liverpool, England in August 1914" },
    { name: "20th Battalion (Service)", outbreak: "formed at Liverpool, England in October 1914" },
    { name: "25th Battalion (Territorial)", outbreak: "formed at Sheringham, Norfolk in January 1917" },
    { name: "26th Battalion (Territorial)", outbreak: "formed at Kelvedon, Essex in January 1917" },
   ],
  
        "King's Own (Royal Lancaster Regiment)": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Dover, Kent" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Lebong, India" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Ulverston, Cumbria" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Lancaster, Lancashire" },
    { name: "6th Battalion (Service)", outbreak: "formed at Lancaster, Lancashire in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Lancaster, Lancashire in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Lancaster, Lancashire in October 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Lancaster, Lancashire in October 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Lancaster, Lancashire in August 1915" },
    { name: "12th Battalion (Territorial)", outbreak: "formed at Coggeshall, Essex in January 1917" },
   ],
  
          "King's Own Scottish Borderers": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Lucknow, India" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Dublin, Ireland" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Galashiels, Scotland" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Dumfries, Scotland" },
    { name: "6th Battalion (Service)", outbreak: "formed at Berwick on Tweed, Scotland in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Berwick on Tweed, Scotland in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Berwick on Tweed, Scotland in September 1914" },
   ],
  
          "King’s Own Yorkshire Light Infantry": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Singapore" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Dublin, Ireland" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Wakefield, Yorkshire" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at French Gate, Doncaster" },
    { name: "6th Battalion (Service)", outbreak: "formed at Pontefract, Yorkshire in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Pontefract, Yorkshire in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Pontefract, Yorkshire in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Pontefract, Yorkshire in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Pontefract, Yorkshire in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Leeds, Yorkshire in September 1914" },
   ],
  
           "King's Royal Rifle Corps": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Salamanca Barracks, Aldershot" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Blackdown, Sussex" },
    { name: "3rd Battalion (Regular)", outbreak: "stationed at Meerut, India" },
    { name: "4th Battalion (Regular)", outbreak: "stationed at Gharial, India" },
    { name: "7th Battalion (Service)", outbreak: "formed at Winchester, Hampshire in August 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Winchester, Hampshire in August 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Winchester, Hampshire in August 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Winchester, Hampshire in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Winchester, Hampshire in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Winchester, Hampshire in September 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at Winchester, Hampshire in October 1914" },
    { name: "16th Battalion (Service)", outbreak: "formed at Denham, Buckinghamshire in September 1914" },
    { name: "17th Battalion (Service)", outbreak: "formed at London, England in April 1915" },
    { name: "18th Battalion (Service)", outbreak: "formed at Gidea Park, Essex in June 1915" },
    { name: "20th Battalion (Service)", outbreak: "formed at London, England in August 1915" },
    { name: "21th Battalion (Service)", outbreak: "formed at Newcastle, Tyne and Wear in September 1915" },
    ],
  
     "King's Shropshire Light Infantry": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Tipperary, Ireland" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Malta" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Devonport, Devonshire" },
    { name: "5th Battalion (Service)", outbreak: "formed at Shrewsbury, Shropshire in August 1914" },
    { name: "6th Battalion (Service)", outbreak: "formed at Shrewsbury, Shropshire in September 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Shrewsbury, Shropshire in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Shrewsbury, Shropshire in September 1914" },
     { name: "10th (Shropshire & Cheshire Yeomanry) Battalion (Territorial)", outbreak: "formed at Cairo, Egypt in March 1917" },
   ],
  
    "Lancashire Fusiliers": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Karachi, Pakistan" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Dover, Kent" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Castle Armoury, Bury" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Rochdale, Greater Manchester" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Cross Lane, Salford" },
    { name: "8th Battalion (Territorial)", outbreak: "stationed at Cross Lane, Salford" },
    { name: "9th Battalion (Service)", outbreak: "formed at Bury, Greater Manchester in August 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Bury, Greater Manchester in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Codford, Wiltshire in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Bury, Greater Manchester in September 1914" },
    { name: "15th Battalion (Service)", outbreak: "formed at Salford, Greater Manchester in September 1914" },
    { name: "16th Battalion (Service)", outbreak: "formed at Salford, Greater Manchester in November 1914" },
    { name: "17th Battalion (Service)", outbreak: "formed at Bury, Greater Manchester in December 1914" },
    { name: "18th Battalion (Service)", outbreak: "formed at Bury, Greater Manchester in January 1915" },
    { name: "19th Battalion (Service)", outbreak: "formed at Salford, Greater Manchester in January 1915" },
    { name: "20th Battalion (Service)", outbreak: "formed at Salford, Greater Manchester in March 1915" },
   ],
  
      "Leicestershire Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Fermoy, Ireland" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Raniket, India" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Oxford Street, Leicester" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Loughborough, Leicestershire" },
    { name: "6th Battalion (Service)", outbreak: "formed at Leicester, Leicestershire in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Leicester, Leicestershire in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Leicester, Leicestershire in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Leicester, Leicestershire in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Leicester, Leicestershire in October 1915" },
   ],
  
       "Lincolnshire Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Portsmouht, Devonshire" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Bermuda" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Lincoln, Lincolnshire" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Grimsby, Lincolnshire" },
    { name: "6th Battalion (Service)", outbreak: "formed at Lincoln, Lincolnshire in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Lincoln, Lincolnshire in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Lincoln, Lincolnshire in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Grimsby, Lincolnshire in September 1914" },
    { name: "13th Battalion (Territorial)", outbreak: "formed at Bath, Somerset in January 1917" },
   ],
  
  "London Regiment": [
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Bunhill Row, Islington" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Farringdon Road, Clerkenwell" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Sun Street, Finsbury Park" },
    { name: "8th Battalion (Territorial)", outbreak: "stationed at Bunhill Row, Islington" },
    { name: "9th Battalion (Territorial)", outbreak: "stationed at Berkeley Square, Mayfair" },
    { name: "10th Battalion (Territorial)", outbreak: "stationed at The Grove, Hackney" },
    { name: "11th Battalion (Territorial)", outbreak: "stationed at Penton Street, Pentonville" },
    { name: "12th Battalion (Territorial)", outbreak: "stationed at Chenies Street, Bloomsbury" },
    { name: "13th Battalion (Territorial)", outbreak: "stationed at Iverna Gardens, Kensington" },
    { name: "14th Battalion (Territorial)", outbreak: "stationed at Buckingham Gate, Westminster" },
    { name: "15th Battalion (Territorial)", outbreak: "stationed at Somerset House, Strand" },
    { name: "16th Battalion (Territorial)", outbreak: "stationed at Buckingham Gate, Westminster" },
    { name: "17th Battalion (Territorial)", outbreak: "stationed at Tredegar Street, Bow" },
    { name: "18th Battalion (Territorial)", outbreak: "stationed at Duke of Yorks HQ, Chelsea" },
    { name: "19th Battalion (Territorial)", outbreak: "stationed at Camden Town, Camden" },
    { name: "20th Battalion (Territorial)", outbreak: "stationed at Holly Hedge House, Blackheath" },
    { name: "21th Battalion (Territorial)", outbreak: "stationed at Flodden Road, Camberwell" },
    { name: "22th Battalion (Territorial)", outbreak: "stationed at Jamaica Raod, Bermondsey" },
    { name: "23th Battalion (Territorial)", outbreak: "stationed at Clapham Junction, Wandsworth" },
    { name: "24th Battalion (Territorial)", outbreak: "stationed at New Street, Kennington" },
    { name: "25th Battalion (Territorial)", outbreak: "stationed at Fulham House, Putney Bridge" },
    { name: "28th Battalion (Territorial)", outbreak: "stationed at Dukes Road, Euston" },
    { name: "29th Battalion (Territorial)", outbreak: "formed at Guilford, Essex in January 1917" },
    { name: "30th Battalion (Territorial)", outbreak: "formed at Guilford, Essex in January 1917" },
    { name: "31th Battalion (Territorial)", outbreak: "formed at Frinton, Essex in January 1917" },
    { name: "32th Battalion (Territorial)", outbreak: "formed at Frinton, Essex in January 1917" },
    ],
  
     "Loyal North Lancashire Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Tournay Barracks, Aldershot" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Bangalore, India" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Avenham Lane, Preston" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Bolton, Greater Manchester" },
    { name: "6th Battalion (Service)", outbreak: "formed at Preston, Lancashire in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Preston, Lancashire in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Preston, Lancashire in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Preston, Lancashire in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Preston, Lancashire in October 1914" },
    { name: "12th Battalion (Territorial)", outbreak: "formed at Lytham, Lancashire in August 1915" },
    { name: "14th Battalion (Territorial)", outbreak: "formed at Blackpool, Lancashire in January 1917" },
       
   ],
  
   "Manchester Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Jullundur, India" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Curragh, Ireland" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Bank Chambers, Wigan" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Stretford, Hulme" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Burlington Street, Manchester" },
    { name: "8th Battalion (Territorial)", outbreak: "stationed at Ardwick, Manchester" },
    { name: "9th Battalion (Territorial)", outbreak: "stationed at Ashton under Lyne, Greater Manchester" },
    { name: "10th Battalion (Territorial)", outbreak: "stationed at Oldham, Greater Manchester" },
    { name: "11th Battalion (Service)", outbreak: "formed at Ashton under Lyne, Greater Manchester in August 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Ashton under Lyne, Greater Manchester in September 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at Ashton under Lyne, Greater Manchester in September 1914" },
    { name: "16th Battalion (Service)", outbreak: "formed at Manchester, Greater Manchester in August 1914" },
    { name: "17th Battalion (Service)", outbreak: "formed at Manchester, Greater Manchester in August 1914" },
    { name: "18th Battalion (Service)", outbreak: "formed at Manchester, Greater Manchester in August 1914" },
    { name: "19th Battalion (Service)", outbreak: "formed at Manchester, Greater Manchester in August 1914" },
    { name: "20th Battalion (Service)", outbreak: "formed at Manchester, Greater Manchester in November 1914" },
    { name: "21st Battalion (Service)", outbreak: "formed at Manchester, Greater Manchester in November 1914" },
    { name: "22nd Battalion (Service)", outbreak: "formed at Manchester, Greater Manchester in November 1914" },
    { name: "23rd Battalion (Service)", outbreak: "formed at Manchester, Greater Manchester in November 1914" },
    { name: "24th Battalion (Service)", outbreak: "formed at Oldham, Greater Manchester in October 1914" },
     { name: "28th Battalion (Territorial)", outbreak: "formed at Blackpool, Lancashire in January 1917" },
   ],
  
       "Middlesex Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Woolwich, London" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Malta" },
    { name: "3rd Battalion (Regular)", outbreak: "stationed at Cawnpore, India" },
    { name: "4th Battalion (Regular)", outbreak: "stationed at Devonport, Devonshire" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Hornsea, Yorkshire" },
    { name: "8th Battalion (Territorial)", outbreak: "stationed at Hounslow, London" },
    { name: "9th Battalion (Territorial)", outbreak: "stationed at Pound Lane, Willesden Green" },
    { name: "10th Battalion (Territorial)", outbreak: "stationed at Ravenscourt Park, Hammersmith" },
    { name: "11th Battalion (Service)", outbreak: "formed at Mill Hill, Barnet in August 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Mill Hill, Barnet in August 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at Mill Hill, Barnet in September 1914" },
    { name: "16th Battalion (Service)", outbreak: "formed at St James, London in September 1914" },
    { name: "17th Battalion (Service)", outbreak: "formed at White City, Shepherds Bush in December 1914" },
    { name: "18th Battalion (Service)", outbreak: "formed at Alexandra Palace, Haringey in January 1915" },
    { name: "19th Battalion (Service)", outbreak: "formed at Hornsea, London in April 1915" },
    { name: "20th Battalion (Service)", outbreak: "formed at Shoreditch, Hackney in May 1915" },
    { name: "21th Battalion (Service)", outbreak: "formed at Islington, London in May 1915" },
    { name: "22th Battalion (Service)", outbreak: "formed at London, England in June 1915" },
    { name: "23th Battalion (Service)", outbreak: "formed at London, England in June 1915" },
    { name: "26th Battalion (Service)", outbreak: "formed at Alexandra Park, Haringey in August 1915" },
    { name: "32nd Battalion (Territorial)", outbreak: "formed at Gorleston, Norfolk in January 1917" },
   ],
  
        "Monmouthshire Regiment": [
    { name: "1st Battalion (Territorial)", outbreak: "stationed at Stowhill, Newport" },
    { name: "2nd Battalion (Territorial)", outbreak: "stationed at Osborne Road, Pontypool" },
    { name: "3rd Battalion (Territorial)", outbreak: "stationed at Abergavenny, Monmouthshire" },
    { name: "4th Battalion (Territorial)", outbreak: "formed at Cromer, Norfolk in January 1917" },
          ],
  
    "Norfolk Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Holywood, Northern Ireland" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Bombay, India" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at St Giles, Norwich" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at East Dereham, Norfolk" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Cattle Market Street, Norwich" },    
    { name: "7th Battalion (Service)", outbreak: "formed at Norwich, Norfolk in August 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Norwich, Norfolk in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Norwich, Norfolk in September 1914" },
      { name: "11th Battalion (Territorial)", outbreak: "formed at Guilford, Surrey in 1917" },
      { name: "12th (Norfolk Yeomanry) Battalion (Territorial)", outbreak: "formed at Egypt, North Africa in January 1917" },
   ],
  
     "North Staffordshire Regiment (Prince of Wales's)": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Buttevant, Ireland" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Rawal Pindi, India" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Hanley, Stoke on Trent" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Burton upon Trent, Staffordshire" },    
    { name: "7th Battalion (Service)", outbreak: "formed at Lichfield, Staffordshire in August 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Lichfield, Staffordshire in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Lichfield, Staffordshire in September 1914" },
   ],
  
      "Northamptonshire Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Blackdown, Aldershot" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Alexandria, Egypt" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Clare Street, Northampton" },
    { name: "5th Battalion (Service)", outbreak: "formed at Northampton, Northamptonshire in August 1914" },
    { name: "6th Battalion (Service)", outbreak: "formed at Northampton, Northamptonshire in September 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Northampton, Northamptonshire in September 1914" },
    { name: "9th Battalion (Territorial)", outbreak: "formed at Cley, Norfolk in January 1917" },
   ],
  
         "Northumberland Fusiliers": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Portsmouth, Devonshire" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Sabathu, India" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Hexham, Northumberland" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Walker, Newcastle upon Tyne" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Northumberland Road, Newcastle upon Tyne" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Alnwick, Northumberland" },
    { name: "8th Battalion (Service)", outbreak: "formed at Newcastle upon Tyne, Northumberland in August 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Newcastle upon Tyne, Northumberland in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Newcastle upon Tyne, Northumberland in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Newcastle upon Tyne, Northumberland in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Newcastle upon Tyne, Northumberland in September 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at Newcastle upon Tyne, Northumberland in September 1914" },
    { name: "14th Battalion (Service)", outbreak: "formed at Newcastle upon Tyne, Northumberland in September 1914" },
    { name: "16th Battalion (Service)", outbreak: "formed at Newcastle upon Tyne, Northumberland in September 1914" },
    { name: "17th Battalion (Service)", outbreak: "formed at Hull, Yorkshire in September 1914" },
    { name: "18th Battalion (Service)", outbreak: "formed at Newcastle upon Tyne, Northumberland in October 1914" },
    { name: "19th Battalion (Service)", outbreak: "formed at Newcastle upon Tyne, Northumberland in November 1914" },
    { name: "20th Battalion (Service)", outbreak: "formed at Newcastle upon Tyne, Northumberland in October 1914" },
    { name: "21th Battalion (Service)", outbreak: "formed at Newcastle upon Tyne, Northumberland in September 1914" },
    { name: "22th Battalion (Service)", outbreak: "formed at Newcastle upon Tyne, Northumberland in November 1914" },
    { name: "23th Battalion (Service)", outbreak: "formed at Newcastle upon Tyne, Northumberland in November 1914" },
    { name: "24th Battalion (Service)", outbreak: "formed at Newcastle upon Tyne, Northumberland in November 1914" },
    { name: "25th Battalion (Service)", outbreak: "formed at Newcastle upon Tyne, Northumberland in November 1914" },
    { name: "26th Battalion (Service)", outbreak: "formed at Newcastle upon Tyne, Northumberland in November 1914" },
    { name: "27th Battalion (Service)", outbreak: "formed at Newcastle upon Tyne, Northumberland in January 1915" },
    { name: "35th Battalion (Territorial)", outbreak: "formed at Herne Bay, Kent in January 1917" },
    { name: "36th Battalion (Territorial)", outbreak: "formed at St Osyth, Essex in January 1917" },
    { name: "1st Northern Cyclist Battalion (Territorial)", outbreak: "stationed at Sandyford Road in Newcastle" },
   ],
  
     "Oxfordshire & Buckinghamshire Light Infantry": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Ahmednagar, India" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Aldershot, Hampshire" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Oxford, Oxfordshire" },
    { name: "5th Battalion (Service)", outbreak: "formed at Oxford, Oxfordshire in August 1914" },
    { name: "6th Battalion (Service)", outbreak: "formed at Oxford, Oxfordshire in September 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Oxford, Oxfordshire in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Oxford, Oxfordshire in October 1914" },
    { name: "10th Battalion (Territorial)", outbreak: "formed at West Mersea, Essex in January 1917" },
    { name: "1st (Buckinghamshire) Battalion (Territorial)", outbreak: "stationed at Aylesbury, Buckinghamshire" },
   ],
  
     "Queen's Own Cameron Highlanders": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Edinburgh, Scotland" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Poona, India" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Inverness, Scotland" },
    { name: "5th Battalion (Service)", outbreak: "formed at Inverness, Scotland in August 1914" },
    { name: "6th Battalion (Service)", outbreak: "formed at Inverness, Scotland in September 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Inverness, Scotland in September 1914" },
    { name: "10th (Lovat’s Scouts) Battalion (Territorial)", outbreak: "formed at Cairo, Egypt in September, 1916" },
   ],
  
        "Queen's Own Royal West Kent Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Dublin, Ireland" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Multan, India" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Tonbridge, Kent" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at East Street, Bromley" },
    { name: "6th Battalion (Service)", outbreak: "formed at Maidstone, Kent in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Maidstone, Kent in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Maidstone, Kent in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Maidstone, Kent in May 1915" },
    { name: "11th Battalion (Service)", outbreak: "formed at Lewisham, Greater London in May 1915" },
    { name: "1st Kent Cyclist Battalion (Territorial)", outbreak: "stationed at Canterbury, Kent" },
   ],
  
   "Queen's (Royal West Surrey Regiment)": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Bordon, Hampshire" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Pretoria, South Africa" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Croydon, Greater London" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Guilford, Surrey" },
    { name: "6th Battalion (Service)", outbreak: "formed at Guilford, Surrey in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Guilford, Surrey in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Guilford, Surrey in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Battersea, Wandsworth in June 1915" },
    { name: "11th Battalion (Service)", outbreak: "formed at Lambeth, Greater London in June 1915" },
     { name: "19th Battalion (Territorial)", outbreak: "formed at Lowestoft, Sussex in January 1917" },
   ],
  
   "Rifle Brigade (The Prince Consort’s Own)": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Colchester, Essex" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Kuldana, Pakistan" },
    { name: "3rd Battalion (Regular)", outbreak: "stationed at Cork, Ireland" },
    { name: "4th Battalion (Regular)", outbreak: "stationed at Dagshai, India" },
    { name: "7th Battalion (Service)", outbreak: "formed at Winchester, Hampshire in August 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Winchester, Hampshire in August 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Winchester, Hampshire in August 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Winchester, Hampshire in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Winchester, Hampshire in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Winchester, Hampshire in September 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at Winchester, Hampshire in October 1914" },
    { name: "16th Battalion (Service)", outbreak: "formed at St Pancreas, Greater London in April 1915" },
    ],
  
       "Royal Berkshire Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Mandora Barracks, Aldershot" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Jhansi, India" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at St Marys Butts, Reading" },
    { name: "5th Battalion (Service)", outbreak: "formed at Reading, Berkshire in August 1914" },
    { name: "6th Battalion (Service)", outbreak: "formed at Reading, Berkshire in September 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Reading, Berkshire in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Reading, Berkshire in September 1914" },
   ],
  
   "Royal Dublin Fusiliers": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Madras, India" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Gravesend, Kent" },
    { name: "6th Battalion (Service)", outbreak: "formed at Naas, Ireland in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Naas, Ireland in August 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Buttevant, Ireland in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Buttevant, Ireland in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Dublin, Ireland in December 1915" },
   ],
  
     "Royal Fusiliers (City of London Regiment)": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Kinsale, Ireland" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Calcutta, India" },
    { name: "3rd Battalion (Regular)", outbreak: "stationed at Lucknow, India" },
    { name: "4th Battalion (Regular)", outbreak: "stationed at Parkhurst, Isle of Wight" },
    { name: "8th Battalion (Service)", outbreak: "formed at Hounslow, Greater London in August 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Hounslow, Greater London in August 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at City of London in August 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Hounslow, Greater London in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Hounslow, Greater London in September 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at Hounslow, Greater London in September 1914" },
    { name: "17th Battalion (Service)", outbreak: "formed at London, England in August 1914" },
    { name: "18th Battalion (Service)", outbreak: "formed at Epsom, Surrey in September 1914" },
    { name: "19th Battalion (Service)", outbreak: "formed at Epsom, Surrey in September 1914" },
    { name: "20th Battalion (Service)", outbreak: "formed at Epsom, Surrey in September 1914" },
    { name: "21st Battalion (Service)", outbreak: "formed at Epsom, Surrey in September 1914" },
    { name: "22nd Battalion (Service)", outbreak: "formed at Kensington, Central London in September 1914" },
    { name: "23rd Battalion (Service)", outbreak: "formed at The Strand, Westminster in September 1914" },
    { name: "24th Battalion (Service)", outbreak: "formed at The Strand, Westminster in November 1914" },
    { name: "25th Battalion (Service)", outbreak: "formed at London, England in February 1915" },
    { name: "26th Battalion (Service)", outbreak: "formed at City of London in July 1915" },
    { name: "32th Battalion (Service)", outbreak: "formed at East Ham, London in October 1915" },
    ],
  
     "Royal Irish Fusiliers": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Shorncliffe, Kent" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Quetta, Pakistan" },
    { name: "5th Battalion (Service)", outbreak: "formed at Armagh, Ireland in August 1914" },
    { name: "6th Battalion (Service)", outbreak: "formed at Armagh, Ireland in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Armagh, Ireland in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Armagh, Ireland in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Armagh, Ireland in September 1914" },
   ],
  
       "Royal Irish Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Nasirabad, India" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Devonport, Devonshire" },
    { name: "5th Battalion (Service)", outbreak: "formed at Clonmel, Ireland in August 1914" },
    { name: "6th Battalion (Service)", outbreak: "formed at Clonmel, Ireland in September 1914" },
   ],
  
       "Royal Irish Rifles": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Aden, Yemen" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Tidworth, Wiltshire" },
    { name: "6th Battalion (Service)", outbreak: "formed at Dublin, Ireland in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Belfast, Northern Ireland in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Belfast, Northern Ireland in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Belfast, Northern Ireland in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Belfast, Northern Ireland in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at County Antrim, Northern Ireland in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at County Antrim, Northern Ireland in September 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at County Down, Northern Ireland in September 1914" },
    { name: "14th Battalion (Service)", outbreak: "formed at Belfast, Northern Ireland in September 1914" },
    { name: "15th Battalion (Service)", outbreak: "formed at Belfast, Northern Ireland in September 1914" },
    { name: "16th Battalion (Service)", outbreak: "formed at County Down, Northern Ireland in September 1914" },
    ],
  
         "Royal Inniskilling Fusiliers": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Trimulgherry, India" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Dover, Kent" },
    { name: "5th Battalion (Service)", outbreak: "formed at Omagh, Northern Ireland in August 1914" },
    { name: "6th Battalion (Service)", outbreak: "formed at Omagh, Northern Ireland in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Omagh, Northern Ireland in October 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Omagh, Northern Ireland in October 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Omagh, Northern Ireland in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Omagh, Northern Ireland in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Omagh, Northern Ireland in September 1914" },
    ],
  
           "Royal Munster Fusiliers": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Rangoon, Burma" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Malplaquet Barracks, Aldershot" },
    { name: "6th Battalion (Service)", outbreak: "formed at Tralee, Ireland in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Tralee, Ireland in August 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Tralee, Ireland in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Tralee, Ireland in September 1914" },
    ],
  
     "Royal Scots": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Allaahabad, India" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Plymouth, Devonshire" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Forrest Hill, Edinburgh" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Forrest Hill, Edinburgh" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Gilmore Place, Edinburgh" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Dalmeny Street, Leith" },
    { name: "8th Battalion (Territorial)", outbreak: "stationed at Haddington, East Lothian" },
    { name: "9th Battalion (Territorial)", outbreak: "stationed at East Claremont Street, Edinburgh" },
    { name: "10th (Lothian Cyclist) Battalion (Territorial)", outbreak: "stationed at East Linton, East Lothian" },
    { name: "11th Battalion (Service)", outbreak: "formed at Peebles, Scottish Borders in August 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Edinburgh, Scotland in August 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at Edinburgh, Scotland in September 1914" },
    { name: "15th Battalion (Service)", outbreak: "formed at Edinburgh, Scotland in September 1914" },
    { name: "16th Battalion (Service)", outbreak: "formed at Edinburgh, Scotland in December 1914" },
    { name: "17th Battalion (Service)", outbreak: "formed at Edinburgh, Scotland in February 1915" },
   ],
  
            "Royal Scots Fusiliers": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Gosport, Hampshire" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Gibraltar, Mediterranean" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Kilmarnock, Ayrshire" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Ayr, Ayrshire" },      
    { name: "6th Battalion (Service)", outbreak: "formed at Ayr, Ayrshire in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Ayr, Ayrshire in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Ayr, Ayrshire in October 1914" },
    { name: "11th Battalion (Territorial)", outbreak: "formed at Deal, Kent in January 1917" },     
    { name: "12th (Ayr & Lanark Yeomanry) Battalion (Territorial)", outbreak: "formed at Cairo, Egypt in January 1917" },     
   ],
  
              "Royal Sussex Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Peshawar, Pakistan" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Woking, Surrey" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Horsham, Sussex" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Middle Street, Hastings" },   
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Montpelier Place, Brighton" },     
    { name: "7th Battalion (Service)", outbreak: "formed at Chichester, Sussex in August 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Chichester, Sussex in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Chichester, Sussex in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Bexhill, Sussex in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Bexhill, Sussex in November 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at Bexhill, Sussex in November 1914" },
    { name: "15th Battalion (Territorial)", outbreak: "formed at Burnham, Somerset in January 1917" }, 
    { name: "16th (Sussex Yeomanry) Battalion (Territorial)", outbreak: "formed at Mersa Matruh, Egypt in January 1917" }, 
   ],
  
                "Royal Warwickshire Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Shorncliffe, Kent" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Malta, Mediterranean" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Thorp Street, Birmingham" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Thorp Street, Birmingham" },   
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Coventry, Warwickshire" }, 
    { name: "8th Battalion (Territorial)", outbreak: "stationed at Aston Manor, Warwickshire" },       
    { name: "9th Battalion (Service)", outbreak: "formed at Warwick, Warwickshire in August 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Warwick, Warwickshire in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Warwick, Warwickshire in October 1914" },
    { name: "14th Battalion (Service)", outbreak: "formed at Birmingham, England in September 1914" },
    { name: "15th Battalion (Service)", outbreak: "formed at Birmingham, England in September 1914" },
    { name: "16th Battalion (Service)", outbreak: "formed at Birmingham, England in September 1914" },
    { name: "18th Battalion (Territorial)", outbreak: "formed at Bath, Somerset in January 1917" }, 
   ],
  
                 "Royal Welch Fusiliers": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Malta, Mediterranean" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Portland, Dorsetshire" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Wrexham, Clywd" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Flint, Flintshire" },   
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Caernarfon, Gwynedd" }, 
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Newtown, Montgomery" },     
    { name: "8th Battalion (Service)", outbreak: "formed at Wrexham, Clywd in August 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Wrexham, Clywd in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Wrexham, Clywd in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Wrexham, Clywd in September 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at Rhyl, Denbighshire in September 1914" },
    { name: "14th Battalion (Service)", outbreak: "formed at Llandudno, Clywd in November 1914" },
    { name: "15th Battalion (Service)", outbreak: "formed at London, England in October 1914" },
    { name: "16th Battalion (Service)", outbreak: "formed at Llandudno, Clywd in November 1914" },
    { name: "17th Battalion (Service)", outbreak: "formed at Llandudno, Clywd in February 1915" },
    { name: "23rd Battalion (Territorial)", outbreak: "formed at Mundesey, Norfolk in Janaury 1917" },   
    { name: "24th (Denbighshire Yeomanry) Battalion (Territorial)", outbreak: "formed at Cairo, Egypt in March 1917" },   
    { name: "25th (Montgomeryshire & Welsh Horse Yeomanry) Battalion (Territorial)", outbreak: "formed at Helmia, Egypt in March 1917" },   
   ],
  
               "Seaforth Highlanders": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Agra, India" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Shorncliffe, Kent" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Dingwall, Scottish Highlands" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Golspie, Sutherland" },   
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Elgin, Moray" },   
    { name: "7th Battalion (Service)", outbreak: "formed at Fort George, Scottish Highlands in August 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Fort George, Scottish Highlands in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Fort George, Scottish Highlands in October 1914" },
   ],
  
       "Sherwood Foresters (Notts & Derby Regiment)": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Bombay, India" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Sheffield, Yorkshire" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Derby, Derbyshire" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Corporation Street, Chesterfield" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Derby Road, Nottingham" },
    { name: "8th Battalion (Territorial)", outbreak: "stationed at Newark, Nottinghamshire" },
    { name: "9th Battalion (Service)", outbreak: "formed at Derby, Derbyshire in August 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Derby, Derbyshire in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Derby, Derbyshire in October 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Derby, Derbyshire in October 1914" },
    { name: "15th Battalion (Service)", outbreak: "formed at Nottingham, Nottinghamshire in February 1915" },
    { name: "16th Battalion (Service)", outbreak: "formed at Derby, Derbyshire in April 1915" },
    { name: "17th Battalion (Service)", outbreak: "formed at Nottingham, Nottinghamshire in June 1915" },
    { name: "21st Battalion (Territorial)", outbreak: "formed at Walton on the Naze, Essex in January 1917" },
   ],
  
                 "Somerset Light Infantry (Prince Albert's)": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Colchester, Essex" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Quetta, India" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Lower Bristol Road, Bath" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Taunton, Somerset" },         
    { name: "6th Battalion (Service)", outbreak: "formed at Taunton, Somerset in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Taunton, Somerset in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Taunton, Somerset in October 1914" },
    { name: "11th Battalion (Territorial)", outbreak: "formed at Whitstable, Kent in January 1917" }, 
    { name: "12th (West Somerset Yeomanry) Battalion (Territorial)", outbreak: "formed at Ismaila, Egypt in January 1917" },      
   ],
  
     "South Lancashire Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Quetta, India" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Tidworth, Wiltshire" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Warrington, Cheshire" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at St Helens, Merseyside" },         
    { name: "6th Battalion (Service)", outbreak: "formed at Warrington, Cheshire in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Warrington, Cheshire in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Warrington, Cheshire in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Warrington, Cheshire in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at St Helens, Merseyside in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Warrington, Cheshire in June 1915" },
    { name: "14th Battalion (Territorial)", outbreak: "formed at Hemsby, Norfolk in January 1917" },   
   ],
  
      "South Staffordshire Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Pietermaritzburg, South Africa" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Aldershot, Hampshire" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Walsall, Staffordshire" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Wolverhampton, West Midlands" },       
    { name: "7th Battalion (Service)", outbreak: "formed at Lichfield, Staffordshire in August 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Lichfield, Staffordshire in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Lichfield, Staffordshire in September 1914" },
   ],
  
        "South Wales Borderers": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Bordon, Hampshire" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Tientsin, China" },
    { name: "1st Battalion (Territorial)", outbreak: "stationed at Brecon, Powys" },
    { name: "4th Battalion (Service)", outbreak: "formed at Brecon, Powys in August 1914" },
    { name: "5th Battalion (Service)", outbreak: "formed at Brecon, Powys in September 1914" },
    { name: "6th Battalion (Service)", outbreak: "formed at Brecon, Powys in October 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Brecon, Powys in October 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Brecon, Powys in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Brecon, Powys in October 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Brecon, Powys in December 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Newport, Gwent in March 1915" },
   ],
  
               "Suffolk Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Khartoum, Sudan" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Curragh, Ireland" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Portman Road, Ipswich" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Bury St Edmunds, Suffolk" },   
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Ipswich, Suffolk" },   
    { name: "7th Battalion (Service)", outbreak: "formed at Bury St Edmunds, Suffolk in August 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Bury St Edmunds, Suffolk in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Bury St Edmunds, Suffolk in October 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Cambridge, Cambridgeshire in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Bury St Edmunds, Suffolk in July 1915" },
    { name: "14th Battalion (Territorial)", outbreak: "formed at Weybourne, Norfolk in January 1917" },   
    { name: "15th (Suffolk Yeomanry) Battalion (Territorial)", outbreak: "formed at Cairo, Egypt in January 1917" },   
   ],
  
         "Welsh Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Chakrata, India" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Bordon, Hampshire" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Carmarthen, Carmarthenshire" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Pontypridd, Rhondda" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Swansea, Glamorgan" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Newport Road, Cardiff" },
    { name: "8th Battalion (Service)", outbreak: "formed at Cardiff, Glamorgan in August 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Cardiff, Glamorgan in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Rhondda Valley, Glamorgan in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Cardiff, Glamorgan in September 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at Cardiff, Glamorgan in October 1914" },
    { name: "14th Battalion (Service)", outbreak: "formed at Swansea, Glamorgan in October 1914" },
    { name: "15th Battalion (Service)", outbreak: "formed at Carmarthen, Carmarthenshire in October 1914" },
    { name: "16th Battalion (Service)", outbreak: "formed at Cardiff, Glamorgan in November 1914" },
    { name: "17th Battalion (Service)", outbreak: "formed at Glamorgan, Wales in December 1914" },
    { name: "18th Battalion (Service)", outbreak: "formed at Glamorgan, Wales in January 1915" },
    { name: "19th Battalion (Service)", outbreak: "formed at Colwyn Bay, Clwyd in February 1915" },
    { name: "24th (Pembroke & Glamorgan Yeomanry) Battalion (Territorial)", outbreak: "formed at Cairo, Egypt in February 1917" },
   ],
  
           "West Yorkshire Regiment (Prince of Wales's Own)": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Lichfield, Staffordshire" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Malta, Mediterranean" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at York, North Yorkshire" },
    { name: "6th Battalion (Territorial)", outbreak: "stationed at Belle Vue Barracks, Bradford" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Carlton Barracks, Leeds" },
    { name: "8th Battalion (Territorial)", outbreak: "stationed at Carlton Barracks, Leeds" },
    { name: "9th Battalion (Service)", outbreak: "formed at York, North Yorkshire in August 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at York, North Yorkshire in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at York, North Yorkshire in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Halton Park, Lancaster in September 1914" },
    { name: "15th Battalion (Service)", outbreak: "formed at Leeds, Yorkshire in September 1914" },
    { name: "16th Battalion (Service)", outbreak: "formed at Bradford, Yorkshire in September 1914" },
    { name: "17th Battalion (Service)", outbreak: "formed at Leeds, Yorkshire in December 1914" },
    { name: "18th Battalion (Service)", outbreak: "formed at Bradford, Yorkshire in January 1915" },
    { name: "21th Battalion (Service)", outbreak: "formed at West Riding, Yorkshire in September 1915" },
   ],
  
            "Wiltshire Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Tidworth, Wiltshire" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Gibraltar, Mediterranean" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Fore Street, Trowbridge" },
    { name: "5th Battalion (Service)", outbreak: "formed at Devizes, Wiltshire in August 1914" },
    { name: "6th Battalion (Service)", outbreak: "formed at Devizes, Wiltshire in September 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Devizes, Wiltshire in September 1914" },
   ],
  
             "Worcestershire Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Cairo, Egypt" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Aldershot, Hampshire" },
    { name: "3rd Battalion (Regular)", outbreak: "stationed at Tidworth, Wiltshire" },
    { name: "4th Battalion (Regular)", outbreak: "stationed at Meiktila, Burma" },
    { name: "7th Battalion (Territorial)", outbreak: "stationed at Kidderminster, Worcestershire" },
    { name: "8th Battalion (Territorial)", outbreak: "stationed at Worcester, Worcestershire" },
    { name: "9th Battalion (Service)", outbreak: "formed at Worcester, Worcestershire in August 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Worcester, Worcestershire in September 1914" },
    { name: "11th Battalion (Service)", outbreak: "formed at Worcester, Worcestershire in September 1914" },
    { name: "14th Battalion (Service)", outbreak: "formed at Worcester, Worcestershire in September 1915" },

   ],
  
               "York & Lancaster Regiment": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Jubbulpore, India" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Limerick, Ireland" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Sheffield, Yorkshire" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Rotherham, Yorkshire" }, 
    { name: "6th Battalion (Service)", outbreak: "formed at Pontefract, Yorkshire in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Pontefract, Yorkshire in August 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Pontefract, Yorkshire in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Pontefract, Yorkshire in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Pontefract, Yorkshire in September 1914" },
    { name: "12th Battalion (Service)", outbreak: "formed at Sheffield, Yorkshire in September 1914" },
    { name: "13th Battalion (Service)", outbreak: "formed at Barnsley, Yorkshire in September 1914" },
    { name: "14th Battalion (Service)", outbreak: "formed at Barnsley, Yorkshire in November 1914" },
   ],
  
                "Yorkshire Regiment (Green Howards)": [
    { name: "1st Battalion (Regular)", outbreak: "stationed at Bariam, India" },
    { name: "2nd Battalion (Regular)", outbreak: "stationed at Guernsey, Channel Islands" },
    { name: "4th Battalion (Territorial)", outbreak: "stationed at Northallerton, Yorkshire" },
    { name: "5th Battalion (Territorial)", outbreak: "stationed at Scarborough, Yorkshire" },  
    { name: "6th Battalion (Service)", outbreak: "formed at Richmond, Yorkshire in August 1914" },
    { name: "7th Battalion (Service)", outbreak: "formed at Richmond, Yorkshire in September 1914" },
    { name: "8th Battalion (Service)", outbreak: "formed at Richmond, Yorkshire in September 1914" },
    { name: "9th Battalion (Service)", outbreak: "formed at Richmond, Yorkshire in September 1914" },
    { name: "10th Battalion (Service)", outbreak: "formed at Richmond, Yorkshire in October 1914" },       
   { name: "18th Battalion (Territorial)", outbreak: "formed at Clacton, Essex in January 1917" },
   ],
};

// 2) One helper usable by any panel
window.initRegimentTypeahead = function (
  inputId,
  resultsId,
  hiddenId,
  onPick,
  customList
) {
  
  const input   = document.getElementById(inputId);
  const results = document.getElementById(resultsId);
  const hidden  = hiddenId ? document.getElementById(hiddenId) : null;
  if (!input || !results) return;

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    results.innerHTML = "";
    if (!q) return;

   const sourceList = Array.isArray(customList) ? customList : window.REGIMENT_LIST;
const matches = sourceList.filter(r => r.toLowerCase().includes(q));
    matches.forEach(name => {
      const item = document.createElement("div");
      item.className = "typeahead-item";
      item.textContent = name;
      item.addEventListener("click", () => {
        input.value = name;
        if (hidden) hidden.value = name;
        results.innerHTML = "";
        if (typeof onPick === "function") onPick(name);
      });
      results.appendChild(item);
    });
  });
};


/* ------------------------------
 * B.1 — WWI Boot & DOM Bindings
 * ------------------------------ */

function HRBootWWI() {
  "use strict";

  console.log("[HRBootWWI] Initialising WWI estimator...");

 
  //* DOM Bindings (WWI-specific IDs)
 
  const regimentField   = document.getElementById("regimentSearch");
  const regimentHidden  = document.getElementById("regiment");
  const numberField     = document.getElementById("serviceNumber");
  const resultDiv       = document.getElementById("wwiResult");
  const trafficLightDiv = document.getElementById("wwiTrafficLight");
  const estimateBtn     = document.querySelector("#wwiPanel button");

  if (!regimentField || !numberField || !resultDiv) {
    console.error("[HRBootWWI] Missing one or more required elements.");
    return;
  }

/* ------------------------------
 * B.3 — Confidence Traffic Lights
 * ------------------------------ */

  function displayTrafficLight(level) {
    if (!trafficLightDiv) return;
    const colors = { high: "green", medium: "orange", low: "red" };
    trafficLightDiv.textContent = "";
    const light = document.createElement("span");
    light.textContent = level.toUpperCase();
    light.style.fontWeight = "bold";
    light.style.color = colors[level] || "#555";
    trafficLightDiv.appendChild(light);
  }

 /* -----------------------------
 * B.4 — Result rendering helper
 * ------------------------------ */

  function clearResults() {
    resultDiv.innerHTML = "";
  }

  function renderCard(title, html, variant) {
    const card = document.createElement("div");
    card.className = variant ? `wwi-card ${variant}` : "wwi-card";
    card.innerHTML = `<h3>${title}</h3>${html}`;
    return card;
  }
  
  // B.4.a — Battalion Type Explained (category → explainer text)
function getBattalionTypeExplainerHTML(category) {
  if (!category) return "";

  const isRegular = (category === "regular_prewar" || category === "regular_wartime");
  const isTF      = (category === "tf_pre1917" || category === "tf_renumbering");
  const isService = (category === "service");

  if (isRegular) {
    return `<p><strong>Regular battalions</strong> were the Army’s full-time professional units. Men could enlist into Regulars both before and during the war, and these battalions were continually reinforced as the conflict progressed.</p>`;
  }

  if (isTF) {
    return `<p><strong>Territorial Force battalions</strong> were locally raised units within the county regiment system. Although originally organised for part-time service, once mobilised they operated as full front-line battalions and served overseas in large numbers.</p>`;
  }

  if (isService) {
    return `<p><strong>Service battalions</strong> were wartime-raised units created from 1914 as part of Kitchener’s New Army. They were formed largely from civilian volunteers (and later conscripts), trained rapidly, and deployed as complete battalions.</p>`;
  }

  return ""; // misc / training_reserve / etc → no explainer box
}

  function renderResultGrid(cards) {
    const grid = document.createElement("div");
    grid.className = "wwi-grid";
    cards.forEach(c => grid.appendChild(c));
    resultDiv.appendChild(grid);
  }

  // --- CONFIDENCE SCORING PATCH (category-first) ---
function scoreMatches(matches) {
  const baseWeights = {
    regular_prewar:   0.60,
    regular_wartime:  0.72,
    service:          0.90,
    tf_pre1917:       0.62,
    tf_renumbering:   0.88,
    training_reserve: 0.70,
    misc:             0.55
  };

  // --- Step 1: sum widths at category level ---
  const catTotals = {};
  let total = 0;
  for (let i = 0; i < matches.length; i++) {
    const cat = matches[i].category || "misc";
    const w = Math.max(matches[i].range[1] - matches[i].range[0] + 1, 1);
    const root = Math.sqrt(w);
    catTotals[cat] = (catTotals[cat] || 0) + root;
  }
  Object.values(catTotals).forEach(v => total += v);

  // --- Step 2: distribute back down to blocks ---
  const coverage = matches.map(m => {
    const cat = m.category || "misc";
    const catShare = total ? (catTotals[cat] / total) : 0;
    const w = Math.max(m.range[1] - m.range[0] + 1, 1);
    const root = Math.sqrt(w);
    // each block gets a proportional slice of its category’s share
    const catTotal = catTotals[cat] || 1;
    return catShare * (root / catTotal);
  });

  // --- Check if Service/TF present for de-bias ---
  const hasService = matches.some(m => m.category === "service");
  const hasTF = matches.some(m => m.category === "tf_pre1917" || m.category === "tf_renumbering");
  const hasServiceOrTF = hasService || hasTF;
  
  const prefixedMatchCount = matches.filter(m => m.requiresPrefix && m.prefixPresent).length;
  const hasSinglePrefixedMatch = prefixedMatchCount === 1;
  const hasMultiplePrefixedMatches = prefixedMatchCount > 1;
  
    const RESERVE_CATS = ["training_reserve", "reserve", "graduated", "misc"];

  let scored = matches.map((m, i) => {
    const cat = m.category || "misc";
    let score = (baseWeights[cat] || 0.65) * (coverage[i] || 0);

    // Evidence multipliers
    if (m.requiresPrefix && m.prefixPresent) score *= 1.5;
    if ((m.range[1] - m.range[0]) < 1000 && m.subBracketCorroborated) score *= 1.03;
    if (m.date && m.date.includes("–") && m.date.length < 15) score *= 1.12;
    if (m.admin) score *= 0.88;
    if (m.subBracketCorroborated) score *= 1.08;

// Extra Regular de-bias when Service/TF present
if (hasServiceOrTF && (cat === "regular_prewar" || cat === "regular_wartime")) {
  score *= 0.85;
}
    
    // Reserve / Training / misc must be last-resort if ANY non-reserve match exists
if (
  RESERVE_CATS.includes(cat) &&
  matches.some(m => !RESERVE_CATS.includes(m.category))
) {
  score *= 0.40; // or 0.10 if you want it brutal
}

// Reserve / Training / misc should be last-resort if ANY non-reserve-like match exists
if (
  (cat === "training_reserve" || cat === "reserve" || cat === "graduated" || cat === "misc") &&
  matches.some(x => !["training_reserve", "reserve", "graduated", "misc"].includes(x.category))
) {
  score *= 0.40;
}

    // Overlap penalties (only for 3+ messy overlaps)
    if (matches.length >= 3) {
      if ((m.range[1] - m.range[0]) > 8000) score *= 0.94;
      if (m.admin) score *= 0.86;
    }

   // Caps & floors
if (cat === "tf_renumbering" && score > 0.85) score = 0.85;
if (m.admin && score > 0.50) score = 0.50;

if (m.requiresPrefix && m.prefixPresent && !RESERVE_CATS.includes(cat)) {
  if (hasSinglePrefixedMatch && score < 0.70) {
    score = 0.70;
  }
  if (hasMultiplePrefixedMatches && score < 0.30) {
    score = 0.30;
  }
}

if (score > 0.90) score = 0.90;

    let level = "Broad";
    if (score >= 0.6) level = "Strong";
    else if (score >= 0.3) level = "Reasonable";

    return { ...m, confidenceScore: score, confidenceLevel: level };
  }).sort((a, b) => b.confidenceScore - a.confidenceScore);

  // --- Simplified overlap handling ---
  if (scored.length >= 3) {
    // Only apply a mild penalty for 3+ messy overlaps
    const overlapPenalty = (scored.length === 3) ? 0.95 : 0.90;
    scored[0].confidenceScore *= overlapPenalty;
    let s = scored[0].confidenceScore;
    scored[0].confidenceLevel =
      (s >= 0.6) ? "Strong" : (s >= 0.3) ? "Reasonable" : "Broad";
  }

  // --- Two matches = solid dual plausibility ---
  if (scored.length === 2) {
    const [a, b] = scored;
    if (a.confidenceScore > 0.3 && b.confidenceScore > 0.3) {
      // Treat as at least Reasonable
      a.confidenceLevel = (a.confidenceScore >= 0.6) ? "Strong" : "Reasonable";
      // Small bump to avoid "Broad" edge cases
      a.confidenceScore = Math.max(a.confidenceScore, 0.55);
    }
  }
  
   if (scored.length) {
    if (hasSinglePrefixedMatch) {
      scored[0].confidenceScore = Math.max(scored[0].confidenceScore, 0.70);
      scored[0].confidenceLevel = "Strong";
    } else if (hasMultiplePrefixedMatches) {
      scored[0].confidenceScore = Math.min(scored[0].confidenceScore, 0.59);
      scored[0].confidenceScore = Math.max(scored[0].confidenceScore, 0.30);
      scored[0].confidenceLevel = "Reasonable";
    }
  }

  return scored;
}
  
 /* ------------------------------
 * B.5 — Core estimator logic
 * ------------------------------ */
  
  // --- Regiment key resolver (prevents silent "No match" due to tiny name mismatches) ---
function resolveRegimentKey(input, dataset) {
  const raw = String(input || "").trim();
  if (!raw || !dataset) return null;

  // 1) Exact hit
  if (dataset[raw]) return raw;

  // 2) Case-insensitive / punctuation-normalised hit
  const norm = s => String(s || "")
    .trim()
    .toLowerCase()
    .replace(/[’‘]/g, "'")     // curly apostrophes → straight
    .replace(/\s+/g, " ");     // collapse double spaces

  const want = norm(raw);
  const keys = Object.keys(dataset);

  for (const k of keys) {
    if (norm(k) === want) return k;
  }

  // 3) If user picked from typeahead list but hidden didn’t populate properly,
  //    try matching against REGIMENT_LIST canonical names
  if (Array.isArray(window.REGIMENT_LIST)) {
    for (const r of window.REGIMENT_LIST) {
      if (norm(r) === want && dataset[r]) return r;
    }
  }

  return null;
}
  
  function hrGetWWIIntakeContextLabel(dateStr) {
const s = String(dateStr || "")
  // normalise ALL common dash/hyphen variants to a plain "-"
  .replace(/[\u2010\u2011\u2012\u2013\u2014\u2212]/g, "-")
  .trim();

const lower = s.toLowerCase();

// keep the left side, but DO NOT lose the year if it lives on the right
let left = lower.split("-")[0].trim();

// If left is just a month (or month-range) and the year is only later in the string,
// append the year onto left so month+year parsing works.
if (/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)\b/i.test(left) && !/\b\d{4}\b/.test(left)) {
  const yAll = lower.match(/\b(19\d{2})\b/);
  if (yAll) left = `${left} ${yAll[1]}`;
}

// If the range is "Pre-WWI - Aug 1914", split() leaves just "pre".
// Promote it back to "pre wwi" if the full string contains WWI/war.
if (left === "pre" && /\b(wwi|war)\b/i.test(lower)) {
  left = "pre wwi";
}

  // normalise to approx start month
  let y = null, m = null;

  // month + year (e.g. "aug 1914")
  const monthMatch = left.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)\b\.?\s+(\d{4})/i);
  if (monthMatch) {
    const mon = monthMatch[1].slice(0,3);
    const map = { jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12 };
    m = map[mon] || null;
    y = parseInt(monthMatch[2], 10);
  }

  // fuzzy + year (e.g. "mid 1915")
  if (!y) {
    const fuzzy = left.match(/\b(early|mid|late)\b\s+(\d{4})/i);
    if (fuzzy) {
      y = parseInt(fuzzy[2], 10);
      m = fuzzy[1] === "early" ? 2 : (fuzzy[1] === "mid" ? 6 : 10);
    }
  }

  // year only
  if (!y) {
    const yr = left.match(/\b(\d{4})\b/);
    if (yr) { y = parseInt(yr[1], 10); m = 1; }
  }

// pre-war wording: treat as pre-Aug 1914 (not an Aug 1914 volunteer)
if (!y && /\bpre\b.*\b(war|wwi)\b|\bpre[-\s]?(war|wwi)\b|\bprewar\b/i.test(left)) { y = 1914; m = 7; }

 if (!y || !m) return "";

// ----------------------------------------------------
// RANGE SPAN GUARD: if date range is too broad, don't
// apply a single intake context (misleading).
// ----------------------------------------------------

// If it's a range, try to parse an end date from the RIGHT side
const parts = lower.split("-");
if (parts.length >= 2) {
  const right = parts[parts.length - 1].trim();

  let y2 = null, m2 = null;

  // month + year (e.g. "jan 1918")
  const mm2 = right.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)\b\.?\s+(\d{4})/i);
  if (mm2) {
    const mon = mm2[1].slice(0, 3);
    const map = { jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12 };
    m2 = map[mon] || null;
    y2 = parseInt(mm2[2], 10);
  }

  // fuzzy + year (e.g. "early 1917")
  if (!y2) {
    const f2 = right.match(/\b(early|mid|late)\b\s+(\d{4})/i);
    if (f2) {
      y2 = parseInt(f2[2], 10);
      m2 = f2[1] === "early" ? 2 : (f2[1] === "mid" ? 6 : 10);
    }
  }

  // year only (e.g. "1918") => treat as end-of-year
  if (!y2) {
    const yr2 = right.match(/\b(\d{4})\b/);
    if (yr2) { y2 = parseInt(yr2[1], 10); m2 = 12; }
  }

  // If we can parse an end date, enforce span guard
  if (y2 && m2) {
    const startSerial = (y * 12) + m;
    const endSerial   = (y2 * 12) + m2;

    if (endSerial >= startSerial) {
      const spanMonths = endSerial - startSerial;
      if (spanMonths > 18) {

        // Exception: post-early-1917 ranges can safely take the late-war manpower context
        // (prevents "too broad" for Mar 1917–1918 style windows)
        const startsAfterEarly1917 = ((y * 12) + m) >= ((1917 * 12) + 1); // Jan 1917+
        if (startsAfterEarly1917) {
          // Do NOT return; fall through to normal intake mapping below
        } else {
          return "This numbering range spans a long period of the war. The dates are too broad to provide a reliable intake context.";
        }
      }

    }
  }
}

// ----------------------------------------------------
// INTAKE CONTEXT (normal path)
// ----------------------------------------------------
const serial = (y * 12) + m;
const inWin = (fy, fm, ty, tm) => {
  const a = (fy * 12) + fm;
  const b = (ty * 12) + tm;
  return serial >= a && serial <= b;
};

if (inWin(1914,1,1914,7))   return "Likely serving before the outbreak of WWI. If serving in France or Belgium in 1914, the soldier would be classed as an Old Contemptible.";
if (inWin(1914,8,1914,9))   return "The initial wartime volunteer surge. A rapid influx of recruits to the Army responding to the outbreak of war.";
if (inWin(1914,9,1915,9))   return "Kitchener’s New Army. The big “New Army” recruiting wave. Large-scale voluntary enlistment period.";
if (inWin(1915,10,1915,12)) return "Derby Scheme. Voluntary attestation scheme. Men “attest” to serve when called, placed into age/marital groups, often remaining in civilian life until mobilisation.";
if (inWin(1916,1,1916,5))   return "Early conscription intake. The switch from voluntary to compulsory Army service begins with the single male populace first.";
if (inWin(1916,5,1916,11))  return "Wider conscription. The intake of soldiers to the Army becomes more systematic and broader.";
if (inWin(1916,12,1917,6))  return "Manpower crisis and restructuring. Mass post-Somme casualties forced emergency measures and widespread reorganisation as the Army adapted to a prolonged war.";
if (inWin(1917,7,1918,12))  return "Final manpower drive. Broadening of liability and combing-out reserved occupations to maximise figthing capacity.";

return "";
  }
    
  function estimateWWI() {
    clearResults();
const regimentRaw = regimentHidden.value.trim() || regimentField.value.trim();
const regimentKey = resolveRegimentKey(regimentRaw, regimentData);
const rawNum = numberField.value.trim();
    if (!regimentRaw || !rawNum) {
      resultDiv.innerHTML = "<p>Please enter both a regiment and service number.</p>";
      return;
    }

const parsed = hrParsePrefix(rawNum);
const prefix = parsed.prefix;
const numeric = parsed.numeric;

console.log(`[estimateWWI] RegimentRaw: ${regimentRaw} | RegimentKey: ${regimentKey || "UNRESOLVED"} | RawNum: ${rawNum} | Prefix: ${prefix || "none"} | Numeric: ${numeric}`);

    
        /* --------------------------------------------
     * B.6 — Find Matching Number Block
     * -------------------------------------------- */

    let matchedBlock = null;
    let matches = [];

 if (typeof regimentData !== "undefined" && regimentKey && regimentData[regimentKey]) {
  const data = regimentData[regimentKey];

matches = data.filter(b => {
    const inRange = numeric >= b.range[0] && numeric <= b.range[1];
    if (!inRange) return false;

    // ------------------------------------
    // PREFIX LOGIC (matches the old tool)
    // ------------------------------------

    // 1) PREFIX SUPPLIED
    if (prefix) {

      // If block does not require prefix → reject
      if (!b.requiresPrefix) return false;

      // If block requires a prefix but does not include this prefix → reject
      if (Array.isArray(b.allowedPrefixes)) {
        const cleanPrefix = prefix.replace(/\/$/, "").toUpperCase();
        const cleanAllowed = b.allowedPrefixes.map(p => p.replace(/\/$/, "").toUpperCase());
        if (!cleanAllowed.includes(cleanPrefix)) return false;
      }
    }

    // 2) NO PREFIX SUPPLIED
    if (!prefix) {
      // Reject blocks that *require* a prefix
      if (b.requiresPrefix) return false;
    }

    // Evidence flag for scoring
    b.prefixPresent = prefix ? true : false;

    return true;
});

    }

    // Score and rank candidates
    const scored = scoreMatches(matches);

    // Top-ranked block becomes the main match for downstream cards
    matchedBlock = scored.length ? scored[0] : null;

       /* --------------------------------------------
     * B.7 — Build Result Cards (with “Also fits → View” switch)
     * -------------------------------------------- */

    // Default active block = top ranked hit
    let activeBlock = scored.length ? scored[0] : null;

  function buildSummaryHTML(scoredList, activeIdx) {
  if (!Array.isArray(scoredList) || !scoredList.length) return "";

  const topHit = scoredList[activeIdx] || scoredList[0];

  // Show up to 2 alternates (same as your current slice(1,3))
  const alternates = scoredList
    .map((b, i) => ({ b, i }))
    .filter(x => x.i !== activeIdx)
    .slice(0, 2);

  const also = alternates.length
    ? alternates.map(x => `
        <div class="also-fits" style="margin-top:6px;">
          <strong>Also fits:</strong> ${x.b.battalion}
          <button
            type="button"
            class="wwi-alsofit-view"
            data-score-index="${x.i}"
            style="padding:4px 12px;font-size:13px;font-weight:600;color:#fff;background:#bab86c;border:1px solid #bab86c;border-radius:6px;cursor:pointer;"
          >⇄ View this match</button>
        </div>
      `).join("")
    : "";

  // --- Shared-number-block explanation as a NOTE inside Summary ---
  const label = String(topHit?.battalion || "");

  const hasSharedString =
    (typeof isGroupedBlock === "function" && isGroupedBlock(topHit)) ||
    /\b\d+(?:st|nd|rd|th)?\s*[–—-]\s*\d+(?:st|nd|rd|th)?\b/i.test(label) ||
    /\b(or)\b/i.test(label) ||
    /[,&]/.test(label) ||
    /\bBattalions\b/i.test(label);

  const hasAlsoFits = alternates.length > 0;

  let noteText = "";
  if (hasAlsoFits && !hasSharedString) {
    noteText =
      "The Summary Card lists more than one possible match because these battalions were issued numbers from a shared enlistment block.";
  } else if (hasSharedString && !hasAlsoFits) {
    noteText =
      "The Primary Match lists more than one possible battalion because these units were issued numbers from a shared enlistment block.";
  } else if (hasSharedString && hasAlsoFits) {
    noteText =
      "Both the Primary Match and the Summary Card list more than one possible battalion because these units were issued numbers from a shared enlistment block.";
  }

const noteHTML = noteText
  ? `
    <div style="margin-top:14px;padding-top:12px;border-top:1px solid #e5e5e5;">
      <p style="margin:0;font-style:italic;color:#555;line-height:1.45;font-size:14px;">
        ${noteText}
      </p>
    </div>
  `
  : "";

  return `
    <div><strong>Primary match:</strong> ${topHit.battalion}</div>
    ${also}
    ${noteHTML}
  `;
}    

    // Helper: render everything for the current activeBlock
    function renderWWIActiveView() {
      const cards = [];

      if (!activeBlock) {
        cards.push(
          renderCard(
            "No Match Found",
            `<p>We couldn't confidently match this service number to a battalion
            block for the selected regiment. Check the regiment and number formatting
            (including any prefixes) and try again.</p>`
          )
        );
        displayTrafficLight("low");
        renderResultGrid(cards);
        return;
      }

      const activeIdx = Math.max(0, scored.indexOf(activeBlock));

      // --- Summary ---
      const summaryHTML = buildSummaryHTML(scored, activeIdx);
      cards.push(renderCard("Summary", summaryHTML));

      // --- Battalion Type Explained (directly after Summary) ---
      const typeExplainerHTML = getBattalionTypeExplainerHTML(activeBlock.category);
      if (typeExplainerHTML) {
        cards.push(renderCard("Battalion Type Explained", typeExplainerHTML));
      }

      // --- TF Notes (Number Lookup: category-driven) ---
      if (activeBlock.category === "tf_pre1917" || activeBlock.category === "tf_renumbering") {
        const tfNote1 =
          `<p style="margin:0;">
             <strong>Split battalions:</strong> Post- Aug 1914, Territorial Force battalions often split into multiple lines (for example the 4th TF Battalion split into 1/4th, 2/4th, 3/4th). The following info only references the 1st line battalion.
           </p>`;

        const tfDivider =
          `<hr style="border:0;border-top:1px solid #bab86c;margin:10px 0;">`;

        const tfNote2 =
          `<p style="margin:0;">
             <strong>1917 renumbering:</strong> In 1917 the Territorial Force underwent a major administrative renumbering,
             with many serving men issued new six-digit service numbers.
             These numbers may therefore reflect renumbering or new enlistment, depending on the individual case.
           </p>`;

        const tfNotesHTML = (activeBlock.category === "tf_renumbering")
          ? (tfNote1 + tfDivider + tfNote2)
          : tfNote1;

        cards.push(renderCard("TF Notes", tfNotesHTML));
      }

// --- Service Battalion Note ---
// Applies to ALL Service battalion matches (including prefix-only single battalions like "12th (Miners)")
if (activeBlock && activeBlock.category === "service") {
  const serviceNoteHTML = `
    <p style="margin:0;">
      Service Battalion soldiers were often routed via depot or reserve battalions before joining a frontline unit, especially early in the war.
      This estimate reflects the most likely Service battalion for this number.
    </p>
  `;
  cards.push(renderCard("Service Battalion Note", serviceNoteHTML));
}
      
      // --- Regular Battalion Note ---
if (
  activeBlock &&
  (activeBlock.category === "regular_prewar" ||
   activeBlock.category === "regular_wartime")
) {
  const regularNoteHTML = `
    <p style="margin:0;">
      <strong>"Duration of War" terms:</strong> Early volunteers could still enlist on traditional Regular terms such as 7 years with the Colours and 5 in the Reserve, but from Nov 1914 most recruits were enlisted simply for “the duration of the war.”
    </p>
  `;
  cards.push(renderCard("Regular Battalion Note", regularNoteHTML));
}
      
      // --- Recruitment Hotspot card (Section D.2) ---
      if (activeBlock.hotspot) {
        const hotspotHTML = (window.renderWWIHotspotHTML
          ? renderWWIHotspotHTML(activeBlock)
          : ""
        );
        const temp = document.createElement("div");
        temp.innerHTML = hotspotHTML;
        const hotspotInner = temp.firstElementChild;
        if (hotspotInner) {
          const hotspotCard = document.createElement("div");
          hotspotCard.className = "wwi-card";
          hotspotCard.innerHTML = hotspotInner.outerHTML;
          cards.push(hotspotCard);
        }
      }

      // --- Enlistment Period ---
      const intakeLabel = hrGetWWIIntakeContextLabel(activeBlock.date);
      const enlistHTML =
        `<p><strong>${activeBlock.date}</strong></p>` +
        (intakeLabel
          ? `<p style="margin-top:8px;color:#555;">${intakeLabel}</p>`
          : "");

      cards.push(renderCard("Probable Enlistment Period", enlistHTML));
      
      // --- Signature engagements / map card ---
      // If grouped battalions have BOTH Western Front battles + an alternate theatre, show a mixed-summary card.
      const __showMixed =
        (typeof shouldShowMixedServiceCard === "function" && shouldShowMixedServiceCard) ||
        (typeof window.shouldShowMixedServiceCard === "function" && window.shouldShowMixedServiceCard);

      const __mixedSummary =
        (typeof buildMixedServiceSummary === "function" && buildMixedServiceSummary) ||
        (typeof window.buildMixedServiceSummary === "function" && window.buildMixedServiceSummary);

      if (__showMixed && __mixedSummary && __showMixed(activeBlock)) {

        cards.push(
          renderCard(
            "Mixed service in this number range",
            `<p>${__mixedSummary(activeBlock)}</p>
             <p style="margin-top:8px;"><em>If you can confirm the battalion (or provide a later renumbered TF number / medal entitlement), we can narrow this down.</em></p>`
          )
        );

      } else if (activeBlock.battles && activeBlock.battles.length) {

        const altNoteHTML =
          (typeof buildAltNotesForNumberLookup === "function")
            ? buildAltNotesForNumberLookup(activeBlock)
            : (typeof window.buildAltNotesForNumberLookup === "function" ? window.buildAltNotesForNumberLookup(activeBlock) : "");

        const mapHTML = `
          <div id="wwi-map-mount" class="theatre-map-wrap" style="height:300px;"></div>
          ${altNoteHTML || ""}
        `;
        cards.push(renderCard("Signature Engagements", mapHTML));

      } else if (activeBlock.alt && Array.isArray(activeBlock.alt) && activeBlock.alt.length) {

        const altOnlyHTML =
          (typeof buildAltNotesForNumberLookup === "function")
            ? buildAltNotesForNumberLookup(activeBlock)
            : (typeof window.buildAltNotesForNumberLookup === "function" ? window.buildAltNotesForNumberLookup(activeBlock) : "");

        cards.push(
          renderCard(
            "Alternate Theatre of Service",
            altOnlyHTML || `<p>Alternate theatres varied between battalions in this number range.</p>`
          )
        );

      } else if (activeBlock.theatre) {

        // IMPORTANT: Do NOT render Signature Engagements at all.
        // Instead render a dedicated card with its own mount, then inject into that.
        const altHTML = `
          <div id="alt-theatre-mount"></div>
        `;
        cards.push(renderCard("Alternate Theatre of Service", altHTML));

        setTimeout(() => {
          if (typeof window.showAlternateTheatreCard === "function") {
            window.showAlternateTheatreCard(activeBlock, "alt-theatre-mount");
          } else if (typeof showAlternateTheatreCard === "function") {
            showAlternateTheatreCard(activeBlock, "alt-theatre-mount");
          } else {
            console.warn("showAlternateTheatreCard missing (scope issue).");
          }
        }, 0);
      }

      // Render cards
      displayTrafficLight("high");
      renderResultGrid(cards);

      /* ------------------------------
       * B.8 — Render Results Grid (post-injections)
       * ------------------------------ */

      // === Add Casualty Burden Card (WWI, universal) ===
      console.log("WWI burden injection running.");
      try {
        const gridEl = document.querySelector("#wwiResult .wwi-grid");
        if (gridEl) {
          const regName =
            document.getElementById("regiment")?.value?.trim() ||
            document.getElementById("regimentSearch")?.value?.trim() ||
            (activeBlock && activeBlock.regiment) ||
            "";
          if (regName) {
            const html = renderCasualtyBurdenCard(regName, "wwi");
            if (html) gridEl.insertAdjacentHTML("beforeend", html);
          } else {
            console.warn("Casualty burden skipped (no regiment name found)");
          }
        }
      } catch (err) {
        console.warn("Casualty burden (WWI) render failed:", err);
      }

      // --- Update traffic-light using true confidence level ---
      const level = (activeBlock && activeBlock.confidenceLevel)
        ? activeBlock.confidenceLevel
        : "Broad";

      updateConfidenceLight(level);

      /* --------------------------------------------
       * B.9 — Draw Maps (Hotspot + Western Front)
       * -------------------------------------------- */

      // === Draw Recruitment Hotspot map (Section D.2) ===
      const hotspotMount = document.getElementById("wwiHotspotMapWrap");
      const hotspotIsNarrative = isHotspotNarrative(activeBlock?.hotspot);
      if (!hotspotIsNarrative && hotspotMount && activeBlock?.hotspot && window.renderWWIHotspotMap) {
        window.renderWWIHotspotMap(hotspotMount, regimentKey || regimentRaw);
      }

      // === Draw Western Front map (Section D.1) ===
      const mapMount = document.getElementById("wwi-map-mount");
      if (mapMount && activeBlock.battles && activeBlock.battles.length) {
        const cities = Array.isArray(activeBlock.cities) ? activeBlock.cities : [];
        renderWWIMap(mapMount, activeBlock.battles, cities);
      }
    }

    // IMPORTANT: we still keep matchedBlock for any legacy logic,
    // but the UI is now driven by activeBlock.
    matchedBlock = scored.length ? scored[0] : null;

    // Initial render
    renderWWIActiveView();

    // Click handler for “Also fits → View”
    // (override each estimate run so we don't stack listeners)
    resultDiv.onclick = function (e) {
      const btn = e.target && e.target.closest ? e.target.closest(".wwi-alsofit-view") : null;
      if (!btn) return;

      const idx = parseInt(btn.getAttribute("data-score-index") || "", 10);
      if (!Number.isFinite(idx) || !scored[idx]) return;

      activeBlock = scored[idx];
      clearResults();
      renderWWIActiveView();
    };
  }
    
 /* ------------------------------
   * B.10 — Event Binding & Public Exposure
   * ------------------------------ */

  if (estimateBtn) {
    estimateBtn.addEventListener("click", estimateWWI);
  }

    // Expose public estimator for the OS (Section A)
  window.__wwiEstimate = estimateWWI;
  
  // Attach shared typeahead to WWI estimator
  initRegimentTypeahead("regimentSearch", "regimentResults", "regiment");

  // --- NEW: expose populated dataset globally for Battalion Explorer ---
  window.WWI_REGIMENT_DATA = Object.assign({}, regimentData);

  console.log("[HRBootWWI] WWI estimator ready.");
}


/* ============================================================
   SECTION B.X.a — WWI BATTALION ENLISTMENT RANGE RESOLVER
   ============================================================ */
function getMatchingNumberBlocks(regimentName, battalionName) {
  const data = window.WWI_REGIMENT_DATA?.[regimentName];
  if (!Array.isArray(data)) {
    console.warn("⚠️ No dataset found for:", regimentName);
    return [];
  }

  const name = battalionName.toLowerCase();
  const bnNumber = (battalionName.match(/^(\d+)/) || [])[1];

  let result = [];

  // --- REGULARS ---
  if (name.includes("regular")) {
    result = data.filter(b =>
      b.category === "regular_prewar" || b.category === "regular_wartime"
    );
  }

  // --- SPECIAL RESERVE ---
  else if (name.includes("special") || name.includes("reserve")) {
    result = data.filter(b => b.category === "misc");
  }

else if (name.includes("territorial")) {
  const tfPre = data.filter(b => b.category === "tf_pre1917");
  const tfPost = [];

  const bnNumberStr = (battalionName.match(/^(\d+)/) || [])[1];
  if (bnNumberStr) {
    const re = new RegExp(`\\b${bnNumberStr}(?:st|nd|rd|th)?\\b`, "i");
    for (const b of data) {
      if (b.category === "tf_renumbering" && re.test(String(b.battalion || ""))) {
        tfPost.push(b);
      }
    }
  }

  // PRIORITY RULE:
  // 1) post-1917 exact TF bn blocks first
  // 2) then pre-1917 pooled TF blocks as filler
  result = tfPost.concat(tfPre);
}

// --- SERVICE BATTALIONS ---
else if (name.includes("service")) {
  const serviceBlocks = [];

  if (bnNumber) {
    const n = parseInt(bnNumber, 10);

    data.forEach(b => {

      // --- CASE-INSENSITIVE CHECK ---
      const cat = (b.category || "").toLowerCase();
      if (cat !== "service") return;

      // Extract just the battalion label (ignore dates and anything in brackets)
      const label = (b.battalion || "").split("(")[0].trim().toLowerCase();

// Detect ALL ranges like "11th–14th & 17th–20th"
const rangeRe = /(\d+)(?:st|nd|rd|th)?\s*[–-]\s*(\d+)/g;
let rangeMatch = null;

      // Extract ONLY battalion numbers from the label (dates safely ignored)
      const nums = (label.match(/\d+/g) || []).map(Number);

      let inRange = false;

// Range detection (supports MULTIPLE ranges in one label)
while ((rangeMatch = rangeRe.exec(label)) !== null) {
  const low  = parseInt(rangeMatch[1], 10);
  const high = parseInt(rangeMatch[2], 10);
  if (n >= low && n <= high) { inRange = true; break; }
}

      // Explicit number detection ("12th or 13th", "10th and 12th" etc.)
      if (nums.includes(n)) inRange = true;

      if (inRange) serviceBlocks.push(b);
    });
  }

  result = serviceBlocks;
}

  // --- DEFAULT (nothing matched) ---
  else {
    console.log("ℹ️ No specific match logic triggered for:", battalionName);
    result = [];
  }

  console.log("✅ getMatchingNumberBlocks returning", result.length, "matches");
  return result;
}


/* ============================================================
   SECTION B.X.b — WWI BATTALION ENLISTMENT CARD RENDERER
   ============================================================ */

   //B.X.b.0 — DISPLAY-ONLY NUMBER FUZZ (protect exact ranges)

function formatFuzzyRange(min, max) {
  if (!Number.isFinite(min) || !Number.isFinite(max)) return "—";
  if (max < min) [min, max] = [max, min];

  const width = max - min;

  // HUGE blocks: avoid any fake precision
  if (width >= 100000) {
    const top =
      (max >= 1000000) ? "seven-digit allocations" :
      (max >= 100000)  ? "six-digit allocations"  :
      (max >= 10000)   ? "five-digit allocations" :
                         "four-digit allocations";
    return `Broad regimental number sequence`;
  }

  // Large blocks: still avoid reconstructable boundaries
  if (width >= 50000) {
    return "Broad regimental number sequence";
  }

  // Smaller blocks: “early/mid/late ####s” language
  const a = fuzzyThousands(min);
  const b = fuzzyThousands(max);
  return (a === b) ? a : `${a} to ${b}`;
}

function fuzzyThousands(n) {
  const base = Math.floor(n / 1000) * 1000;  // 24700 -> 24000
  const within = n - base;                   // 24700 -> 700

  let pos = "early";
  if (within >= 700) pos = "late";
  else if (within >= 350) pos = "mid";

  return `${pos} ${base.toLocaleString()}s`;
}

//End making the number ranges fuzzy!

// ============================================================
// B.X.b.A — Outbreak-driven suppression for enlistment-date rows
// ============================================================

function hrMonthToNum(mon) {
  const m = String(mon || "").toLowerCase().slice(0, 3);
  const map = { jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12 };
  return map[m] || null;
}

// Returns {y, m} where m is 1–12, OR null if nothing usable found
function hrParseCutoffFromOutbreak(outbreakText) {
  const s = String(outbreakText || "").replace(/\s+/g, " ").trim();
  if (!s) return null;

  // 1) Strong match: Month YYYY (Jan 1917 / January 1917)
  const monthRe = /\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\b[^0-9]{0,10}\b(19\d{2})\b/i;
  const mm = s.match(monthRe);
  if (mm) {
    const m = hrMonthToNum(mm[1]);
    const y = parseInt(mm[2], 10);
    if (m && y) return { y, m };
  }

  // 2) Weaker match: (early|mid|late) YYYY  OR  "in 1917"
  const yearRe = /\b(early|mid|late)?\s*(19\d{2})\b/i;
  const yy = s.match(yearRe);
  if (yy) {
    const y = parseInt(yy[2], 10);
    const qual = (yy[1] || "").toLowerCase();
    const m =
      (qual === "late") ? 10 :
      (qual === "mid")  ? 6  :
      1; // early/blank -> Jan
    if (y) return { y, m };
  }

  return null;
}

// Pull the outbreak text from the SAME battalion list used by renderBattalionOutbreakCard()
function hrGetBattalionOutbreakText(regimentName, battalionName) {
  const list = window.BATTALION_LISTS?.[regimentName];
  if (!Array.isArray(list)) return "";

  let entry = list.find(b => b.name === battalionName);

  // Same Service fallback as renderBattalionOutbreakCard
  if (!entry) {
    const bnNum = (() => {
      const m = String(battalionName).match(/^(\d+)/);
      return m ? parseInt(m[1], 10) : null;
    })();

    if (bnNum != null) {
      entry = list.find(b => {
        const nm = String(b?.name || "").toLowerCase();
        if (!nm.includes("service")) return false;

        const rangeRe = /(\d+)(?:st|nd|rd|th)?\s*[–-]\s*(\d+)(?:st|nd|rd|th)?/g;
        let m;
        while ((m = rangeRe.exec(nm)) !== null) {
          const lo = parseInt(m[1], 10);
          const hi = parseInt(m[2], 10);
          if (bnNum >= lo && bnNum <= hi) return true;
        }
        return false;
      });
    }
  }

  return String(entry?.outbreak || "").trim();
}

// Parse the END of a "date" string like "Aug 1914 – mid 1915" => serial months
// Returns null if it can't parse anything; very early for "Pre-WWI"
function hrParseEndSerialFromDateLabel(dateLabel) {
  const s = String(dateLabel || "").replace(/\s+/g, " ").trim();
  if (!s) return null;

  // If it explicitly says Pre-WWI, treat as "way before"
  if (/pre[-\s]*wwi/i.test(s) || /\bpre[-\s]*war\b/i.test(s)) return -999999;

  // Find ALL month+year occurrences; use the LAST one (end of range)
  const re = /\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\b[^0-9]{0,10}\b(19\d{2})\b/ig;
  let last = null;
  let m;
  while ((m = re.exec(s)) !== null) last = m;
  if (last) {
    const month = hrMonthToNum(last[1]);
    const year  = parseInt(last[2], 10);
    if (month && year) return (year * 12 + (month - 1));
  }

  // Fallback: last year in string, with early/mid/late cue (or none)
  const yAll = [...s.matchAll(/\b(early|mid|late)?\s*(19\d{2})\b/ig)];
  if (yAll.length) {
    const lastY = yAll[yAll.length - 1];
    const qual = String(lastY[1] || "").toLowerCase();
    const year = parseInt(lastY[2], 10);
    const month =
      (qual === "late") ? 10 :
      (qual === "mid")  ? 6  :
      1;
    if (year) return (year * 12 + (month - 1));
  }

  return null;
}

function renderEnlistmentNumbersCard(regimentName, battalionName, gridEl) {
  const mount = gridEl || document.getElementById("battalionResults");
  if (!mount) return;
  if (!gridEl) mount.innerHTML = "";

  const matches = getMatchingNumberBlocks(regimentName, battalionName);
  if (!matches.length) {
    mount.innerHTML = `
      <div class="wwi-card wwi-warning-card">
        <h3>Possible Enlistment Numbers</h3>
        <p>No number blocks found for ${battalionName}.</p>
      </div>`;
    return;
  }

  const seen = new Set();
  const sorted = [...matches]
    .sort((a, b) => (a.range?.[0] || 0) - (b.range?.[0] || 0))
    .filter(m => {
      const key = `${m.range?.[0]}-${m.range?.[1]}-${m.category || ""}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  
    // --- NEW: suppress enlistment rows that end before the battalion "formed" date in Outbreak card ---
  const outbreakText = hrGetBattalionOutbreakText(regimentName, battalionName);
  const cutoff = hrParseCutoffFromOutbreak(outbreakText);
  const cutoffSerial = cutoff ? (cutoff.y * 12 + (cutoff.m - 1)) : null;

  const displaySorted = (cutoffSerial == null)
    ? sorted
    : sorted.filter(m => {
        const endSerial = hrParseEndSerialFromDateLabel(m.date);
        if (endSerial == null) return true; // if we can't parse it, don't hide it
        return endSerial >= cutoffSerial;   // keep only rows ending on/after cutoff
      });
  
// --- Prefix note (prefer battalion-specific prefix; fallback to all) ---
let prefixNote = "";

// Try to infer selected battalion number (e.g. "5th ..." => 5)
let selectedBnNum = null;
{
  const m = String(battalionName || "").trim().match(/^(\d+)(?:st|nd|rd|th)\b/i);
  if (m) selectedBnNum = m[1]; // keep as string
}

// Collect all allowed prefixes across the matched blocks
const prefixSet = new Set();
for (const m of displaySorted) {
  if (m.requiresPrefix && Array.isArray(m.allowedPrefixes)) {
    for (let p of m.allowedPrefixes) {
      p = String(p || "").replace(/\./g, "");
      p = p.endsWith("/") ? p : (p + "/");
      if (p) prefixSet.add(p);
    }
  }
}

const prefixes = Array.from(prefixSet);

// If we can infer the battalion number, prefer the matching prefix (e.g. "5/" for 5th)
let chosen = "";
if (selectedBnNum && prefixes.length) {
  const want = `${selectedBnNum}/`;
  if (prefixSet.has(want)) chosen = want;
}

// If no specific match, show all prefixes (truthful fallback for grouped selections)
if (!chosen && prefixes.length) {
  chosen = prefixes.join(" or ");
}

if (chosen) {
  const examples = chosen.split(/\s+or\s+/).map(p => `${p}1234`).join(" or ");
  prefixNote = `
    <p class="source-note" style="margin-top:10px;">
      <strong>Prefix Note:</strong> Numbers in these ranges were normally written with the prefix ${chosen}
      (e.g. ${examples}). This was especially common in the early years of the WWI.
    </p>`;
}

const rows = displaySorted.map(m => {
  const a = m.range?.[0] ?? "?";
  const b = m.range?.[1] ?? "?";
  const range = (Number.isFinite(a) && Number.isFinite(b))
  ? formatFuzzyRange(a, b)
  : `${a} – ${b}`;
  const date = m.date ? `<em>${m.date}</em>` : `<em>Date unknown</em>`;
  return `<tr>
            <td style="padding:4px 12px;font-weight:600;">${range}</td>
            <td style="padding:4px 12px;">${date}</td>
          </tr>`;
}).join("");

mount.insertAdjacentHTML("beforeend", `
  <div class="wwi-card">
<h3>Possible Enlistment Numbers</h3>
<p class="battalion-note">
  This dataset is only relevant if the soldier enlisted directly with this battalion.
  Transfers were common due to mass casualties, logistical demands, and wider Army reorganisation.
</p>
<table style="
        width:100%;
        border-collapse:collapse;
        margin-top:8px;
        border:1px solid #bab86c;
        font-size:15px;
      ">
        <thead style="background:#f6f6f6;">
          <tr style="border-bottom:2px solid #bab86c;">
            <th style="text-align:left;padding:8px 10px;border-right:1px solid #bab86c;">Number Range</th>
            <th style="text-align:left;padding:8px 10px;">Approx. Enlistment Dates</th>
          </tr>
        </thead>
        <tbody>
          ${displaySorted.map(m => {
            const a = m.range?.[0] ?? "?";
            const b = m.range?.[1] ?? "?";
            const range = (Number.isFinite(a) && Number.isFinite(b))
  ? formatFuzzyRange(a, b)
  : `${a} – ${b}`;
            const date = m.date ? `<em>${m.date}</em>` : `<em>Date unknown</em>`;
            return `
              <tr style="border-top:1px solid #ddd;">
                <td style="padding:8px 10px;border-right:1px solid #bab86c;">${range}</td>
                <td style="padding:8px 10px;">${date}</td>
              </tr>`;
          }).join("")}
        </tbody>
      </table>
      ${prefixNote}
    </div>
  </div>`);

  // --- Numbering note card (shared blocks clarification)
  mount.insertAdjacentHTML("beforeend", `
    <div class="wwi-card">
      <h3>Number Range Note</h3>
      <p style="margin:0;">
        Many battalions drew their enlistment numbers from shared blocks that were also used by other battalions during the same intake period. This means multiple battalions can legitimately fall within the same number range.
      </p>
    </div>
  `);

}

/* ============================================================
   SECTION B.X.c — WWI BATTALION SIGNATURE BATTLES CARD
   ============================================================ */
function renderBattalionBattlesCard(regimentName, battalionName, gridEl) {
  const mount = gridEl || document.getElementById("battalionResults");
  if (!mount) return;

  const regimentData = window.WWI_REGIMENT_DATA?.[regimentName];
  if (!Array.isArray(regimentData)) return;

   // --- Extract bnNumber anywhere in string ---
  const cleanBn = String(battalionName || "").trim().toLowerCase();
  const numberMatch = cleanBn.match(/(\d+)(?:st|nd|rd|th)?/);
  const bnNumber = numberMatch ? parseInt(numberMatch[1], 10) : null;
  
    function blockMatchesSelectedType(block) {
    const selected = String(battalionName || "").toLowerCase();
    const cat = String(block?.category || "").toLowerCase();

    const isRegular = selected.includes("(regular)");
    const isTF =
      selected.includes("(tf)") ||
      selected.includes("territorial");
    const isService = selected.includes("service");

    if (isRegular) {
      return cat === "regular_prewar" || cat === "regular_wartime";
    }

    if (isTF) {
      return cat === "tf_pre1917" || cat === "tf_renumbering";
    }

    if (isService) {
      return cat === "service";
    }

    return true;
  }

  // NEW: if battalion name contains no number (e.g. "Highland Cyclist ..."),
  // try to resolve theatre by direct name match and show the theatre card.
  if (!bnNumber || isNaN(bnNumber)) {
    const exact = regimentData.find(b => {
      const lbl = String(b?.battalion || "").trim().toLowerCase();
      return lbl === cleanBn || lbl.includes(cleanBn) || cleanBn.includes(lbl);
    });

    const t = exact?.theatre ? String(exact.theatre).trim() : "";
    if (t && (typeof window.isNonMapTheatre === "function" ? window.isNonMapTheatre(t) : false)) {
      const card = document.createElement("div");
      card.className = "wwi-card";
      card.innerHTML = `<h3>Alternate Theatre of Service</h3><p>${getAlternateTheatreMessage(t)}</p>`;
      mount.appendChild(card);
    }
    return;
  }

  // --- Containers ---
  const uniqueBattles = [];
  const citySet = new Set();
  
  // If we have any exact single-battalion blocks for this bn, ignore grouped labels like "4th–5th Battalions"
let hasExactSingleBnMatch = false;

  function pushBattlesFrom(block) {
    if (!Array.isArray(block.battles)) return;
    for (const battle of block.battles) {
      if (!uniqueBattles.includes(battle)) {
        uniqueBattles.push(battle);
        if (uniqueBattles.length >= 4) return;
      }
    }
  }

  function pushCitiesFrom(block) {
    if (!Array.isArray(block.cities)) return;
    for (const c of block.cities) citySet.add(c);
  }
  
 function matchesExactSingleBn(block) {
  const txt = String(block?.battalion || "").toLowerCase();
  if (!bnNumber) return false;
  if (!blockMatchesSelectedType(block)) return false;

  const tok = new RegExp(`\\b${bnNumber}(?:st|nd|rd|th)?\\b`, "i");
  if (!tok.test(txt)) return false;

  const rangeLead = new RegExp(`\\b${bnNumber}(?:st|nd|rd|th)?\\b\\s*[–-]`, "i");
  if (rangeLead.test(txt)) return false;

  if (/\bbattalions\b/i.test(txt)) return false;

  return true;
}

function matchesGroupedIncludingBn(block) {
  const txt = String(block?.battalion || "").toLowerCase();
  if (!bnNumber) return false;
  if (!blockMatchesSelectedType(block)) return false;

  const rangeRe = /\b(\d+)(?:st|nd|rd|th)?\s*[–-]\s*(\d+)(?:st|nd|rd|th)?\b/gi;
  let m;
  while ((m = rangeRe.exec(txt)) !== null) {
    const lo = parseInt(m[1], 10);
    const hi = parseInt(m[2], 10);
    if (bnNumber >= lo && bnNumber <= hi) return true;
  }

  const nums = (txt.match(/\d+/g) || []).map(n => parseInt(n, 10)).filter(Number.isFinite);
  if (nums.includes(bnNumber) && /\bbattalions\b/i.test(txt)) return true;

  return false;
}

// Decide which blocks we accept:
// - If we have any exact single-bn blocks, accept ONLY those
// - Otherwise accept grouped blocks
function acceptBlock(block) {
  if (hasExactSingleBnMatch) return matchesExactSingleBn(block);
  return matchesExactSingleBn(block) || matchesGroupedIncludingBn(block);
}
  
  // SPECIAL CASE: allow pooled pre-1917 TF blocks to act as "top-up"
// even when we have an exact single-bn match (post-1917 TF).
function acceptBlockForTFPreTopUp(block) {
  return matchesExactSingleBn(block) || matchesGroupedIncludingBn(block);
}

// Evaluate once: do we have any exact single-bn blocks for this selection?
hasExactSingleBnMatch = regimentData.some(matchesExactSingleBn);
  
// ===============================================================
// ALT / THEATRE OVERRIDE (battalion lookup)
// If this selected battalion is tagged as India/Home/East/Disbanded via block.alt,
// we suppress battles/top-up and show the theatre note.
// ===============================================================
let overrideTheatre = null;

// 1) Prefer explicit alt tag on ANY accepted matching block
regimentData.forEach(block => {
  if (overrideTheatre) return;
  if (!acceptBlock(block)) return;

const t = (typeof window.getAltTheatreForBn === "function")
  ? window.getAltTheatreForBn(block, bnNumber)
  : null;
if (t) overrideTheatre = t;
});

// 2) Fallback: post-1917 exact TF theatre (only if no alt tag)
if (!overrideTheatre) {
  regimentData.forEach(block => {
    if (overrideTheatre) return;
    if (block.category !== "tf_renumbering") return;

    if (matchesExactSingleBn(block) && block.theatre) {
      overrideTheatre = String(block.theatre).trim();
    }
  });
}

// 3) If override theatre is non-map, show theatre note and STOP
if (
  overrideTheatre &&
  (typeof window.isNonMapTheatre === "function" ? window.isNonMapTheatre(overrideTheatre) : false)
) {
  const card = document.createElement("div");
  card.className = "wwi-card";
  card.innerHTML = `<h3>Alternate Theatre of Service</h3><p>${getAlternateTheatreMessage(overrideTheatre)}</p>`;
  mount.appendChild(card);
  return; // 🚫 stop before any battles/top-up logic runs
}

  // ===============================================================
  // PRIORITY 1 — TF Renumbering blocks
  // ===============================================================
  regimentData.forEach(block => {
    if (block.category === "tf_renumbering" && acceptBlock(block)) {
      pushBattlesFrom(block);
      pushCitiesFrom(block);
    }
  });

// PRIORITY 2 — TF Pre-1917 blocks
if (uniqueBattles.length < 4) {
  regimentData.forEach(block => {
    if (block.category === "tf_pre1917" && acceptBlockForTFPreTopUp(block)) {
      pushBattlesFrom(block);
      pushCitiesFrom(block);
    }
  });
}
  
  // ===============================================================
  // PRIORITY 3 — Any other matching blocks
  // ===============================================================
  if (uniqueBattles.length < 4) {
    regimentData.forEach(block => {
      const cat = block.category;
      if (cat === "tf_renumbering" || cat === "tf_pre1917") return;
      if (acceptBlock(block)) {
        pushBattlesFrom(block);
        pushCitiesFrom(block);
      }
    });
  }

  // ===========================================
  // Build card + include the MAP
  // ===========================================
  const card = document.createElement("div");
  card.className = "wwi-card";

  card.innerHTML = `<h3>Signature Battles</h3>`;

// No battles?
if (uniqueBattles.length === 0) {
  
    // --- NEW: try battalion-specific ALT theatre first (grouped blocks) ---
  let altTheatre = null;
  regimentData.forEach(block => {
    if (altTheatre) return;
    if (!acceptBlock(block)) return;

    const t = (typeof getAltTheatreForBn === "function")
      ? getAltTheatreForBn(block, bnNumber)
      : (typeof window.getAltTheatreForBn === "function" ? window.getAltTheatreForBn(block, bnNumber) : null);

    if (t) altTheatre = t;
  });

  if (altTheatre) {
    const msg = getAlternateTheatreMessage(altTheatre);
    card.innerHTML = `<h3>Alternate Theatre of Service</h3>`;
    card.innerHTML += `<p>${msg}</p>`;
    mount.appendChild(card);
    return;
  }

  // Try to find a theatre flag from any matching block
  let theatre = null;
    if (!theatre && overrideTheatre) theatre = overrideTheatre;

 regimentData.forEach(block => {
  if (!theatre && acceptBlock(block) && block.theatre) theatre = block.theatre;
});

if (theatre) {
  const msg = getAlternateTheatreMessage(theatre);

  // Swap title: this card is no longer “Signature Battles”
  card.innerHTML = `<h3>Alternate Theatre of Service</h3>`;
  card.innerHTML += `<p>${msg}</p>`;

  mount.appendChild(card);
  return;
}

  // Default fallback
  card.innerHTML += `<p>No battle data available for ${battalionName}.</p>`;
  mount.appendChild(card);
  return;
}

  // Limit battles to 4
  const battlesLimited = uniqueBattles.slice(0, 4);

  // Add map container (RESTORED)
  const mapDiv = document.createElement("div");
  mapDiv.id = "battalion-battles-map";
  mapDiv.className = "theatre-map-wrap";
  mapDiv.style.height = "300px";
  card.appendChild(mapDiv);

  // Add card to page
  mount.appendChild(card);

  // Render the map (RESTORED)
  const cities = Array.from(citySet);
  if (typeof window.renderWWIMap === "function") {
    renderWWIMap(mapDiv, battlesLimited, cities);
  }
}

/* ============================================================
   SECTION B.X.d — WWI BATTALION HOTSPOT CARD (uses SAME matcher as Battles)
   ============================================================ */
function renderBattalionHotspotCard(regimentName, selectedBn, gridEl) {
  const mount = gridEl || document.getElementById("battalionResults");
  if (!mount) return;

  // --- pull the same array Battles uses ---
  const regBlocks = window.WWI_REGIMENT_DATA?.[regimentName];
  if (!Array.isArray(regBlocks) || !regBlocks.length) return;

  // --- USE THE SAME MATCHING as Signature Battles ---
  const bnNum = (() => {
    const m = String(selectedBn).match(/^(\d+)/);
    return m ? parseInt(m[1], 10) : null;
  })();
  
    function blockMatchesSelectedType(block) {
    const selected = String(selectedBn || "").toLowerCase();
    const cat = String(block?.category || "").toLowerCase();

    const isRegular = selected.includes("(regular)");
    const isTF =
      selected.includes("(tf)") ||
      selected.includes("territorial");
    const isService = selected.includes("service");

    if (isRegular) {
      return cat === "regular_prewar" || cat === "regular_wartime";
    }

    if (isTF) {
      return cat === "tf_pre1917" || cat === "tf_renumbering";
    }

    if (isService) {
      return cat === "service";
    }

    return true;
  }

    function matchesBlock(block) {
    const btxt = String(block.battalion || "");
    if (!btxt) return false;
    if (!blockMatchesSelectedType(block)) return false;

    const flat = btxt.toLowerCase();

    if (bnNum != null) {
      const rangeRe = /(\d+)(?:st|nd|rd|th)?\s*[–-]\s*(\d+)(?:st|nd|rd|th)?/g;
      let m;
      while ((m = rangeRe.exec(flat)) !== null) {
        const lo = parseInt(m[1], 10);
        const hi = parseInt(m[2], 10);
        if (bnNum >= lo && bnNum <= hi) return true;
      }
    }

    if (bnNum != null) {
      const nums = (flat.match(/\d+/g) || []).map(Number);
      if (nums.includes(bnNum)) return true;
    }

    if (flat.includes(String(selectedBn).toLowerCase())) return true;

    return false;
  }
  
  // --- gather hotspots from the SAME matched set Battles would use ---
  const hotspotSet = new Set();
 const matchedAll = regBlocks.filter(matchesBlock);

// PRIORITY: post-1917 TF blocks first, then pre-1917 TF blocks (only as top-up)
const matchedPostTF = matchedAll.filter(b => b.category === "tf_renumbering");
const matchedPreTF  = matchedAll.filter(b => b.category === "tf_pre1917");

// Keep non-TF blocks (if any) after TF logic, just in case something odd is labelled “Territorial”
const matchedOther  = matchedAll.filter(b => b.category !== "tf_renumbering" && b.category !== "tf_pre1917");

function addHotspotsFromBlocks(blocks) {
  for (const b of blocks) {
    if (!b || !b.hotspot) continue;
    const hs = Array.isArray(b.hotspot) ? b.hotspot : [b.hotspot];
    for (const h of hs) {
      if (hotspotSet.size >= 3) return; // cap here (this is your “any space left” rule)
      hotspotSet.add(h);
    }
  }
}

function isExactSingleBnBlock(block) {
  if (!block) return false;
  if (bnNum == null) return false;
  if (!blockMatchesSelectedType(block)) return false;

  const flat = String(block.battalion || "").toLowerCase();
  if (!flat) return false;

  const tok = new RegExp(`\\b${bnNum}(st|nd|rd|th)?\\b`, "i");
  if (!tok.test(flat)) return false;

  const rangeLead = new RegExp(`\\b${bnNum}(st|nd|rd|th)?\\b\\s*[–-]`, "i");
  if (rangeLead.test(flat)) return false;

  if (/[,&]/.test(flat)) return false;
  if (/\band\b/i.test(flat)) return false;
  if (/\bbattalions\b/i.test(flat)) return false;

  return true;
}

const matchedExactSingle = matchedAll.filter(isExactSingleBnBlock);

if (matchedExactSingle.length) {
  addHotspotsFromBlocks(matchedExactSingle);

  // top-up in your existing priority order, but avoid wasting the 3-slot cap on exact blocks again
  if (hotspotSet.size < 3) addHotspotsFromBlocks(matchedPostTF.filter(b => !matchedExactSingle.includes(b)));
  if (hotspotSet.size < 3) addHotspotsFromBlocks(matchedPreTF.filter(b => !matchedExactSingle.includes(b)));
  if (hotspotSet.size < 3) addHotspotsFromBlocks(matchedOther.filter(b => !matchedExactSingle.includes(b)));
} else {
  // Original behaviour
  addHotspotsFromBlocks(matchedPostTF);
  addHotspotsFromBlocks(matchedPreTF);
  addHotspotsFromBlocks(matchedOther);
}

  // --- build card ---
const card = document.createElement("div");
card.className = "wwi-card";
  card.innerHTML = `<h3>Recruitment Hotspots</h3>`;

let hotspots = Array.from(hotspotSet); // already capped to 3 above, but safe anyway
hotspots = hotspots.slice(0, 3);

  const narrativeOnly = (hotspots.length === 1 && isHotspotNarrative(hotspots[0]));

if (!hotspots.length) {
  card.innerHTML += `<p>No recruitment data available for ${selectedBn}.</p>`;
  mount.appendChild(card);
  return;
}

const list = hotspots.map(h => `<li>${h}</li>`).join("");

  const mapId = `battalionHotspotMap-${Date.now()}-${Math.random().toString(36).slice(2)}`;

if (narrativeOnly) {
  card.innerHTML += `
    <div class="hotspot-content">
      <div class="hotspot-left">
        <p style="margin:0;">${String(hotspots[0]).trim()}</p>
      </div>
    </div>
  `;
} else {
  card.innerHTML += `
    <div class="hotspot-content">
      <div class="hotspot-left"><ul>${list}</ul></div>
      <div class="hotspot-right">
        <div class="theatre-map-wrap" id="${mapId}" style="height:140px;width:170px;"></div>
      </div>
    </div>
  `;
}

 mount.insertAdjacentHTML("beforeend", card.outerHTML);

  // draw the same small map (regiment centroid is fine here)
const el = document.getElementById(mapId);
if (!narrativeOnly && el && window.renderWWIHotspotMap) {
  renderWWIHotspotMap(el, regimentName);
}
}

/* ============================================================
   SECTION B.X.e — WWI BATTALION OUTBREAK / FORMATION CARD
   ============================================================ */
function renderBattalionOutbreakCard(regimentName, battalionName) {
  const list = window.BATTALION_LISTS?.[regimentName];
  if (!Array.isArray(list)) return "";

let entry = list.find(b => b.name === battalionName);

// Fallback: if battalionName is "18th (Service) Battalion" but list uses grouped ranges,
// match by bn number inside any ranges in the entry name.
if (!entry) {
  const bnNum = (() => {
    const m = String(battalionName).match(/^(\d+)/);
    return m ? parseInt(m[1], 10) : null;
  })();

  if (bnNum != null) {
    entry = list.find(b => {
      const nm = String(b?.name || "").toLowerCase();
      if (!nm.includes("service")) return false;

      const rangeRe = /(\d+)(?:st|nd|rd|th)?\s*[–-]\s*(\d+)(?:st|nd|rd|th)?/g;
      let m;
      while ((m = rangeRe.exec(nm)) !== null) {
        const lo = parseInt(m[1], 10);
        const hi = parseInt(m[2], 10);
        if (bnNum >= lo && bnNum <= hi) return true;
      }
      return false;
    });
  }
}

if (!entry || !entry.outbreak) return "";

  const isFormed = entry.outbreak.toLowerCase().startsWith("formed");
  const detail = entry.outbreak.replace(/\.$/, ""); // remove any trailing period

  // Build dynamic narrative
  const sentence = isFormed
    ? `To meet the needs of a hugely expanded British Army, the <strong>${battalionName}</strong> were ${detail}.`
    : `At the start of the First World War, on the 4th August 1914, the <strong>${battalionName}</strong> were ${detail}.`;

  return `
    <div class="wwi-card">
      <h3>Outbreak of WWI</h3>
      <p>${sentence}</p>
    </div>
  `;

}

/* ============================================================
   SECTION B.X — WWI BATTALION HISTORY BOOT
   ============================================================ */

function HRBootWWIBattalion() {
  console.log("[HRBootWWIBattalion] Booting…");

  // --- Attach the shared typeahead to this panel ---
  initRegimentTypeahead("regimentSearchBattalion", "regimentResultsBattalion", null, populateBattalions);

  // --- Populate the Battalion dropdown when a regiment is picked ---
  function populateBattalions(regimentName) {
    const battalionSelect = document.getElementById("battalionSelect");
    if (!battalionSelect) return;
    battalionSelect.innerHTML = "<option value=''>Select Battalion</option>";
// Prefer manual list if available, else fall back to dataset parser
const list = window.BATTALION_LISTS[regimentName] ||
  ((typeof getBattalionsFromDataset === "function")
    ? getBattalionsFromDataset(regimentName)
    : []);
 list.forEach(bn => {
  const name = typeof bn === "string" ? bn : bn.name;
  const opt = document.createElement("option");
  opt.value = name;
  opt.textContent = name;
  battalionSelect.appendChild(opt);
});
  } // ← end populateBattalions()

  // --- When Explore button is clicked, build the “Possible Enlistment Numbers” card ---
  // BEGIN PATCH — single grid container for Battalion Explorer
  const exploreBtn = document.getElementById("exploreBattalionBtn");
exploreBtn.addEventListener("click", function () {
const regimentName = (document.getElementById("regimentSearchBattalion")?.value || "").trim();
const selectedBn   = (document.getElementById("battalionSelect")?.value || "").trim();
  if (!regimentName || !selectedBn) return;

  // 1️⃣ Clear the old results and build ONE .wwi-grid container
  const mount = document.getElementById("battalionResults");
  if (!mount) return;
  mount.innerHTML = `<div class="wwi-grid" id="battalionGrid"></div>`;
  const grid = document.getElementById("battalionGrid");
  if (!grid) return;
  
   // 3️⃣ Outbreak / Formation card
  const outbreakHTML = renderBattalionOutbreakCard(regimentName, selectedBn);
  if (outbreakHTML) grid.insertAdjacentHTML("beforeend", outbreakHTML);
  
   // Battalion Type Explained (Explorer — self-contained)

let explorerCategory = null;

if (typeof getMatchingNumberBlocks === "function") {
  const matches = getMatchingNumberBlocks(regimentName, selectedBn);

  if (Array.isArray(matches) && matches.length) {

    if (matches.some(m => m.category === "service")) {
      explorerCategory = "service";
    }

    else if (matches.some(m =>
      m.category === "tf_pre1917" || m.category === "tf_renumbering"
    )) {
      explorerCategory = "tf";
    }

    else if (matches.some(m =>
      m.category === "regular_prewar" || m.category === "regular_wartime"
    )) {
      explorerCategory = "regular";
    }
  }
}

if (explorerCategory) {

  let explainerHTML = "";

  if (explorerCategory === "regular") {
    explainerHTML = `
      <p><strong>Regular battalions</strong> were the Army’s full-time professional units. Men could enlist into Regulars both before and during the war, and these battalions were continually reinforced as the conflict progressed.</p>
    `;
  }

  else if (explorerCategory === "tf") {
    explainerHTML = `
      <p><strong>Territorial Force battalions</strong> were locally raised units within the county regiment system. Although originally organised for part-time service, once mobilised they operated as full front-line battalions and served overseas in large numbers.</p>
    `;
  }

  else if (explorerCategory === "service") {
    explainerHTML = `
      <p><strong>Service battalions</strong> were wartime-raised units created from 1914 as part of Kitchener’s New Army. They were formed largely from civilian volunteers (and later conscripts), trained rapidly, and deployed as complete battalions.</p>
    `;
  }

  grid.insertAdjacentHTML("beforeend", `
    <div class="wwi-card">
      <h3>Battalion Type Explained</h3>
      ${explainerHTML}
    </div>
  `);
}
  
    // --- TF Notes (Battalion Lookup: show BOTH notes for any TF selection) ---
  if (selectedBn.toLowerCase().includes("territorial") || selectedBn.toLowerCase().includes("(tf)")) {
    const tfNote1 =
      `<p style="margin:0;">
         <strong>Split battalions:</strong> Post-1914, Territorial Force battalions often split into multiple lines (for example the 4th TF Battalion split into 1/4th, 2/4th, 3/4th). The following info only references the 1st line battalion.
       </p>`;

    const tfNote2 =
      `<p style="margin:10px 0 0 0;">
         <strong>1917 renumbering:</strong> In 1917 the Territorial Force underwent a major administrative renumbering,
         with many serving men issued new six-digit service numbers.
         Six-digit TF numbers may therefore reflect renumbering or new enlistment, depending on the individual case.
       </p>`;

    grid.insertAdjacentHTML("beforeend", `
      <div class="wwi-card">
        <h3>TF Notes</h3>
        ${tfNote1}
        <hr style="border:none;border-top:1px solid #bab86c;margin:10px 0;">
        ${tfNote2}
      </div>
    `);
  }
  
    // --- Regular Battalion Note (Battalion Lookup) ---
  if (selectedBn.toLowerCase().includes("(regular)")) {
    grid.insertAdjacentHTML("beforeend", `
      <div class="wwi-card">
        <h3>Regular Battalion Note</h3>
        <p style="margin:0;">
          <strong>"Duration of War" terms:</strong> Early volunteers could still enlist on traditional Regular terms such as 7 years with the Colours and 5 in the Reserve, but from Nov 1914 most recruits were enlisted simply for “the duration of the war.”
        </p>
      </div>
    `);
  }
  
    // --- Service Battalion Note (Battalion Lookup) ---
  if (selectedBn.toLowerCase().includes("service")) {
    grid.insertAdjacentHTML("beforeend", `
      <div class="wwi-card">
        <h3>Service Battalion Note</h3>
        <p style="margin:0;">
          Service Battalion soldiers were often routed via depot or reserve battalions before joining a frontline unit, especially early in the war.
        </p>
      </div>
    `);
  }

  // 2️⃣ Append each card directly into that single grid
  renderBattalionHotspotCard(regimentName, selectedBn, grid);
  ensureStoryCTACardBattalion(grid);
  renderEnlistmentNumbersCard(regimentName, selectedBn, grid);
  renderBattalionBattlesCard(regimentName, selectedBn, grid);

  // 4️⃣ Casualty Burden card
  try {
    const html = renderCasualtyBurdenCard(regimentName, "wwi");
    if (html) grid.insertAdjacentHTML("beforeend", html);
  } catch (err) {
    console.warn("Casualty burden (WWI battalion explorer) render failed:", err);
  }
});
// END PATCH

  console.log("[HRBootWWIBattalion] Ready.");
}

/* ============================================================
   SECTION B.X.d — WWII REGIMENTAL HISTORY BOOT
   ============================================================ */
function HRBootWWIIRegimental() {
  console.log("[HRBootWWIIRegimental] Booting…");

initRegimentTypeahead(
  "regimentSearchWWII",
  "regimentResultsWWII",
  null,
  handleRegimentalPick,
  window.WWII_REGIMENT_LIST
);

  // ---- When a regiment is chosen or Explore is clicked ----
function handleRegimentalPick(regimentName) {
  const results = document.getElementById("regimentalResults");
  if (!results || !regimentName) return;

  // 1️⃣ Clear results and create ONE grid (matches WWI pattern)
  results.innerHTML = `<div class="wwi-grid" id="wwiiRegimentalGrid"></div>`;
  const grid = document.getElementById("wwiiRegimentalGrid");
  
  // Safety: if grid mount failed, stop before we throw and kill rendering
  if (!grid) return;

   // 3️⃣ ⭐ Enlistment Number Range card
renderWWIIEnlistmentNumberCard(regimentName, grid);

  // Cavalry → Armour note (DOM-safe; no template strings to break parsing)
  try {
    const cavalryAppliesTo = [
      "Life Guards",
      "Royal Horse Guards",
      "Lancers",
      "Dragoons",
      "Hussars",
      "Royal Armoured Corps"
    ];

    const name = String(regimentName || "");
    const showCavalryNote = cavalryAppliesTo.some(k => name.indexOf(k) !== -1);

    if (showCavalryNote) {
      const card = document.createElement("div");
      card.className = "wwi-card";

      const h3 = document.createElement("h3");
      h3.textContent = "Cavalry to Armour";

      const p = document.createElement("p");
      p.style.margin = "0";
      p.innerHTML =
        "<strong>Royal Armoured Corps (1939):</strong> From 1939, cavalry regiments were incorporated into the Royal Armoured Corps and served as tank units, while retaining their historic titles.";

      card.appendChild(h3);
      card.appendChild(p);
      grid.appendChild(card);
    }
  } catch (err) {
    console.warn("Cavalry disclaimer (WWII reg explorer) render failed:", err);
  }

// Shared WWII structural notes for Regimental Explorer
let wwiiRegimentalNoteFired = false;

// Cavalry / RAC structural note
try {
  const cavalryAppliesTo = [
    "Life Guards",
    "Royal Horse Guards",
    "Lancers",
    "Dragoons",
    "Hussars",
    "Royal Tank Regiment",
    "Royal Armoured Corps"
  ];

  const regNameForNote = regimentName ? String(regimentName) : "";
  const showCavalryNote = cavalryAppliesTo.some(k => regNameForNote.includes(k));

  if (showCavalryNote) {
    const card = document.createElement("div");
    card.className = "wwi-card";

    const h3 = document.createElement("h3");
    h3.textContent = "Cavalry to Armour";

    const p = document.createElement("p");
    p.style.margin = "0";
    p.innerHTML =
      "<strong>Royal Armoured Corps (1939):</strong> From 1939, cavalry regiments were incorporated into the Royal Armoured Corps and served as tank units, while retaining their historic titles.";

    card.appendChild(h3);
    card.appendChild(p);
    grid.appendChild(card);

    wwiiRegimentalNoteFired = true;
  }
} catch (err) {
  console.warn("Cavalry disclaimer (WWII reg explorer) render failed:", err);
}

// General Service Corps note
try {
  const regNameForNote = regimentName ? String(regimentName) : "";

  if (regNameForNote.includes("General Service Corps")) {
    const card = document.createElement("div");
    card.className = "wwi-card";

    const h3 = document.createElement("h3");
    h3.textContent = "Note";

    const p = document.createElement("p");
    p.style.margin = "0";
    p.innerHTML = `
      The GSC became a major feeder unit for the Army.
      Many men were enlisted and numbered here first,
      then posted to a Regiment or specialist corps
      after assessment and training.
    `;

    card.appendChild(h3);
    card.appendChild(p);
    grid.appendChild(card);

    wwiiRegimentalNoteFired = true;
  }
} catch (err) {
  console.warn("GSC disclaimer render failed:", err);
}

// Corps explainer note
try {
  const regNameForNote = regimentName ? String(regimentName) : "";

  const corpsAppliesTo = [
    "Royal Armoured Corps",
    "Reconnaissance Corps",
    "Royal Army Service Corps",
    "Royal Artillery",
    "Royal Engineers",
    "Royal Corps of Signals",
    "Royal Electrical & Mechanical Engineers",
    "Royal Army Ordnance Corps",
    "Intelligence Corps",
    "(Royal) Pioneer Corps",
    "Royal Army Medical Corps",
    "(Royal) Army Dental Corps",
    "(Royal) Army Pay Corps",
    "(Royal) Military Police",
    "Army Catering Corps",
    "Army Physical Training (Staff) Corps",
    "Royal Army Veterinary Corps",
    "Band of the Royal Military College",
    "Military Provost Staff Corps",
    "(Royal) Army Education Corps",
    "Small Arms School Corps",
    "Non-Combatant Corps"
  ];

  const showCorpsNote = corpsAppliesTo.some(k => regNameForNote.includes(k));

  if (showCorpsNote) {
    const card = document.createElement("div");
    card.className = "wwi-card";

    const h3 = document.createElement("h3");
    h3.textContent = "Corps Note";

    const p = document.createElement("p");
    p.style.margin = "0";
    p.innerHTML = `
      Unlike regiments in the British Army, <strong>corps organised soldiers by specialist role</strong>. Examples include battlefield communications in the Royal Corps of Signals or engineering and bridge building in the Royal Engineers.
    `;

    card.appendChild(h3);
    card.appendChild(p);
    grid.appendChild(card);

    wwiiRegimentalNoteFired = true;
  }
} catch (err) {
  console.warn("Corps disclaimer (WWII reg explorer) render failed:", err);
}

// Guards regiments note
try {
  const regNameForNote = regimentName ? String(regimentName) : "";

  const isGuardsRegiment =
    regNameForNote.includes("Guard") &&
    regNameForNote !== "Life Guards" &&
    regNameForNote !== "Royal Horse Guards";

  if (isGuardsRegiment) {
    const card = document.createElement("div");
    card.className = "wwi-card";

    const h3 = document.createElement("h3");
    h3.textContent = "Guards Note";

    const p = document.createElement("p");
    p.style.margin = "0";
    p.innerHTML = `
      The <strong>Guards regiments</strong> formed the British Army’s senior infantry units.
      They served as frontline soldiers in wartime while also carrying out ceremonial duties associated with the protection of the monarch.
    `;

    card.appendChild(h3);
    card.appendChild(p);
    grid.appendChild(card);

    wwiiRegimentalNoteFired = true;
  }
} catch (err) {
  console.warn("Guards disclaimer (WWII reg explorer) render failed:", err);
}

// Infantry fallback note
try {
  if (!wwiiRegimentalNoteFired) {
    const card = document.createElement("div");
    card.className = "wwi-card";

    const h3 = document.createElement("h3");
    h3.textContent = "Infantry Note";

    const p = document.createElement("p");
    p.style.margin = "0";
    p.innerHTML = `
      Infantry regiments were organised into <strong>battalions</strong>, the units that actually fought in the field. A regiment might have several battalions serving in different divisions and theatres at the same time.
    `;

    card.appendChild(h3);
    card.appendChild(p);
    grid.appendChild(card);
  }
} catch (err) {
  console.warn("Infantry fallback note (WWII reg explorer) render failed:", err);
}
  
// 2️⃣ Recruitment Hotspots (from WWII data)
try {
  const rows = getWWIIRegimentRows(regimentName) || [];
  const hotspots = rows
    .flatMap(r => Array.isArray(r.hotspot) ? r.hotspot : [])
    .map(s => String(s).trim())
    .filter(Boolean);

  const uniqueHotspots = Array.from(new Set(hotspots));

  if (uniqueHotspots.length) {
    grid.insertAdjacentHTML(
      "beforeend",
      `
      <div class="wwi-card">
        <h3>Recruitment Hotspots</h3>
        <ul>${uniqueHotspots.map(h => `<li>${h}</li>`).join("")}</ul>
      </div>
      `
    );
  }
} catch (err) {
  console.warn("Recruitment hotspots (WWII reg explorer) render failed:", err);
}

  if (!document.getElementById("storyCTABlockWWIIRegimental")) {
  grid.appendChild(createStoryCTABlock("storyCTABlockWWIIRegimental"));
}
  
// 3️⃣b Campaign Medals card
try {
  renderWWIICampaignMedalsCard(regimentName, grid);
} catch (err) {
  console.warn("Campaign medals (WWII reg explorer) render failed:", err);
}

// 3️⃣c Theatre Map card (WWII)
try {
  renderWWIIRegimentalTheatreMapCard(regimentName, grid);
} catch (err) {
  console.warn("Theatre map (WWII reg explorer) render failed:", err);
}

// 4️⃣ Casualty Burden card (WWII)
try {
  const html = renderCasualtyBurdenCard(regimentName, "wwii");
  if (html) grid.insertAdjacentHTML("beforeend", html);
} catch (err) {
  console.warn("Casualty burden (WWII reg explorer) render failed:", err);
}
}

  
  /* ============================================================
   WWII REGIMENTAL EXPLORER — ENLISTMENT NUMBER CARD
   ============================================================ */
  
  /* === WWII REGIMENT DATA ACCESSORS (array-of-records) === */

function getWWIIRegimentRows(regimentName) {
  const db =
    (typeof wwiiRegimentData !== "undefined" && wwiiRegimentData)
      ? wwiiRegimentData
      : (window.wwiiRegimentData || null);

  if (!db || !Array.isArray(db) || !regimentName) return [];

  const target = regimentName.trim().toLowerCase();

  return db.filter(r =>
    String(r?.regiment || "").trim().toLowerCase() === target
  );
}

function getWWIIRegimentSummary(regimentName) {
  const rows = getWWIIRegimentRows(regimentName);
  if (!rows.length) return null;

  const blocks = rows
    .filter(r => Number.isFinite(+r.start) && Number.isFinite(+r.end))
    .map(r => ({
      start: +r.start,
      end: +r.end,
      note: r.note || r.blockNote || r.label || ""
    }))
    .sort((x, y) => x.start - y.start);

  const theatres = [...new Set(
    rows.flatMap(r => Array.isArray(r.theatres) ? r.theatres : []).filter(Boolean)
  )];

  const hotspot = rows.flatMap(r => Array.isArray(r.hotspot) ? r.hotspot : []).filter(Boolean);

  return { rows, blocks, theatres, hotspot };
}

function renderWWIIEnlistmentNumberCard(regimentName, gridEl) {
  if (!gridEl || !regimentName) return;

  // Safely access dataset even if it isn't in scope yet
  const data =
    (typeof wwiiRegimentData !== "undefined" && wwiiRegimentData)
      ? wwiiRegimentData
      : (window.wwiiRegimentData || null);

  const summary = getWWIIRegimentSummary(regimentName);
  if (!summary || !summary.blocks.length) return;

  const blocks = summary.blocks;
  
    const listItems = blocks.map(b => {
    const note = b.note ? ` <span style="color:#666;">(${b.note})</span>` : "";
    return `<li><strong>${b.start} – ${b.end}</strong>${note}</li>`;
  }).join("");

  gridEl.insertAdjacentHTML(
    "beforeend",
    `
    <div class="wwi-card">
      <h3>Enlistment Number Range</h3>
      <p>The following Second World War Army number range is associated with this regiment:</p>
      <ul class="number-range-list" style="list-style:none;padding-left:0;margin:6px 0 0 0;">
       ${listItems}
      </ul>
    </div>
    `
  );
}
  
  /* ============================================================
   WWII REGIMENTAL EXPLORER — CAMPAIGN MEDALS CARD (REGIMENTAL)
   ============================================================ */
function renderWWIICampaignMedalsCard(regimentName, gridEl) {
  if (!gridEl || !regimentName) return;

    const summary = getWWIIRegimentSummary(regimentName);
  if (!summary) return;

  const theatres = Array.isArray(summary.theatres) ? summary.theatres : [];
  if (!theatres.length) return;

  // Uses your existing logic
let medals = [];
let medalsHTML = "";

// Safely call helpers (prevents ReferenceError killing the whole render)
try {
  const inferFn =
    (typeof inferMedalsFromTheatres === "function" && inferMedalsFromTheatres) ||
    (typeof window.inferMedalsFromTheatres === "function" && window.inferMedalsFromTheatres);

  const renderFn =
    (typeof renderMedals === "function" && renderMedals) ||
    (typeof window.renderMedals === "function" && window.renderMedals);

  if (!inferFn || !renderFn) return;

  // Match WWII number-lookup behaviour: Global theatre => medals shown are safe minimum
  const resolved = theatres.map(t =>
    (typeof resolveWWIITheatre === "function" ? resolveWWIITheatre(t) : t)
  );

  const hasGlobalTheatre = resolved.includes("Global");

const globalMedalNote = hasGlobalTheatre
  ? `<div class="medal-note">
       Because this unit was deployed across every theatre, the medals shown are a safe minimum. 
       Depending on the soldier’s actual path of service, they may also have qualified for campaign stars such as the 
       <b>Africa Star</b>, <b>Italy Star</b>, or <b>Burma Star</b> (among others).
     </div>`
  : "";

  medals = inferFn(theatres);
  medalsHTML = renderFn(medals, hasGlobalTheatre ? { note: globalMedalNote } : null);

} catch (err) {
  console.warn("Medals helper failure (WWII reg explorer):", err);
  return;
}

if (!medalsHTML) return;

  gridEl.insertAdjacentHTML(
    "beforeend",
    `
    <div class="wwi-card">
      <h3>Campaign Medals</h3>
      <p>Likely campaign medal eligibility based on theatres recorded for this regiment:</p>
      ${medalsHTML}
    </div>
    `
  );
} 
  
  /* ============================================================
   WWII REGIMENTAL EXPLORER — THEATRE MAP CARD
   Reuses existing: renderWWIIMap(container, theatres)
   ============================================================ */

function renderWWIIRegimentalTheatreMapCard(regimentName, gridEl) {
  if (!gridEl || !regimentName) return;

  const summary = getWWIIRegimentSummary(regimentName);
  if (!summary) return;

  const theatres = Array.isArray(summary.theatres) ? summary.theatres.filter(Boolean) : [];
  if (!theatres.length) return;

 // Must exist (your core WWII map system)
const mapFn =
  (typeof renderWWIIMap === "function" && renderWWIIMap) ||
  (typeof window.renderWWIIMap === "function" && window.renderWWIIMap);

if (!mapFn) {
  console.warn("renderWWIIMap is not available (scope/window).");
  return;
}

  const slug = String(regimentName).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const mountId = `wwiiRegMapMount-${slug}`;

  gridEl.insertAdjacentHTML(
    "beforeend",
    `
    <div class="wwi-card">
      <h3>Theatres of Service</h3>
      <div id="${mountId}" class="wwii-map-box" style="width:100%; height:320px;"></div>
    </div>
    `
  );

// Defer until DOM node exists and layout is ready
requestAnimationFrame(() => {
  const mount = document.getElementById(mountId);
  if (!mount) return;

  // Match WWII number-lookup behaviour: Global / unmappable => text card, no map.
  const resolved = theatres.map(t =>
    (typeof resolveWWIITheatre === "function" ? resolveWWIITheatre(t) : t)
  );

  const hasGlobal = resolved.includes("Global");
  const hasMappable = resolved.some(t => window.WWII_THEATRE_COORDS && window.WWII_THEATRE_COORDS[t]);

  if (hasGlobal || !hasMappable) {
    mount.outerHTML = `
      <div class="wwii-card theatre-global-card">
        <p>
          <strong>Global service:</strong> This corps/regiment operated worldwide.
          A single theatre map cannot be reliably inferred from regiment-level data.
        </p>
      </div>
    `;
    return;
  }

  // Important: renderWWIIMap expects theatre names with coords (not codes)
  mapFn(mount, resolved);
});
  
}

  // ---- Bind Explore button ----
  const exploreBtn = document.getElementById("exploreRegimentalBtn");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      const regimentName =
        document.getElementById("regimentSearchWWII")?.value?.trim() || "";
      if (!regimentName) return;
      handleRegimentalPick(regimentName);
    });
  }

  console.log("[HRBootWWIIRegimental] Ready.");
}

/* ============================================================
   SECTION B.11 — CONFIDENCE CARD SYSTEM
   ============================================================ */
function ensureConfidenceCard() {
  const grid = document.querySelector("#wwiResult .wwi-grid");
  if (!grid) return false;

  let card = document.getElementById("confidenceCard");
  if (!card) {
    card = document.createElement("div");
    card.id = "confidenceCard";
    card.className = "wwi-card confidence-card";
    card.innerHTML = `
      <h3>Confidence</h3>
      <div class="confidence-row" style="display:flex;align-items:center;justify-content:space-between;gap:20px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="traffic-light" style="display:flex;gap:8px;">
  <div class="light strong" style="width:20px;height:20px;border-radius:50%;background:#5cb85c;opacity:.35;"></div>
  <div class="light reasonable" style="width:20px;height:20px;border-radius:50%;background:#f0ad4e;opacity:.35;"></div>
  <div class="light broad" style="width:20px;height:20px;border-radius:50%;background:#d9534f;opacity:.35;"></div>
</div>
          <span class="confidence-label" style="font-weight:400;"></span>
        </div>
        <div style="width:2px;height:70px;background:#bab86c;margin-top:-22px;"></div>
        <div style="display:flex;align-items:flex-start;font-size:1rem;color:#222;font-weight:400;max-width:60%;line-height:1.5;margin-top:-1.7em;">
          <span>WWI service numbers are not precise. 1917 renumbering, casualties, and admin quirks all affect accuracy. These lights show our certainty.</span>
        </div>
      </div>
    `;
    grid.insertBefore(card, grid.children[1] || null);
  }
  return card;
}

function createStoryCTABlock(id) {
  const block = document.createElement("div");
  block.id = id;
  block.className = "story-cta-block";

  block.innerHTML = `
    <div class="story-cta-copy">Want us to research the full service story?</div>
    <a class="story-cta-btn"
       href="https://www.historyrecon.co.uk/research"
       target="_blank" rel="noopener">
      View Options
    </a>
  `;
  return block;
}

function ensureStoryCTACard() {
  const grid = document.querySelector("#wwiResult .wwi-grid");
  if (!grid) return false;

  let block = document.getElementById("storyCTABlock");
  if (block) return block;

  block = createStoryCTABlock("storyCTABlock");

  // Insert after Confidence (Summary = 0, Confidence = 1)
  grid.insertBefore(block, grid.children[2] || null);
  return block;
}

function ensureStoryCTACardBattalion(gridEl) {
  const grid = gridEl || document.getElementById("battalionGrid");
  if (!grid) return false;

  let block = document.getElementById("storyCTABlockBattalion");
  if (block) return block;

  block = createStoryCTABlock("storyCTABlockBattalion");

  // In battalion explorer we control placement by WHEN we call this,
  // so just append.
  grid.appendChild(block);
  return block;
}

function updateConfidenceLight(level) {
  const card = ensureConfidenceCard();
  ensureStoryCTACard();
  if (!card) return;
  const lights = card.querySelectorAll(".light");
  const label = card.querySelector(".confidence-label");
  lights.forEach(l => l.style.opacity = 0.35);
  let target = null;
  if (/strong/i.test(level)) target = card.querySelector(".light.strong");
  else if (/reasonable/i.test(level)) target = card.querySelector(".light.reasonable");
  else target = card.querySelector(".light.broad");
  if (target) target.style.opacity = 1;
  label.textContent = level ? level : "";

}

// Confidence scoring patch
function scoreConfidence(matchedBlock, regimentInput) {
  if (!matchedBlock) return "Broad";

  let confidence = "Strong";
  const rangeWidth = matchedBlock.range ? (matchedBlock.range[1] - matchedBlock.range[0]) : 0;
  const note = (matchedBlock.note || "").toLowerCase();
  const battalion = (matchedBlock.battalion || "").toLowerCase();

  // --- Rule 1: Wide number blocks lower confidence ---
  if (rangeWidth > 800) confidence = "Reasonable";
  if (rangeWidth > 1500) confidence = "Broad";

  // --- Rule 2: Territorial renumbering or garrison hints lower confidence ---
  if (note.includes("renumber") || note.includes("tf") || note.includes("garrison")) confidence = "Broad";

  // --- Rule 3: Administrative / transfer-heavy blocks also Broad ---
  if (note.includes("transfer") || note.includes("ambiguous") || note.includes("admin")) confidence = "Broad";

  // --- Rule 4: Certain battalions (e.g. training, reserve) are inherently uncertain ---
  if (battalion.includes("training") || battalion.includes("reserve") || battalion.includes("young soldier")) confidence = "Reasonable";

  // --- Rule 5: Regiment-specific overrides (e.g. Essex 301001–303000 garrison) ---
  if (regimentInput.toLowerCase().includes("essex") && matchedBlock.range[0] >= 301001 && matchedBlock.range[1] <= 303000)
    confidence = "Broad";

  return confidence;
}

/* ============================================================
   SECTION D.1: WWI WESTERN FRONT MAP
   (Flattened helpers; original logic preserved)
   ============================================================ */
(() => {

// --- Google GeoChart Loader (original) ---
let __geoChartLoaded = false;
let __geoChartLoadingPromise = null;

function loadGoogleGeoChart() {
  if (__geoChartLoaded) return Promise.resolve();
  if (__geoChartLoadingPromise) return __geoChartLoadingPromise;

  __geoChartLoadingPromise = new Promise((resolve, reject) => {
    function onLoaded() {
      google.charts.load("current", { packages: ["geochart"] });
      google.charts.setOnLoadCallback(() => { __geoChartLoaded = true; resolve(); });
    }
    const s = document.createElement("script");
    s.src = "https://www.gstatic.com/charts/loader.js";
    s.onload = onLoaded;
    s.onerror = () => reject(new Error("Loader failed"));
    document.head.appendChild(s);
  });
  return __geoChartLoadingPromise;
}

// === Western Front label metadata ===
const battleMeta = {
  "Somme": {
    label: "<strong>Battle of the Somme</strong> <br>(1 Jul 1916 – 18 Nov 1916)"
  },
  "Mons": {
    label: "<strong>Battle of Mons</strong> <br>(23 Aug 1914)"
  },
  "Loos": {
    label: "<strong>Battle of Loos</strong> <br>(25 Sep – 8 Oct 1915)"
  },
  "Passchendaele": {
    label: "<strong>Battle of Passchendaele</strong> <br>(31 Jul – 10 Nov 1917)"
  },
  "Spring": {
    label: "<strong>German Spring Offensive</strong> <br>(21 Mar – 18 Jul 1918)"
  },
  "Hundred": {
    label: "<strong>Advance to Victory</strong> <br>(20 Jul – 11 Nov 1918)"
  },
  "Arras": {
    label: "<strong>Battle of Arras</strong> <br>(9 Apr – 16 May 1917)"
  }
};

const cityMeta = {
  "Brussels":     { label: "Brussels" },
  "Calais":       { label: "Calais" },
  "Luxembourg":   { label: "Luxembourg" },
  "Liege":        { label: "Liège" },
  "Germany":      { label: "<em>Germany</em>" },
  "Netherlands":  { label: "<em>Netherlands</em>" },
  "Paris":        { label: "Paris" },
  "France":       { label: "<em>France</em>" }
};

// --- Western Front Battle Coordinates (original) ---
const WWI_BATTLE_COORDS = {
  "Mons":           { lat: 50.4541, lon: 3.9512 },   // Mons, BE
  "Loos":           { lat: 50.4579, lon: 2.7922 },   // Loos-en-Gohelle, FR
  "Passchendaele":  { lat: 50.9002, lon: 3.0193 },   // Passendale, BE
  "Somme":          { lat: 50.0014, lon: 2.6516 },   // Albert (Somme sector), FR
  "Spring":         { lat: 49.8480, lon: 3.2870 },   // St-Quentin area (Operation Michael start), FR
  "Arras":          { lat: 50.2920, lon: 2.7800 },    // Arras, FR
  "Hundred":        { lat: 50.2000, lon: 3.8500 }    // Aulnoye-Aymeries, FR
}

// --- Western Front City Coordinates (original) ---
const WWI_CITY_COORDS = {
  "Brussels": { lat: 50.8503, lon: 4.3517 },
  "Calais": { lat: 50.9513, lon: 1.8587 },
   "Luxembourg": { lat: 49.6117, lon: 6.1319 },
  "Germany": { lat: 50.75, lon: 6.40 },
  "France": { lat: 50.2, lon: 1.90 },
 "Netherlands": { lat: 51.45, lon: 5.20 },
  "Paris": { lat: 49.5, lon: 1.8587 },
  "Liege": { lat: 50.6326, lon: 5.5797 }

}

// --- Western Front Map Renderer (original) ---
async function renderWWIMap(container, battles, cities) {

  if (!container) return;

  container.innerHTML = "";
  container.style.position = "relative";
  container.style.overflow = "hidden";

  await loadGoogleGeoChart();

  const data = new google.visualization.DataTable();
  data.addColumn("number", "Latitude");
  data.addColumn("number", "Longitude");
  data.addColumn("string", "Battle");
  data.addColumn("number", "Value");

//Creates a north to south order for map pins
const BATTLE_ORDER = [
  "Passchendaele",
  "Mons",
  "Hundred",
  "Loos",
  "Arras",
  "Somme",
  "Spring"
];

// Reorder 'battles' array so labels and pins use the same order
battles = BATTLE_ORDER.filter(b => (battles || []).includes(b));

// Add battles (in the fixed order)
(battles || []).forEach(b => {
  const pt = WWI_BATTLE_COORDS[b];
  if (pt) data.addRow([pt.lat, pt.lon, b, 1]); // 1 = battle
});

// Add cities (Germany = label-only)
(cities || []).forEach(c => {
  const pt = WWI_CITY_COORDS[c];
  if (!pt) return;
  const isLabelOnly = (c === "Germany");
  data.addRow([pt.lat, pt.lon, c, isLabelOnly ? 3 : 2]); // 2=city, 3=label-only
});

  //Final visual ouput step for the map
  const options = {
  displayMode: "markers",
  legend: "none",
  backgroundColor: "#eef2f3",
  datalessRegionColor: "#e6ecef",
  region: "BE",
  resolution: "countries",
  keepAspectRatio: true,
  colorAxis: { values: [1, 2], colors: ["#bab86c", "#000000"] }, // battle=khaki, city=black
  sizeAxis: { minValue: 1, maxValue: 1, minSize: 6, maxSize: 6 },
  enableRegionInteractivity: false,
  tooltip: { trigger: "none" }
};
  
  const chart = new google.visualization.GeoChart(container);
  chart.draw(data, options);

  // Custom overlay i.e. the labels, cities etc
  google.visualization.events.addListener(chart, "ready", () => {
    // Clear old overlay
    const old = container.querySelector(".overlay-layer");
    if (old) old.remove();

    const overlay = document.createElement("div");
    overlay.className = "overlay-layer";
    overlay.style.position = "absolute";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.right = 0;
    overlay.style.bottom = 0;
    overlay.style.pointerEvents = "none";
    container.appendChild(overlay);

    // Creates pins on the map
    const svg = container.querySelector("svg");
    if (!svg) return;
    const circles = svg.querySelectorAll("circle");

    const placed = []; 

const battleStack = document.createElement("div");
battleStack.style.position = "absolute";
battleStack.style.display = "flex";
battleStack.style.flexDirection = "column";
battleStack.style.alignItems = "flex-start";
battleStack.style.gap = "4px";
overlay.appendChild(battleStack);

(battles || []).forEach((b) => {
  const label = document.createElement("div");
  label.innerHTML = battleMeta[b] ? battleMeta[b].label : b;
  label.style.fontSize = "11px";
  label.style.background = "rgba(255,255,255,0.85)";
  label.style.padding = "2px 4px";
  label.style.borderRadius = "4px";
  label.style.border = "1px solid rgba(0,0,0,0.1)";
  label.style.whiteSpace = "nowrap";
  label.style.pointerEvents = "none";
  label.style.color = "#111";
  label.style.textAlign = "left";
  battleStack.appendChild(label);
});

// --- restore original safe corridor, but scale it with the rendered map ---
const REF_MAP_WIDTH = 340;
const REF_MAP_HEIGHT = 210;
const REF_RIGHT = 118;   // tuned from your current screenshot
const REF_BOTTOM = 8;    // keeps stack low enough not to hit Liège

const scaleX = overlay.clientWidth / REF_MAP_WIDTH;
const scaleY = overlay.clientHeight / REF_MAP_HEIGHT;

battleStack.style.right = `${Math.round(REF_RIGHT * scaleX)}px`;
battleStack.style.bottom = `${Math.round(REF_BOTTOM * scaleY)}px`;
battleStack.style.top = "auto";
battleStack.style.left = "auto";

    //Draw connector lines between stacked labels and pins
const svgBox = svg.getBoundingClientRect();
const hostBox = container.getBoundingClientRect();

(battles || []).forEach((b, i) => {
  const label = battleStack.children[i];
  const node = circles[i];
  if (!label || !node) return;

  const labelRect = label.getBoundingClientRect();
  const markerBox = node.getBoundingClientRect();

  const x1 = labelRect.left - svgBox.left;
  const y1 = labelRect.top + labelRect.height / 2 - svgBox.top;
  const x2 = markerBox.left + markerBox.width / 2 - svgBox.left;
  const y2 = markerBox.top + markerBox.height / 2 - svgBox.top;

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", "#737373");
  line.setAttribute("stroke-width", "1.25");
  line.setAttribute("opacity", "0.7");

  svg.appendChild(line);
});
    
// Suppresses the pins for country labels
(cities || []).forEach((c, j) => {
  // City circles come after all battle circles
  const node = circles[(battles?.length || 0) + j];
  if (!node) return;

  if (c === "Germany" || c === "France" || c === "Netherlands") {
  node.style.fill = "transparent";
  node.style.stroke = "transparent";
}

  const markerBox = node.getBoundingClientRect();
  const hostBox = container.getBoundingClientRect();
  const cx = markerBox.left - hostBox.left + markerBox.width / 2;
  const cy = markerBox.top - hostBox.top + markerBox.height / 2;

 const label = document.createElement("div");
label.innerHTML = cityMeta[c] ? cityMeta[c].label : `<em>${c}</em>`;
label.style.position = "absolute";
label.style.fontSize = "12px";
// 🔑 lighter grey if it's a country label
if (c === "France" || c === "Germany" || c === "Netherlands") {
  label.style.color = "#666";
} else {
  label.style.color = "#000";
}
label.style.pointerEvents = "none";

label.style.left = `${cx + 8}px`;
label.style.top  = `${cy - 8}px`;
overlay.appendChild(label);
placed.push(label);
});
});   // closes "ready"
}
  
  /* ============================================================
   MIXED THEATRE / GROUPED BATTALION HELPERS
   (Used to detect “range covers multiple battalions” conflicts)
   ============================================================ */

function countBattalionsInLabel(label) {
  const s = String(label || "").trim();
  if (!s) return 1;

  // Range like "4th–5th" or "11th-13th"
  const mRange = s.match(/\b(\d+)(?:st|nd|rd|th)?\s*[–-]\s*(\d+)(?:st|nd|rd|th)?\b/i);
  if (mRange) {
    const a = parseInt(mRange[1], 10);
    const b = parseInt(mRange[2], 10);
    if (!Number.isNaN(a) && !Number.isNaN(b) && b >= a) return (b - a + 1);
  }

  // Pair like "1st & 2nd" or "4th and 5th"
  const mPair = s.match(/\b(\d+)(?:st|nd|rd|th)?\s*(?:&|and)\s*(\d+)(?:st|nd|rd|th)?\b/i);
  if (mPair) return 2;

  // If it literally says "Battalions" plural, it’s grouped but count unknown — assume 2
  if (/\bBattalions\b/i.test(s)) return 2;

  return 1;
}

function isGroupedBlock(block) {
  const label = block?.battalion || "";
  // Optional manual override: set mixed:true in data if you ever need it
  if (block?.mixed === true) return true;

  // Count-based detection (only applies to THIS matched block label)
  const n = countBattalionsInLabel(label);
  if (n > 1) return true;

  // Fallback: plural battalions wording
  if (/\bBattalions\b/i.test(label)) return true;

  return false;
}

function normaliseTheatreLabel(t) {
  const raw = String(t || "").trim();
  if (!raw) return "";
  const k = raw.toLowerCase();

  // Match your current theatre codes
  if (k === "east") return "the Mediterranean / Middle East";
  if (k === "home") return "Home Service/ Training/ Mobilisation";
  if (k === "india") return "India";
  if (k === "disbanded") return "a disbanded/absorbed unit";

  // default: keep whatever you wrote (e.g. "Middle East")
  return raw;
}

function buildMixedServiceSummary(block) {
  const label = block?.battalion || "";
  const n = countBattalionsInLabel(label);
  const battCountText = (n === 1) ? "one battalion" : `${n} battalions`;

  const items = [];

  // battles
  if (Array.isArray(block?.battles)) {
    block.battles.forEach(b => {
      const s = String(b || "").trim();
      if (s) items.push(s);
    });
  }

  // theatre
  const theatre = normaliseTheatreLabel(block?.theatre);
  if (theatre) items.push(theatre);

  // de-dupe (case-insensitive)
  const seen = new Set();
  const uniq = [];
  for (const it of items) {
    const key = it.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      uniq.push(it);
    }
  }

  // natural join
  const joined =
    uniq.length === 0 ? "" :
    uniq.length === 1 ? uniq[0] :
    uniq.length === 2 ? `${uniq[0]} and ${uniq[1]}` :
    `${uniq.slice(0, -1).join(", ")}, and ${uniq[uniq.length - 1]}`;

  if (joined) {
    return `This number range covers ${battCountText}. Theatres and battles included ${joined}.`;
  }

  return `This number range covers ${battCountText}. Theatres and battles varied between battalions.`;
}

function shouldShowMixedServiceCard(block) {
  const hasBattles = Array.isArray(block?.battles) && block.battles.length > 0;
  const hasTheatre = !!String(block?.theatre || "").trim();
  return isGroupedBlock(block) && hasBattles && hasTheatre;
}

  function getAlternateTheatreMessage(theatreRaw) {
  const theatre = String(theatreRaw || "").trim();
  if (!theatre) return "";

  switch (theatre.toLowerCase()) {
    case "india":
      return "This battalion served in India, performing garrison and draft duties throughout the war.";

    case "east":
      return "This battalion fought with the Mediterranean Expeditionary Force — potentially serving in theatres such as Gallipoli, Egypt or Palestine.";
      
      case "east africa":
  return "This battalion served in East Africa, taking part in the campaign against German colonial forces rather than on the Western Front.";

    case "home":
      return "This battalion remained in the United Kingdom on Home Service, training and supplying drafts to front-line units.";

    case "disbanded":
      return "This battalion was disbanded or absorbed before involvement in any major battles.";

    default:
      return `This battalion served outside the Western Front (${theatre}).`;
  }
}
  
  window.getAlternateTheatreMessage = getAlternateTheatreMessage;
  
  // ===============================================================
// ALT TAG HELPERS (battalion-specific theatre notes for grouped blocks)
// ===============================================================
function isNonMapTheatre(t) {
  const s = String(t || "").trim().toLowerCase();
  return s === "india" || s === "home" || s === "east" || s === "east africa" || s === "disbanded";
}

// Returns theatre string if this block has an alt entry for the selected bn
function getAltTheatreForBn(block, bnNumber) {
  if (!block || !bnNumber) return null;
  const alt = block.alt;
  if (!Array.isArray(alt)) return null;

  for (const a of alt) {
    if (a && typeof a === "object") {
      if (Number(a.bn) === Number(bnNumber) && a.theatre) return String(a.theatre).trim();
    } else if (Array.isArray(a)) {
      if (Number(a[0]) === Number(bnNumber) && a[1]) return String(a[1]).trim();
    }
  }
  return null;
}

// For NUMBER LOOKUP: build a readable note from alt entries
function buildAltNotesForNumberLookup(block) {
  if (!block || !Array.isArray(block.alt) || block.alt.length === 0) return "";
  const parts = [];

  for (const a of block.alt) {
    const bn = (a && typeof a === "object") ? a.bn : (Array.isArray(a) ? a[0] : null);
    const th = (a && typeof a === "object") ? a.theatre : (Array.isArray(a) ? a[1] : null);
    if (!bn || !th) continue;

    const theatre = String(th).trim();
    const msg = getAlternateTheatreMessage(theatre);

    const suffix =
      Number(bn) === 1 ? "st" :
      Number(bn) === 2 ? "nd" :
      Number(bn) === 3 ? "rd" : "th";

    parts.push(`<li><strong>${bn}${suffix} Battalion:</strong> ${msg}</li>`);
  }

  if (!parts.length) return "";
  return `
    <div style="margin-top:10px;">
      <p style="margin:0;"><strong>Please note:</strong></p>
      <ul style="margin:6px 0 0 18px;">${parts.join("")}</ul>
    </div>
  `;
}

window.isNonMapTheatre = isNonMapTheatre;
window.getAltTheatreForBn = getAltTheatreForBn;
window.buildAltNotesForNumberLookup = buildAltNotesForNumberLookup;
  
// --- Alternate Theatre Card (original) ---
function showAlternateTheatreCard(bn, mountId = "wwi-map-mount") {
// Try to insert in a specific mount (default is the battle-map mount)
const ref =
  document.getElementById(mountId) ||
  document.querySelector("#wwi-map-mount") ||
  document.querySelector(".cta");
  let container;

  if (ref && ref.parentNode) {
    // insert before the CTA or placeholder map spot
    container = ref.parentNode;
  } else {
    // fallback
    container = document.getElementById("battleResults") || document.getElementById("panelMount");
  }

  if (!container) return;

  const old = container.querySelector(".alt-theatre-card");
  if (old) old.remove();

 const message = getAlternateTheatreMessage(bn.theatre);

  //Places results card in the HTML
// If we have a dedicated mount, inject CONTENT ONLY (no nested card)
const directMount = document.getElementById(mountId);

if (directMount) {
  // No wrapper card, no duplicate H3 — the outer renderCard already provides the frame/title
  directMount.innerHTML = `<p>${message}</p>`;
  return;
}

// Legacy fallback (no mount): create standalone card and insert near the map/CTA
const card = document.createElement("div");
card.className = "alt-theatre-card";
card.innerHTML = `
  <h3>Alternate Theatre of Service</h3>
  <p>${message}</p>
`;

if (ref && ref.parentNode) {
  ref.parentNode.insertBefore(card, ref);
} else if (container) {
  container.appendChild(card);
}
}
  
// Expose globally for WWI estimator
window.renderWWIMap = renderWWIMap;
window.showAlternateTheatreCard = showAlternateTheatreCard;
  
 
  
  /* ============================================================
   SECTION D.2 – WWI RECRUITMENT HOTSPOT MAP (Restored Original)
   ============================================================ */
(() => {
  
    // Treat long/sentence hotspot values as narrative descriptions (not place lists)
  function isHotspotNarrative(hotspot) {
    if (!hotspot) return false;
    if (Array.isArray(hotspot)) return false;

    const s = String(hotspot).trim();
    if (!s) return false;

    // Sentence-like or long descriptive content = narrative
    if (s.length >= 60) return true;
    if (/[.!?]$/.test(s)) return true;
    if (/\b(battalion|battalions|reserve|training|draft|conscripts|transfers|clearing[- ]houses?)\b/i.test(s)) return true;

    return false;
  }
  
  window.isHotspotNarrative = isHotspotNarrative;

  // --- Recruitment Hotspot card (list + mini-map) ---
   function renderWWIHotspotHTML(hit) {
    if (!hit.hotspot) return "";

    const narrative = isHotspotNarrative(hit.hotspot);

    // Left side: either narrative paragraph OR a bullet list
    const leftHTML = narrative
      ? `<p style="margin:0;">${String(hit.hotspot).trim()}</p>`
      : (() => {
          const hs = Array.isArray(hit.hotspot) ? hit.hotspot : [hit.hotspot];
          const lines = hs.map(h => `<li>${h}</li>`).join("");
          return `<ul>${lines}</ul>`;
        })();

    // Right side: ONLY include the map mount when it's NOT narrative
    const rightHTML = narrative
      ? ``
      : `
          <div class="hotspot-right">
            <div class="theatre-map-wrap" id="wwiHotspotMapWrap" style="height:140px;width:170px;"></div>
          </div>
        `;

return `
  <div class="hotspot-content">
    <div class="hotspot-left">
      ${leftHTML}
    </div>
    ${rightHTML}
  </div>
`;
  }

  // --- Draw simple UK Hotspot Map ---
async function renderWWIHotspotMap(container, regimentName) {
  if (!container) return;

 await loadGoogleGeoChart();

      const cleanName = (regimentName || "").trim();
      const HOTSPOT_COORDS = {
           "Argyll & Sutherland Highlanders": [55.9904, -4.0944], // Between Stirling and Glasgow
  "Bedfordshire Regiment": [52.1364, -0.4667], // Bedford
  "Black Watch (Royal Highland Regiment)": [56.4295, -3.2039], // Between Perth and Dundee
  "Border Regiment": [54.7207, -3.2558], // Between Carlisle and Whitehaven
  "Buffs (East Kent Regiment)": [51.2802, 1.0789], // Canterbury
  "Cambridgeshire Regiment": [52.2053, 0.1218], // Cambridge
  "Cameronians (Scottish Rifles)": [55.8642, -4.2518], // Glasgow
  "Cheshire Regiment": [53.1913, -2.8909], // Chester
  "Connaught Rangers": [53.6291, -9.2237], // Ballinrobe
  "Devonshire Regiment": [50.7184, -3.5339], // Exeter
  "Dorsetshire Regiment": [50.7113, -2.4415], // Dorchester
  "Duke of Cornwall's Light Infantry": [50.4670, -4.7243], // Bodmin
  "Duke of Wellington's (West Riding Regiment)": [53.6458, -1.7850], // Huddersfield
  "Durham Light Infantry": [54.7761, -1.5733], // Durham
  "East Lancashire Regiment": [53.7893, -2.2405], // Burnley
  "East Surrey Regiment": [51.3243, -0.4356], // Between Guildford and Kingston upon Thames
  "East Yorkshire Regiment": [53.7676, -0.3274], // Hull
  "Essex Regiment": [51.7356, 0.4689], // Chelmsford
  "Gloucestershire Regiment": [51.8642, -2.2382], // Gloucester
  "Gordon Highlanders": [57.1497, -2.0943], // Aberdeen
  "Hampshire Regiment": [51.0629, -1.3176], // Winchester
  "Herefordshire Regiment": [52.0567, -2.7150], // Hereford
  "Highland Light Infantry": [55.8642, -4.2518], // Glasgow
  "Hertfordshire Regiment": [51.7950, -0.0808], // Hertford
  "King's (Liverpool Regiment)": [53.4084, -2.9916], // Liverpool
  "King's Own (Royal Lancaster Regiment)": [54.0466, -2.8007], // Lancaster
  "King's Own Scottish Borderers": [55.7710, -2.0050], // Berwick upon Tweed
  "King’s Own Yorkshire Light Infantry": [53.8008, -1.5491], // Leeds
  "King's Royal Rifle Corps": [51.5074, -0.1278], // London
  "King's Shropshire Light Infantry": [52.7073, -2.7553], // Shrewsbury
  "Lancashire Fusiliers": [53.4808, -2.2426], // Manchester
  "Leicestershire Regiment": [52.6369, -1.1398], // Leicester
  "Lincolnshire Regiment": [53.2307, -0.5406], // Lincoln
  "London Regiment": [51.5074, -0.1278], // London
  "Loyal North Lancashire Regiment": [53.7632, -2.7031], // Preston
  "Manchester Regiment": [53.4808, -2.2426], // Manchester
  "Middlesex Regiment": [51.5906, -0.2380], // Hendon
  "Monmouthshire Regiment": [51.5842, -2.9977], // Newport
  "Norfolk Regiment": [52.6309, 1.2974], // Norwich
  "North Staffordshire Regiment (Prince of Wales's)": [53.0027, -2.1794], // Stoke-on-Trent
  "Northamptonshire Regiment": [52.2405, -0.9027], // Northampton
  "Northumberland Fusiliers": [54.9783, -1.6178], // Newcastle upon Tyne
  "Oxfordshire & Buckinghamshire Light Infantry": [51.7520, -1.2577], // Oxford
  "Queen's Own Cameron Highlanders": [57.4778, -4.2247], // Inverness
  "Queen's Own Royal West Kent Regiment": [51.2704, 0.5227], // Maidstone
  "Queen's (Royal West Surrey Regiment)": [51.3721, -0.0982], // Croydon
  "Rifle Brigade (The Prince Consort’s Own)": [51.5074, -0.1278], // London
  "Royal Berkshire Regiment": [51.5079, -0.5957], // Slough
  "Royal Dublin Fusiliers": [53.3498, -6.2603], // Dublin
  "Royal Fusiliers (City of London Regiment)": [51.5074, -0.1278], // London
  "Royal Irish Fusiliers": [54.3503, -6.6528], // Armagh
  "Royal Irish Regiment": [52.2593, -7.1101], // Waterford
  "Royal Irish Rifles": [54.5973, -5.9301], // Belfast
  "Royal Inniskilling Fusiliers": [54.3439, -7.6310], // Enniskillen
  "Royal Munster Fusiliers": [51.8985, -8.4756], // Cork
  "Royal Scots": [55.9710, -3.1726], // Leith
  "Royal Scots Fusiliers": [55.4586, -4.6292], // Ayr
  "Royal Sussex Regiment": [50.8367, -0.7802], // Chichester
  "Royal Warwickshire Regiment": [52.2823, -1.5849], // Warwick
  "Royal Welch Fusiliers": [53.0450, -2.9936], // Wrexham
  "Seaforth Highlanders": [57.4778, -4.2247], // Inverness
  "Sherwood Foresters (Notts & Derby Regiment)": [52.9225, -1.4746], // Derby
  "Somerset Light Infantry (Prince Albert's)": [51.0153, -3.1062], // Taunton
  "South Lancashire Regiment": [53.3900, -2.5969], // Warrington
  "South Staffordshire Regiment": [52.5862, -2.1265], // Wolverhampton
  "South Wales Borderers": [51.4816, -3.1791], // Cardiff
  "Suffolk Regiment": [52.0567, 1.1482], // Ipswich
  "Welsh Regiment": [51.6214, -3.9436], // Swansea
  "West Yorkshire Regiment (Prince of Wales's Own)": [53.9590, -1.0815], // York
  "Wiltshire Regiment": [51.0750, -1.7957], // Salisbury
  "Worcestershire Regiment": [52.1920, -2.2200], // Worcester
  "York & Lancaster Regiment": [53.3811, -1.4701], // Sheffield
  "Yorkshire Regiment (Green Howards)": [54.4040, -1.7365] // Richmond
      };

      const coords = HOTSPOT_COORDS[cleanName];
  console.log("[WWI Hotspot]", regimentName, "→", cleanName, "→", coords);
      if (!coords) return;

      const data = new google.visualization.DataTable();
      data.addColumn("number", "Latitude");
      data.addColumn("number", "Longitude");
      data.addColumn("string", "Label");
      data.addColumn("number", "Value");
      data.addRow([coords[0], coords[1], regimentName, 1]);

const options = {
  region: "GB",
  displayMode: "markers",
  resolution: "provinces",
  backgroundColor: "#f9f9f7",        // light off-white (sea)
  datalessRegionColor: "#d9d9d9",    // covers *land* in this projection
  colorAxis: { colors: ["#ba1b1b"] },
  sizeAxis: { minSize: 7, maxSize: 7 },
  enableRegionInteractivity: false,
  tooltip: { trigger: "none" },
  legend: "none",
  keepAspectRatio: true,
  markerOpacity: 0.95,
  magnifyingGlass: { enable: false },
  chartArea: { width: "100%", height: "100%" }
  };

const chart = new google.visualization.GeoChart(container);

// Make sure the container has measurable dimensions before draw
container.style.width  = "170px";
container.style.height = "140px";

// Wait for layout paint before drawing
setTimeout(() => {
  chart.draw(data, options);
}, 100);

  }
  
  /* ============================================================
   SECTION E — WWII THEATRES, MAPS & MEDALS (EXTRACTED ORIGINAL)
   ============================================================ */

// --- WWII Theatre Coordinates ---
const WWII_THEATRE_COORDS = {
  "Home Service (UK)": { lat: 55.0, lon: -4 },
  "BEF France 1939–40": { lat: 50.0, lon: -2.0 },
  "Norway": { lat: 63.4, lon: 10.4 },
  "North-West Europe 1944–45": { lat: 50.9, lon: 5.0 },
  "Italy": { lat: 41.9, lon: 12.5 },
  "Sicily": { lat: 37.5, lon: 14.0 },
  "North Africa": { lat: 30.5, lon: 10.0 },
  "Greece & Crete": { lat: 37.9, lon: 23.7 },
  "Middle East": { lat: 31.9, lon: 35.9 },
  "India": { lat: 21.9, lon: 78.0 },
  "Burma": { lat: 21.9, lon: 96.1 },
  "Malaya (incl. Singapore)": { lat: 3.1, lon: 101.7 },
  "Madagascar": { lat: -18.9, lon: 47.5 }
};

// --- WWII Theatre Resolver ---
function resolveWWIITheatre(code) {
  const map = {
    "BEF": "BEF France 1939–40",
    "NWE": "North-West Europe 1944–45",
    "UK": "Home Service (UK)",
    "NA": "North Africa",
    "ME": "Middle East",
    "IT": "Italy",
    "SIC": "Sicily",
    "BUR": "Burma",
    "IND": "India",
    "MAL": "Malaya (incl. Singapore)"
  };
  return map[code] || code;
}

// --- Google GeoChart Loader (WWII only) ---
function loadGoogleGeoChartWWII(callback) {
  if (window.google && window.google.visualization) {
    callback();
    return;
  }
  const script = document.createElement("script");
  script.src = "https://www.gstatic.com/charts/loader.js";
  script.onload = () => {
    google.charts.load("current", { packages: ["geochart"] });
    google.charts.setOnLoadCallback(callback);
  };
  document.head.appendChild(script);
}

// --- WWII Map Renderer ---
function renderWWIIMap(container, theatres) {
  if (!window.google || !google.visualization) {
    loadGoogleGeoChartWWII(() => renderWWIIMap(container, theatres));
    return;
  }

  // Anchor overlay & labels to THIS map box (WWII only)
  container.classList.add("wwii-map-wrap");
  container.style.position = "relative";  

const resolved = theatres.map(t => resolveWWIITheatre(t));
resolved.sort((a, b) => {
  const coordsA = WWII_THEATRE_COORDS[a];
  const coordsB = WWII_THEATRE_COORDS[b];
  if (!coordsA || !coordsB) return 0;
  return coordsB.lat - coordsA.lat; // higher latitude (north) first
});

const data = new google.visualization.DataTable();
  data.addColumn("number", "Latitude");
  data.addColumn("number", "Longitude");
  data.addColumn("string", "Theatre");
  data.addColumn("number", "Value");

  resolved.forEach(t => {
    const c = WWII_THEATRE_COORDS[t];
    if (c) data.addRow([c.lat, c.lon, t, 1]);
  });

  const options = {
    displayMode: "markers",
    region: "world",
    backgroundColor: "#eef2f3",
    datalessRegionColor: "#e6ecef",
    colorAxis: { colors: ["#bab86c"] },
    sizeAxis: { minSize: 5, maxSize: 5 },
    tooltip: { trigger: "none" },
    enableRegionInteractivity: false,
    legend: "none"
  };

const chart = new google.visualization.GeoChart(container);
chart.draw(data, options);

if (container.__wwiResizeObserver) {
  container.__wwiResizeObserver.disconnect();
}

let __wwiResizeTimer = null;
container.__wwiResizeObserver = new ResizeObserver(() => {
  clearTimeout(__wwiResizeTimer);
  __wwiResizeTimer = setTimeout(() => {
    chart.draw(data, options);
  }, 80);
});

container.__wwiResizeObserver.observe(container);

  // --- Overlay labels (stacked WWI-style) ---
  google.visualization.events.addListener(chart, "ready", () => {
    // Remove any previous overlay
    const old = container.querySelector(".overlay-layer");
    if (old) old.remove();

    const overlay = document.createElement("div");
    overlay.className = "overlay-layer";
    overlay.style.position = "absolute";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.right = 0;
    overlay.style.bottom = 0;
    overlay.style.pointerEvents = "none";
    container.appendChild(overlay);

    const svg = container.querySelector("svg");
    if (!svg) return;
    const circles = svg.querySelectorAll("circle");

    // --- build label stack on right side ---
    const labelStack = document.createElement("div");
 labelStack.style.position = "absolute";
labelStack.style.top = "50%";
labelStack.style.right = "auto";
labelStack.style.left = "60px";
labelStack.style.transform = "translateY(-50%)";
labelStack.style.display = "flex";
labelStack.style.flexDirection = "column";
labelStack.style.alignItems = "flex-end";
labelStack.style.gap = "10px";
    overlay.appendChild(labelStack);

    resolved.forEach((t) => {
const label = document.createElement("div");
label.textContent = t;
label.style.fontSize = "11px";
label.style.background = "#fff";              // solid white
label.style.padding = "2px 6px";
label.style.borderRadius = "6px";
label.style.border = "1px solid #999";        // thin grey edge
label.style.whiteSpace = "nowrap";
label.style.pointerEvents = "none";
label.style.color = "#000";
labelStack.appendChild(label);
    });

    // --- connector lines from labels to pins ---
    const svgBox = svg.getBoundingClientRect();
    const hostBox = container.getBoundingClientRect();

    resolved.forEach((t, i) => {
      const label = labelStack.children[i];
      const node = circles[i];
      if (!label || !node) return;

const labelRect = label.getBoundingClientRect();
const markerBox = node.getBoundingClientRect();

const x1 = labelRect.right - svgBox.left;
const y1 = labelRect.top + labelRect.height / 2 - svgBox.top;
const x2 = markerBox.left + markerBox.width / 2 - svgBox.left;
const y2 = markerBox.top + markerBox.height / 2 - svgBox.top;

      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", x1);
      line.setAttribute("y1", y1);
      line.setAttribute("x2", x2);
      line.setAttribute("y2", y2);
      line.setAttribute("stroke", "#737373");
      line.setAttribute("stroke-width", "1.25");
      line.setAttribute("opacity", "0.7");
      svg.appendChild(line);
    });
  });
} // end renderWWIIMap
  
  // --- EXPORT WWII MAP SYSTEM (needed by Regimental Explorer route) ---
window.WWII_THEATRE_COORDS = WWII_THEATRE_COORDS;
window.resolveWWIITheatre = resolveWWIITheatre;
window.loadGoogleGeoChartWWII = loadGoogleGeoChartWWII;
window.renderWWIIMap = renderWWIIMap;

// --- WWII Medal Ribbons ---
const medalRibbons = {
  "1939–45 Star": () => ribbonDataURI("1939–45 Star", [
    { color:"#001a66", width:33.34 },
    { color:"#9d0000", width:33.33 },
    { color:"#7ec8ff", width:33.33 }
  ]),
  "Africa Star": () => ribbonDataURI("Africa Star", [
    { color:"#d8c27a", width:35 },
    { color:"#001a66", width:5 },
    { color:"#9d0000", width:20 },
    { color:"#9dbbd9", width:5 },
    { color:"#d8c27a", width:35 }
  ]),
  "Italy Star": () => ribbonDataURI("Italy Star", [
    { color:"#cd212a", width:20 },
    { color:"#ffffff", width:20 },
    { color:"#008c45", width:20 },
    { color:"#ffffff", width:20 },
    { color:"#cd212a", width:20 }
  ]),
  "France and Germany Star": () => ribbonDataURI("France and Germany Star", [
    { color:"#001a66", width:20 },
    { color:"#ffffff", width:20 },
    { color:"#9d0000", width:20 },
    { color:"#ffffff", width:20 },
    { color:"#001a66", width:20 }
  ]),
  "Burma Star": () => ribbonDataURI("Burma Star", [
    { color:"#001a66", width:14 },
    { color:"#ff8c00", width:10 },
    { color:"#9d0000", width:52 },
    { color:"#ff8c00", width:10 },
    { color:"#001a66", width:14 }
  ]),
  "Defence Medal": () => ribbonDataURI("Defence Medal", [
    { color:"#2d6b1f", width:14 },
    { color:"#000000", width:4 },
    { color:"#2d6b1f", width:14 },
    { color:"#ff7a00", width:36 },
    { color:"#2d6b1f", width:14 },
    { color:"#000000", width:4 },
    { color:"#2d6b1f", width:14 }
  ]),
  "War Medal 1939–45": () => ribbonDataURI("War Medal 1939–45", [
    { color:"#9d0000", width:20.31 },
    { color:"#001a66", width:20.31 },
    { color:"#ffffff", width:6.25 },
    { color:"#9d0000", width:6.25 },
    { color:"#ffffff", width:6.25 },
    { color:"#001a66", width:20.31 },
    { color:"#9d0000", width:20.31 }
  ])
};

// --- Ribbon Data URI (supports proportional stripe widths) ---
function ribbonDataURI(name, stripes) {
  const width = 120, height = 12;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  let x = 0;

  stripes.forEach(s => {
    const w = (s.width / 100) * width;
    ctx.fillStyle = s.color;
    ctx.fillRect(x, 0, w, height);
    x += w;
  });

  return canvas.toDataURL();
}

// --- Infer Medals From Theatres (historically accurate version) ---
function inferMedalsFromTheatres(theatres) {
  if (!theatres) return [];
  const list = (Array.isArray(theatres) ? theatres : [theatres]).map(resolveWWIITheatre);
  const medals = new Set();
  let sawActiveService = false;

  list.forEach(t => {
    switch (t) {
      case "BEF France 1939–40":
      case "North-West Europe 1944–45":
        medals.add("France and Germany Star");
        sawActiveService = true;
        break;

      case "North Africa":
      case "Greece & Crete":
      case "Madagascar":
        medals.add("Africa Star");
        sawActiveService = true;
        break;

      case "Italy":
      case "Sicily":
        medals.add("Italy Star");
        sawActiveService = true;
        break;

      case "Burma":
      case "Malaya (incl. Singapore)":
        medals.add("Burma Star");
        sawActiveService = true;
        break;

      case "Home Service (UK)":
        medals.add("Defence Medal");
        break;

      case "Middle East":
      case "India":
        medals.add("Defence Medal");
        sawActiveService = true;
        break;

      default:
        // Anything unrecognised but not home service counts as active
        sawActiveService = true;
    }
  });

  if (sawActiveService) medals.add("1939–45 Star");
  medals.add("War Medal 1939–45");

  return Array.from(medals);
}

// --- Render Medals Card (boxed layout like old estimator) ---
function renderMedals(medals, opts) {
  if (!medals || !medals.length) return "";

  opts = opts || {};
  const noteHtml = opts.note
    ? `<div class="medal-note" style="margin-top:10px;font-size:12px;line-height:1.35;color:#737373;">
         ${opts.note}
       </div>`
    : "";

  const items = medals.map(name => {
    const ribbonFn = medalRibbons[name];
    const ribbon = ribbonFn
      ? `<img src="${ribbonFn()}" alt="${name} ribbon" class="medal-ribbon">`
      : "";
    return `
      <div class="medal-box">
        ${ribbon}
        <span class="medal-name">${name}</span>
      </div>
    `;
  }).join("");

  return `
    <div class="result-card medal-group">
      <div class="medal-list">
        ${items}
      </div>
      ${noteHtml}
    </div>
  `;
}
  
  // --- EXPORT WWII MEDALS HELPERS (needed by Regimental Explorer route) ---
window.resolveWWIITheatre = resolveWWIITheatre;
window.inferMedalsFromTheatres = inferMedalsFromTheatres;
window.renderMedals = renderMedals;

/* === END SECTION E === */
  
  /* ============================================================
   SECTION C — WWII MODE + ESTIMATOR
   ============================================================ */

// --- C.1 — Boot & Bindings ---
function HRBootWWII() {
  console.log("[HRBootWWII] Initialising WWII estimator...");
  const wwiiEstimateBtn = document.querySelector("#wwiiPanel button");
  if (wwiiEstimateBtn) wwiiEstimateBtn.addEventListener("click", estimateWWII);
  window.__wwiiEstimate = estimateWWII;
  console.log("[HRBootWWII] WWII estimator ready.");
}

// --- C.2 — Regiment Data (literal object record, no array) ---
const wwiiRegimentData = [
 { start: 1, end: 294000, regiment: "Royal Army Service Corps", theatres: ["Global"], hotspot: ["The Royal Army Service Corps recruited nationally, drawing men with driving, mechanical, or logistical skills to serve in transport and supply units"] },

  { start: 294001, end: 304000, regiment: "Life Guards", theatres: ["ME", "NA", "Italy", "NWE", "UK"], hotspot: ["The Household Cavalry recruited nationally, with no fixed local recruitment areas"] },

  { start: 304001, end: 309000, regiment: "Royal Horse Guards", theatres: ["ME", "NA", "Italy", "NWE", "UK"], hotspot: ["The Household Cavalry recruited nationally, with no fixed local recruitment areas"] },

  { start: 309001, end: 386000, regiment: "Lancers", theatres: ["BEF", "NA", "Italy", "UK"], hotspot: ["The Household Cavalry recruited nationally, with no fixed local recruitment areas"] },

  { start: 386001, end: 528000, regiment: "Dragoons", theatres: ["ME", "NA", "NWE", "India", "Burma", "UK"], hotspot: ["The Household Cavalry recruited nationally, with no fixed local recruitment areas"] },

  { start: 528001, end: 721000, regiment: "Hussars", theatres: ["ME", "NA", "Italy", "Greece & Crete", "NWE", "BEF"], hotspot: ["The Household Cavalry recruited nationally, with no fixed local recruitment areas"] },

  { start: 558471, end: 558761, regiment: "Royal Armoured Corps", theatres: ["BEF", "NA", "Italy", "Sicily", "NWE", "UK"], hotspot: ["The Royal Armoured Corps drew men from across the UK, with no fixed local recruitment areas"] },

  { start: 721001, end: 1842000, regiment: "Royal Artillery", theatres: ["Global"], hotspot: ["The Royal Artillery recruited nationally and allocated men to field, anti-aircraft, and coastal units as required"]  },

  { start: 1842001, end: 2303000, regiment: "Royal Engineers", theatres: ["Global"], hotspot: ["The Royal Engineers recruited nationally, drawing in men with trade and technical skills"] },

  { start: 2303001, end: 2604000, regiment: "Royal Corps of Signals", theatres: ["Global"], hotspot: ["The Royal Corps of Signals recruited nationally, often selecting men with communications or technical aptitude"] },

  { start: 2604001, end: 2646000, regiment: "Grenadier Guards", theatres: ["BEF", "NA", "Italy", "NWE", "UK"], hotspot: ["Chelsea and surrounding boroughs", "Home Counties", "Birmingham"] },

  { start: 2646001, end: 2688000, regiment: "Coldstream Guards", theatres: ["BEF", "NA", "Italy", "NWE", "UK"], hotspot: ["Westminster", "Industrial areas of Northumberland", "Major cities in Yorkshire"] },

  { start: 2688001, end: 2714000, regiment: "Scots Guards", theatres: ["NA", "Italy", "NWE", "Burma", "UK"], hotspot: ["Glasgow", "Edinburgh", "Chelsea and surrounding boroughs"] },

  { start: 2714001, end: 2730000, regiment: "Irish Guards", theatres: ["Norway", "BEF", "NA", "Italy", "NWE"], hotspot: ["Dublin", "Belfast", "Chelsea and surrounding boroughs"] },

  { start: 2730001, end: 2744000, regiment: "Welsh Guards", theatres: ["BEF", "NA", "Italy", "NWE", "UK"], hotspot: ["Cardiff", "Industrial areas of South Wales", "Chelsea and surrounding boroughs"] },

  { start: 2744001, end: 2809000, regiment: "Black Watch (Royal Highland Regiment)", theatres: ["BEF", "NA", "Italy", "NWE", "Burma", "India"], hotspot: ["Dundee", "Perthshire", "Fife"] },

  { start: 2809001, end: 2865000, regiment: "Seaforth Highlanders", theatres: ["MAL", "Burma", "BEF", "NA", "Italy", "NWE"], hotspot: ["Inverness", "Ross", "Caithness"] },

  { start: 2865001, end: 2921000, regiment: "Gordon Highlanders", theatres: ["BEF", "NA", "Italy", "NWE", "MAL", "Burma"], hotspot: ["Aberdeen", "Coastal fishing villages", "Don Valley"] },

  { start: 2921001, end: 2966000, regiment: "Queen's Own Cameron Highlanders", theatres: ["BEF", "NA", "Burma", "Italy", "Greece & Crete", "NWE"], hotspot: ["Aberdeen", "Peterhead", "Banffshire & Moray"] },

  { start: 2966001, end: 3044000, regiment: "Argyll & Sutherland Highlanders", theatres: ["NA", "Italy", "MAL", "BEF", "NWE", "UK"], hotspot: ["Stirling", "Paisley", "Dunoon"] },

  { start: 3044001, end: 3122000, regiment: "Royal Scots", theatres: ["BEF", "Burma", "India", "NWE", "Italy", "UK"], hotspot: ["Edinburgh", "Leith", "Midlothian"] },

  { start: 3122001, end: 3178000, regiment: "Royal Scots Fusiliers", theatres: ["BEF", "Madagascar", "India", "Burma", "Italy", "NWE"], hotspot: ["Ayr", "Kilmarnock", "Lanarkshire industrial belt"] },

  { start: 3178001, end: 3233000, regiment: "King's Own Scottish Borderers", theatres: ["India", "Burma", "BEF", "NWE", "UK"], hotspot: ["Dumfries", "Hawick", "Galashiels"] },

  { start: 3233001, end: 3299000, regiment: "Cameronians (Scottish Rifles)", theatres: ["BEF", "Madagascar", "ME", "Italy", "NWE", "Burma"], hotspot: ["Glasgow", "Hamilton", "Lanarkshire industrial areas"] },

  { start: 3299001, end: 3377000, regiment: "Highland Light Infantry", theatres: ["BEF", "NWE", "NA", "Italy", "Greece & Crete", "UK"], hotspot: ["Glasgow", "Lanarkshire industrial areas", "Paisley"] },

  { start: 3377001, end: 3433000, regiment: "East Lancashire Regiment", theatres: ["BEF", "India", "Burma", "NWE", "UK"], hotspot: ["Blackburn", "Burnley", "Accrington"] },

  { start: 3433001, end: 3511000, regiment: "Lancashire Fusiliers", theatres: ["India", "Burma", "BEF", "NA", "Italy", "UK"], hotspot: ["Bury", "Salford", "Oldham"] },

  { start: 3511001, end: 3589000, regiment: "Manchester Regiment", theatres: ["BEF", "India", "Burma", "MAL", "NWE", "Italy"], hotspot: ["Greater Manchester’s industrial belt", "Ashton under Lyne", "Stockport"] },

  { start: 3589001, end: 3644000, regiment: "Border Regiment", theatres: ["BEF", "Italy", "Burma", "NA", "India", "UK"], hotspot: ["Carlisle", "Workington", "Kendal"] },

  { start: 3644001, end: 3701000, regiment: "South Lancashire Regiment", theatres: ["BEF", "Madagascar", "India", "Burma", "NWE", "UK"], hotspot: ["Warrington", "St Helens", "Widnes"] },

  { start: 3701001, end: 3757000, regiment: "The King's Own Royal Regiment", theatres: ["India", "NA", "BEF", "UK"], hotspot: ["Lancaster", "Morecambe", "Barrow in Furness"] },

  { start: 3757001, end: 3846000, regiment: "King's (Liverpool Regiment)", theatres: ["Burma", "NA", "Italy", "Greece & Crete", "BEF", "NWE"], hotspot: ["Liverpool", "Bootle", "Birkenhead"] },

  { start: 3846001, end: 3902000, regiment: "Loyal North Lancashire Regiment", theatres: ["BEF", "NA", "Italy", "MAL", "NWE", "Burma"], hotspot: ["Preston", "Blackpool", "Burnley"] },

  { start: 3902001, end: 3947000, regiment: "South Wales Borderers", theatres: ["NA", "Norway", "NWE", "Burma", "UK"], hotspot: ["Brecon", "Newport", "Merthyr Tydfil"] },

  { start: 3947001, end: 4025000, regiment: "Welsh Regiment", theatres: ["NA", "Greece & Crete", "Italy", "NWE", "Burma", "UK"], hotspot: ["Cardiff", "Swansea", "Industrial areas of South Wales"] },

  { start: 4025001, end: 4070000, regiment: "King's Shropshire Light Infantry", theatres: ["BEF", "NA", "Italy", "NWE", "UK"], hotspot: ["Shrewsbury", "Oswestry", "Telford industrial belt"] },

  { start: 4070001, end: 4103000, regiment: "Monmouthshire Regiment", theatres: ["NWE", "UK"], hotspot: ["Newport", "Abergavenny", "Pontypool"] },

  { start: 4103001, end: 4114000, regiment: "Herefordshire Regiment", theatres: ["NWE", "UK"], hotspot: ["Hereford", "Leominster", "Ross on Wye"] },

  { start: 4114001, end: 4178000, regiment: "Cheshire Regiment", theatres: ["NA", "NWE", "BEF", "Italy", "UK"], hotspot: ["Chester", "Crewe", "Macclesfield"] },

  { start: 4178001, end: 4256000, regiment: "Royal Welch Fusiliers", theatres: ["BEF", "India", "Burma", "Madagascar", "NWE", "UK"], hotspot: ["Wrexham", "Caernarfon", "Bangor"] },

  { start: 4256001, end: 4334000, regiment: "Northumberland Fusiliers", theatres: ["NA", "ME", "Italy", "BEF", "NWE", "UK"], hotspot: ["Newcastle upon Tyne", "Ashington", "Morpeth"] },

  { start: 4334001, end: 4379000, regiment: "East Yorkshire Regiment", theatres: ["India", "Burma", "BEF", "NWE", "NA", "UK"], hotspot: ["Hull", "Beverley", "Bridlington"] },

  { start: 4379001, end: 4435000, regiment: "Yorkshire Regiment (Green Howards)", theatres: ["Italy", "India", "Burma", "NA", "BEF", "NWE"], hotspot: ["Richmond", "Middlesborough", "Scarborough"] },

  { start: 4435001, end: 4523000, regiment: "Durham Light Infantry", theatres: ["NA", "Italy", "BEF", "Burma", "NWE", "ME"], hotspot: ["Durham", "Sunderland", "Bishop Auckland"] },

  { start: 4523001, end: 4601000, regiment: "West Yorkshire Regiment (Prince of Wales's Own)", theatres: ["Burma", "Italy", "UK"], hotspot: ["Leeds", "Bradford", "Huddersfield"] },

  { start: 4601001, end: 4680000, regiment: "Duke of Wellington's (West Riding Regiment)", theatres: ["BEF", "Italy", "Burma", "NWE", "UK"], hotspot: ["Halifax", "Huddersfield", "Keighley"] },

  { start: 4680001, end: 4736000, regiment: "King’s Own Yorkshire Light Infantry", theatres: ["BEF", "NWE", "ME", "Norway", "Burma", "NA"], hotspot: ["Doncaster", "Wakefield ", "Barnsley"] },

  { start: 4736001, end: 4792000, regiment: "York & Lancaster Regiment", theatres: ["BEF", "Norway", "NWE", "Burma", "Italy", "NA"], hotspot: ["Sheffield", "Rotherham", "Barnsley"] },

  { start: 4792001, end: 4848000, regiment: "Lincolnshire Regiment", theatres: ["BEF", "NWE", "India", "Burma", "Italy", "Greece & Crete"], hotspot: ["Lincoln", "Grimsby", "Boston"] },

  { start: 4848001, end: 4904000, regiment: "Leicestershire Regiment", theatres: ["MAL", "NA", "BEF", "Burma", "NWE", "Greece & Crete"], hotspot: ["Leicester", "Loughborough", "Coalville"] },

  { start: 4904001, end: 4960000, regiment: "South Staffordshire Regiment", theatres: ["Burma", "Sicily", "NWE", "UK"], hotspot: ["Wolverhampton", "Walsall", "Dudley"] },

  { start: 4960001, end: 5038000, regiment: "Sherwood Foresters (Notts & Derby Regiment)", theatres: ["Norway", "BEF", "NA", "Italy", "BEF", "ME"], hotspot: ["Nottingham", "Derby", "Chesterfield"] },

  { start: 5038001, end: 5094000, regiment: "North Staffordshire Regiment (Prince of Wales's)", theatres: ["India", "Burma", "NA", "Italy", "BEF", "NWE"], hotspot: ["Stoke on Trent", "Newcastle under Lyme", "Burton upon Trent"] },

  { start: 5094001, end: 5172000, regiment: "Royal Warwickshire Regiment", theatres: ["India", "Burma", "BEF", "NWE", "UK"], hotspot: ["Birmingham", "Coventry", "Warwick"] },

  { start: 5172001, end: 5239000, regiment: "Gloucestershire Regiment", theatres: ["BEF", "Burma", "India", "NWE", "UK"], hotspot: ["Gloucester", "Cheltenham", "Stroud & the Five Valleys"] },

  { start: 5239001, end: 5328000, regiment: "Worcestershire Regiment", theatres: ["ME", "NA", "Burma", "BEF", "UK"],hotspot: ["Worcester", "Kidderminster", "Redditch"] },

  { start: 5328001, end: 5373000, regiment: "Royal Berkshire Regiment", theatres: ["BEF", "Burma", "India", "UK"], hotspot: ["Reading", "Windsor", "Newbury"] },

  { start: 5373001, end: 5429000, regiment: "Oxfordshire & Buckinghamshire Light Infantry", theatres: ["BEF", "NWE", "NA", "Burma", "Italy", "UK"], hotspot: ["Oxford", "Buckingham", "High Wycombe"] },

  { start: 5429001, end: 5485000, regiment: "Duke of Cornwall's Light Infantry", theatres: ["BEF", "NWE", "India", "NA", "Italy", "UK"], hotspot: ["Bodmin", "Truro", "Cornwall Mining District"] },

  { start: 5485001, end: 5562000, regiment: "Hampshire Regiment", theatres: ["BEF", "NA", "Italy", "ME", "Greece & Crete", "UK"], hotspot: ["Winchester", "Portsmouth", "Southampton"] },

  { start: 5562001, end: 5608000, regiment: "Wiltshire Regiment", theatres: ["BEF", "Madagascar", "ME", "NWE", "Burma", "Italy"], hotspot: ["Devizes", "Swindon", "Salisbury"] },

  { start: 5608001, end: 5662000, regiment: "Devonshire Regiment", theatres: ["Sicily", "NWE", "Burma", "UK"], hotspot: ["Exeter", "Plymouth", "Torquay"] },

  { start: 5662001, end: 5718000, regiment: "Somerset Light Infantry (Prince Albert's)", theatres: ["NA", "Italy", "Burma", "NWE", "UK"], hotspot: ["Taunton", "Bath", "Yeovil"] },

  { start: 5718001, end: 5763000, regiment: "Dorsetshire Regiment", theatres: ["BEF", "Burma", "NWE", "NA", "Sicily", "Italy"], hotspot: ["Dorchester", "Bournemouth", "Weymouth"] },

  { start: 5763001, end: 5819000, regiment: "Norfolk Regiment", theatres: ["India", "NWE", "BEF", "Burma", "MAL", "UK"],hotspot: ["Norwich", "Great Yarmouth", "Kings Lynn"] },

  { start: 5819001, end: 5875000, regiment: "Suffolk Regiment", theatres: ["BEF", "NWE", "India", "Burma", "MAL", "UK"], hotspot: ["Bury St Edmunds", "Ipswich", "Lowestoft"], }, 

  { start: 5875001, end: 5931000, regiment: "Northamptonshire Regiment", theatres: ["BEF", "Burma", "Madagascar", "ME", "NA", "Italy"], hotspot: ["Northampton", "Corby", "Kettering"] },

  { start: 5931001, end: 5942000, regiment: "Cambridgeshire Regiment", theatres: ["MAL", "UK"], hotspot: ["Cambridge", "Wisbech", "Ely"] },

  { start: 5942001, end: 5998000, regiment: "Bedfordshire & Hertfordshire Regiment", theatres: ["ME", "India", "Burma", "Greece & Crete", "Italy", "NA"], hotspot: ["Bedford", "Luton industrial centre", "Hertford"] },

  { start: 5998001, end: 6076000, regiment: "Essex Regiment", theatres: ["BEF", "NWE", "ME", "Burma", "NA", "Greece & Crete"], hotspot: ["Warley", "Colchester", "Chelmsford"] },

  { start: 6076001, end: 6132000, regiment: "Queen's (Royal West Surrey Regiment)", theatres: ["NA", "India", "Burma", "BEF", "NWE", "Italy"], hotspot: ["Guilford", "Croydon", "Woking"] },

  { start: 6132001, end: 6188000, regiment: "East Surrey Regiment", theatres: ["BEF", "NA", "MAL", "Sicily", "Greece & Crete", "UK"], hotspot: ["Kingston upon Thames", "Croydon", "Mitcham"] },

  { start: 6188001, end: 6278000, regiment: "Middlesex Regiment", theatres: ["BEF", "NWE", "UK"], hotspot: ["Mill Hill", "Harrow", "Wembley"] },

  { start: 6278001, end: 6334000, regiment: "Buffs (East Kent Regiment)", theatres: ["ME", "Italy", "BEF", "Burma", "NWE", "UK"], hotspot: ["Canterbury", "Dover", "Ashford"] },

  { start: 6334001, end: 6390000, regiment: "Queen's Own Royal West Kent Regiment", theatres: ["NA", "ME", "BEF", "Burma", "NWE", "UK"], hotspot: ["Maidstone", "Tonbridge", "Tunbridge Wells"] },

  { start: 6390001, end: 6446000, regiment: "Royal Sussex Regiment", theatres: ["NA", "Italy", "BEF", "NWE", "ME", "UK"], hotspot: ["Chicester", "Brighton", "Hastings"] },

  { start: 6446001, end: 6515000, regiment: "Royal Fusiliers (City of London Regiment)", theatres: ["ME", "Italy", "BEF", "UK"], hotspot: ["Islington", "Hackney", "the East End"] },

  { start: 6802501, end: 6814000, regiment: "The Inns of Court Regiment", theatres: ["NWE", "UK"], hotspot: ["Holborn", "Westminster", "City of London"] },

  { start: 6825001, end: 6837000, regiment: "Honourable Artillery Company (Infantry)", theatres: ["NA", "Italy", "Sicily", "NWE", "UK"], hotspot: ["City of London", "Islington", "Shoreditch"] },

  { start: 6837001, end: 6905000, regiment: "King's Royal Rifle Corps", theatres: ["BEF", "NA", "Italy", "ME", "NWE", "UK"], hotspot: ["Westminster and surrounding districts", "Birmingham", "Manchester"] },

  { start: 6905001, end: 6972000, regiment: "Rifle Brigade (The Prince Consort’s Own)", theatres: ["BEF", "ME", "NA", "Sicily", "Italy", "NWE"], hotspot: ["Westminster and surrounding districts", "Birmingham", "Liverpool"] },

  { start: 6972001, end: 7006000, regiment: "Royal Inniskilling Fusiliers", theatres: ["BEF", "Madagascar", "Italy", "NA", "Burma", "UK"], hotspot: ["Enniskillen", "Derry", "Omagh"] },

  { start: 7006001, end: 7040000, regiment: "Royal Ulster Rifles", theatres: ["BEF", "NWE", "NA", "Sicily", "UK"], hotspot: ["Belfast", "Newtownards", "Bangor"] },

  { start: 7040001, end: 7075000, regiment: "Royal Irish Fusiliers", theatres: ["BEF", "NA", "Sicily", "Italy", "Greece & Crete"], hotspot: ["Armagh", "Newry", "Portadown"] },

  { start: 7245001, end: 7536000, regiment: "Royal Army Medical Corps", theatres: ["Global"], hotspot: ["The Royal Army Medical Corps recruited nationally, drawing heavily on men with medical or nursing backgrounds"] },

  { start: 7536001, end: 7539000, regiment: "(Royal) Army Dental Corps", theatres: ["Global"], hotspot: ["The Army Dental Corps recruited nationally, selecting men with dental training or technical skills"] },

  { start: 7574001, end: 7657000, regiment: "Royal Army Ordnance Corps", theatres: ["Global"], hotspot: ["The Royal Army Ordnance Corps recruited nationally, focusing on men with technical, mechanical, and logistical skills"] },

  { start: 7657001, end: 7681000, regiment: "(Royal) Army Pay Corps", theatres: ["Global"], hotspot: ["The Royal Army Pay Corps recruited nationally, drawing in men and women with clerical or financial skills"] },

  { start: 7681001, end: 7717000, regiment: "(Royal) Military Police", theatres: ["Global"], hotspot: ["Military Police recruited nationally, often selecting men with discipline leadership or policing backgrounds"] },

  { start: 7717001, end: 7718800, regiment: "Military Provost Staff Corps", theatres: ["Global"], hotspot: ["The Provost units recruited nationally, selecting men for policing and disciplinary duties within the Army"] },

  { start: 7718801, end: 7720400, regiment: "Small Arms School Corps", theatres: ["Global"], hotspot: ["The Small Arms School Corps recruited nationally, selecting experienced soldiers and instructors for training duties"] },

  { start: 7720401, end: 7732400, regiment: "(Royal) Army Education Corps", theatres: ["Global"], hotspot: ["The Army Educational Corps recruited nationally, drawing in teachers and men with academic or clerical skills"] },

  { start: 7732401, end: 7733000, regiment: "Band of the Royal Military College", theatres: ["UK"], hotspot: ["The Band of the Royal Military College recruited nationally, selecting trained musicians rather than drawing from a fixed local area"] },

  { start: 7757001, end: 7807000, regiment: "Royal Army Veterinary Corps", theatres: ["Global"], hotspot: ["The Royal Army Veterinary Corps recruited nationally, selecting men with veterinary or animal-handling experience"] },

  { start: 7868001, end: 7891868, regiment: "Royal Tank Regiment", theatres: ["BEF", "NA", "Sicily", "Italy", "NWE", "UK"], hotspot: ["The Royal Tank Regiment recruited nationally, with many men transferred from infantry and cavalry units as armoured forces expanded"] },

  { start: 7891869, end: 8230000, regiment: "Royal Armoured Corps", theatres: ["BEF", "NA", "Italy", "Sicily", "NWE", "UK"], hotspot: ["The Royal Armoured Corps drew men from across the UK, with no fixed local recruitment areas"] },

  { start: 10000000, end: 10350000, regiment: "Militia", theatres: ["UK"], hotspot: ["In 1939 a short-lived militia scheme conscripted single men aged 20–22, who were absorbed into the regular Army at the outbreak of war."] },

  { start: 10350001, end: 10400000, regiment: "Intelligence Corps", theatres: ["Global"], hotspot: ["The Intelligence Corps recruited nationally, selecting men and women with linguistic, analytical, or specialist skills"] },

  { start: 10400001, end: 10500000, regiment: "(Royal) Army Pay Corps", theatres: ["Global"], hotspot: ["The Royal Army Pay Corps recruited nationally, drawing in men and women with clerical or financial skills"] },

  { start: 10500001, end: 10508000, regiment: "(Royal) Army Pay Corps - Locally enlisted staff Middle East", theatres: ["ME"], hotspot: ["Locally enlisted staff for the Army Pay Corps in the Middle East were recruited in-theatre, drawing on British expatriates and local civilian hires"] },

  { start: 10510001, end: 10530000, regiment: "(Royal) Army Dental Corps", theatres: ["Global"], hotspot: ["The Army Dental Corps recruited nationally, selecting men with dental training or technical skills"] },

  { start: 10530001, end: 10600000, regiment: "Royal Army Ordnance Corps", theatres: ["Global"], hotspot: ["The Royal Army Ordnance Corps recruited nationally, focusing on men with technical, mechanical, and logistical skills"] },

  { start: 10600001, end: 10630000, regiment: "Reconnaissance Corps", theatres: ["ME", "NA", "Italy", "NWE", "UK"], hotspot: ["The Reconnaissance Corps recruited nationally, with many men transferred from infantry battalions to form divisional recce units"] },

  { start: 10630001, end: 10655000, regiment: "Army Catering Corps", theatres: ["Global"], hotspot: ["The Army Catering Corps recruited nationally, often selecting men with catering or food service experience"] },

  { start: 10655001, end: 10660000, regiment: "Army Physical Training (Staff) Corps", theatres: ["UK & overseas training establishments"], hotspot: ["The Army Physical Training Corps recruited nationally, drawing on men with athletic, sporting or instructional backgrounds to serve as physical training instructors across the Army"] },

  { start: 10660001, end: 11000000, regiment: "Royal Army Service Corps", theatres: ["Global"], hotspot: ["The Royal Army Service Corps recruited nationally, drawing men with driving, mechanical, or logistical skills to serve in transport and supply units"] },

  { start: 11000001, end: 11500000, regiment: "Royal Artillery", theatres: ["Global"], hotspot: ["The Royal Artillery recruited nationally and allocated men to field, anti-aircraft, and coastal units as required"] },

  { start: 13000001, end: 14000000, regiment: "(Royal) Pioneer Corps", theatres: ["Global"], hotspot: ["The Pioneer Corps recruited nationally, absorbing large numbers of conscripts and volunteers for labour, construction, and support duties"] },

  { start: 14000001, end: 14002500, regiment: "The Lowland Regiment", theatres: ["UK"], hotspot: ["Edinburgh", "Scottish Borders", "Lanarkshire"] },

  { start: 14002501, end: 14005000, regiment: "The Highland Regiment", theatres: ["UK"], hotspot: ["Inverness", "Aberdeen", "Fife"] },

  { start: 14200001, end: 15000000, regiment: "General Service Corps", theatres: ["Global"], hotspot: ["The General Service Corps recruited nationally, with no fixed local recruitment areas"] },

  { start: 15000001, end: 15005000, regiment: "Indian local enlistments", theatres: ["India", "Burma"], hotspot: ["Locally enlisted personnel in India were recruited in-theatre, drawing from British expatriates and local volunteers"] },

  { start: 16000001, end: 16100000, regiment: "Royal Electrical & Mechanical Engineers", theatres: ["Global"], hotspot: ["The Royal Electrical and Mechanical Engineers recruited nationally, selecting men with technical and mechanical skills"] },

  { start: 97000001, end: 97100000, regiment: "Non-Combatant Corps", theatres: ["Global"], hotspot: ["The Non-Combatant Corps recruited nationally, largely composed of conscientious objectors assigned to non-fighting duties"] },
];

const WW2_WARTIME_BLOCKS = [
  { range: [10000000, 10350000], regiment: "Militia", code: "militia_1939", date: "Apr–Sep 1939", text: "Militia intake under the 1939 Act (aged under 20), rolled into wartime service" },
  // … (all the wartime 10-million series ranges from my last message) …
];
  window.wwiiRegimentData = wwiiRegimentData;
  
  // --- Build WWII regiment list dynamically ---
window.WWII_REGIMENT_LIST = Array.from(
  new Set(wwiiRegimentData.map(r => r.regiment))
).sort();
  
// --- C.3 — Recruitment Phase Formula (returns band for UI meter)
function getRecruitmentPhase(number, start, end) {
  const pct = (number - start) / (end - start);

  if (pct <= 0.15) {
    return {
      text: "This number is likely to be a pre-war (pre-1 Sept 1939) Regular or Territorial Army enlistment.",
      band: "prewar"
    };
  } else if (pct <= 0.40) {
    return {
      text: "This enlistment likely occurred during the early wartime volunteer phase (1939–41).",
      band: "early"
    };
  } else if (pct <= 0.75) {
    return {
      text: "This number likely falls into the mid-war conscription period (1942–43).",
      band: "mid"
    };
  } else {
    return {
      text: "This number likely represents a late-war or immediate post-D-Day enlistment (1944–45).",
      band: "late"
    };
  }
}
  
  // Render the 4-phase meter block
function renderPhaseMeter(activeBand) {
  const items = [
    { key: "prewar", label: "Pre-War" },
    { key: "early",  label: "Early volunteer" },
    { key: "mid",    label: "Mid-war conscript" },
    { key: "late",   label: "Late War" }
  ];

  const rows = items.map(it => `
    <div class="phase-item ${activeBand === it.key ? "is-active" : ""}">
      <span class="phase-swatch"></span>
      <span>${it.label}</span>
    </div>
  `).join("");

  return `<div class="phase-meter">${rows}</div>`;
}


// --- C.4 — Render WWII Results (cards: Theatres, Medals, Phase, Hotspot) ---
function renderWWIIResults(record, mount) {
  const theatres = record.theatres || [];
  const resolvedTheatres = theatres.map(resolveWWIITheatre);
  const medals = inferMedalsFromTheatres(theatres);
  const hasGlobalTheatre = resolvedTheatres.includes("Global");
  const globalMedalNote = hasGlobalTheatre
    ? `Because this unit was deployed across every theatre, the medals shown are a safe minimum. 
       Depending on the soldier’s actual path of service, they may also have qualified for campaign stars such as the 
       <b>Africa Star</b>, <b>Italy Star</b>, or <b>Burma Star</b> (among others).`
    : "";

  const phase = getRecruitmentPhase(parseInt(window.lastInputNumber, 10), record.start, record.end);
   
 // --- Match WWI Layout: Grid + Cards ---
const resultDiv = document.getElementById("resultWWII");
resultDiv.innerHTML = "";

const grid = document.createElement("div");
grid.className = "wwi-grid";

// Convert each content section into a khaki card (WWI-style)
function renderWWIICard(title, html, variant) {
  const card = document.createElement("div");
  card.className = variant ? `wwi-card ${variant}` : "wwi-card";
  card.innerHTML = `<h3>${title}</h3>${html}`;
  return card;
}

// Build cards
  
const hotspotList = record.hotspot && record.hotspot.length
  ? record.hotspot.map(h => `<li><strong>${h}</strong></li>`).join("")
  : "";

const cards = [];
let noteFired = false;

// ✅ Regiment card at the very top (WWII number search)
if (record && record.regiment) {
  cards.push(
    renderWWIICard(
      "Regiment",
      `<p style="margin:0;"><strong>${record.regiment}</strong></p>`
    )
  );
}  
  
// ✅ Cavalry / RAC structural note (fires for specific regiment labels)
const cavalryAppliesTo = [
  "Life Guards",
  "Royal Horse Guards",
  "Lancers",
  "Dragoons",
  "Hussars",
  "Royal Tank Regiment",
  "Royal Armoured Corps"
];

const regNameForNote = (record && record.regiment) ? String(record.regiment) : "";

const showCavalryNote = cavalryAppliesTo.some(k => regNameForNote.includes(k));

if (showCavalryNote) {
  const cavalryNoteHTML = `
    <p style="margin:0;">
      <strong>Royal Armoured Corps (1939):</strong> From 1939, cavalry regiments were incorporated into the Royal Armoured Corps and served as tank units, while retaining their historic titles.
    </p>
  `;

  cards.push(renderWWIICard("Cavalry to Armour", cavalryNoteHTML));
  noteFired = true;
}
  
// ✅ General Service Corps note (feeder corps)
if (regNameForNote.includes("General Service Corps")) {

  const gscNoteHTML = `
    <p style="margin:0;">
      The GSC became a major feeder unit for the Army. Many men were enlisted and numbered here first, then posted to a Regiment or specialist corps after assessment and training.
    </p>
  `;

  cards.push(
    renderWWIICard(
      "Note",
      gscNoteHTML
    )
  );
  noteFired = true;
}
  
 // ✅ Corps explainer note
const corpsAppliesTo = [
  "Royal Armoured Corps",
  "Reconnaissance Corps",
  "Royal Army Service Corps",
  "Royal Artillery",
  "Royal Engineers",
  "Royal Corps of Signals",
  "Royal Electrical & Mechanical Engineers",
  "Royal Army Ordnance Corps",
  "Intelligence Corps",
  "(Royal) Pioneer Corps",
  "Royal Army Medical Corps",
  "(Royal) Army Dental Corps",
  "(Royal) Army Pay Corps",
  "(Royal) Military Police",
  "Army Catering Corps",
  "Army Physical Training (Staff) Corps",
  "Royal Army Veterinary Corps",
  "Band of the Royal Military College",
  "Military Provost Staff Corps",
  "(Royal) Army Education Corps",
  "Small Arms School Corps",
  "Non-Combatant Corps"
];

const showCorpsNote = corpsAppliesTo.some(k => regNameForNote.includes(k));

if (showCorpsNote) {
  const corpsNoteHTML = `
    <p style="margin:0;">
      Unlike regiments in the British Army, <strong>corps organised soldiers by specialist role</strong>. Examples include battlefield communications in the Royal Corps of Signals or engineering and bridge building in the Royal Engineers.
    </p>
  `;

  cards.push(
    renderWWIICard(
      "Corps Note",
      corpsNoteHTML
    )
  );
  noteFired = true;
}
  
// ✅ Guards regiments note
const isGuardsRegiment =
  regNameForNote.includes("Guard") &&
  regNameForNote !== "Life Guards" &&
  regNameForNote !== "Royal Horse Guards";

if (isGuardsRegiment) {

  const guardsNoteHTML = `
    <p style="margin:0;">
      The <strong>Guards regiments</strong> formed the British Army’s senior infantry units.
      They served as frontline soldiers in wartime while also carrying out ceremonial duties associated with the protection of the monarch.
    </p>
  `;

  cards.push(
    renderWWIICard(
      "Guards Note",
      guardsNoteHTML
    )
  );
  noteFired = true;
}
  
  // ✅ Infantry fallback note
if (!noteFired) {
  const infantryNoteHTML = `
    <p style="margin:0;">
      Infantry regiments were organised into <strong>battalions</strong>, the units that actually fought in the field. A regiment might have several battalions serving in different divisions and theatres at the same time.
    </p>
  `;

  cards.push(
    renderWWIICard(
      "Infantry Note",
      infantryNoteHTML
    )
  );
}

  cards.push(renderWWIICard("Recruitment Hotspot", `<ul>${hotspotList}</ul><div class="wwii-hotspot-note"><strong>Note:</strong> WWII recruitment was less region/county based than in WWI. After December 1941, many soldiers were first processed through the General Service Corps before being assigned to their Regiment or Corps</div>`));
  
// ✅ Recruitment Phase immediately after Regiment
const phaseMeter = renderPhaseMeter(phase.band);
cards.push(
  renderWWIICard(
    "Recruitment Phase",
    `<div class="phase-wrap">
       <div class="phase-copy"><p>${phase.text}</p></div>
       ${phaseMeter}
     </div>`
  )
);
  
  const cta = createStoryCTABlock("storyCTABlockWWII");
cards.push(cta);

// Then Theatres + Medals
cards.push(renderWWIICard("Theatres of Service", `<div id="wwiiMapMount" class="theatre-map-wrap"></div>`));
cards.push(renderWWIICard("Campaign Medals", renderMedals(medals, hasGlobalTheatre ? { note: globalMedalNote } : null)));

// Append them
cards.forEach(c => grid.appendChild(c));
resultDiv.appendChild(grid);

// === Add Casualty Burden Card (WWII Estimator) ===
try {
  const gridEl = document.querySelector("#resultWWII .wwi-grid");
  if (gridEl) {
    // use the regiment from the estimator record if available, otherwise skip quietly
    const regName = (record && record.regiment && record.regiment.trim()) ? record.regiment.trim() : "";
    if (regName) {
      const html = renderCasualtyBurdenCard(regName, "wwii");
      if (html) gridEl.insertAdjacentHTML("beforeend", html);
    } else {
      console.warn("Casualty Burden (WWII) skipped – no regiment name found.");
    }
  }
} catch (err) {
  console.warn("Casualty Burden (WWII) render failed:", err);
}

  // Draw the map (WWII) — BUT handle "Global" / unmappable theatres with disclaimer instead
  const mapMount = document.getElementById("wwiiMapMount");
  if (mapMount && theatres.length) {
    const resolvedTheatres = theatres.map(t => resolveWWIITheatre(t));

    const hasGlobal = resolvedTheatres.includes("Global");

    // If none of the theatres have coordinates, there is nothing meaningful to plot.
    const hasMappable = resolvedTheatres.some(t => WWII_THEATRE_COORDS && WWII_THEATRE_COORDS[t]);

    if (hasGlobal || !hasMappable) {
      mapMount.outerHTML = `
  <div class="wwii-card theatre-global-card">
    <p>
      <strong>Global service:</strong> This corps/regiment operated worldwide. 
      A single theatre map cannot be reliably inferred from service number alone.
    </p>
  </div>
`;

       } else {
      renderWWIIMap(mapMount, resolvedTheatres);
    }
  }

  if (typeof queueEstimatorHeight === "function") {
    queueEstimatorHeight();
  }
}

// --- C.5 — Core Estimator Logic ---
function estimateWWII() {
  const input = document.getElementById("serviceNumberWWII")?.value.trim();
  const resultDiv = document.getElementById("resultWWII");
  resultDiv.innerHTML = "";

  if (!input) {
    resultDiv.innerHTML = "<p>Please enter an Army Number.</p>";
    return;
  }

  const number = parseInt(input, 10);
  window.lastInputNumber = number;

  // ✅ dataset is now an array of records — find matching row by number
  const db =
    (typeof wwiiRegimentData !== "undefined" && wwiiRegimentData)
      ? wwiiRegimentData
      : (window.wwiiRegimentData || null);

  if (!db || !Array.isArray(db)) {
    resultDiv.innerHTML = "<p>WWII dataset not available.</p>";
    return;
  }

  const record = db.find(r => number >= Number(r.start) && number <= Number(r.end));

  if (record) {
    renderWWIIResults(record, resultDiv);
  } else {
    resultDiv.innerHTML = "<p>No matching WWII record found for this number range.</p>";
  }
}

// --- C.6 — Export for global access ---
window.estimateWWII = estimateWWII;
// --- C.7 — Event Binding (DELEGATED VERSION) ---
  document.addEventListener("click", function(event) {
    if (event.target.closest("#wwiBtn")) {
      console.log("WWI Button clicked!");
    }
    if (event.target.closest("#wwiiBtn")) {
      console.log("WWII Button clicked!");
    }
    if (event.target.id === "exploreRegimentalBtn") {
      console.log("Explore Regimental button clicked!");
      if (typeof window.estimateWWII === 'function') {
        window.estimateWWII();
      } else {
        console.error("estimateWWII is not defined globally.");
      }
    }
    if (event.target.id === "exploreBattalionBtn") {
      console.log("Explore Battalion button clicked!");
    }
  });

  // Expose to the Dual Axis OS
  window.__wwiiEstimate = window.estimateWWII;
  console.log("[HRBootWWII] WWII estimator ready and linked.");
   
/* === END SECTION C === */

  // --- Global Exports ---
  window.renderWWIHotspotHTML = renderWWIHotspotHTML;
  window.renderWWIHotspotMap = renderWWIHotspotMap;

})();
})();







