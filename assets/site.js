// Keep links to the original single-page site useful.
if (location.pathname === '/' || location.pathname === '/index.html') {
 const legacy = {'#home':'/', '#about':'/about/', '#services':'/horticultural-design/', '#contact':'/contact/'};
 if (legacy[location.hash]) location.replace(legacy[location.hash]);
}
