    const url = "https://archive.org/advancedsearch.php?q=creator%3A%22Radio+Ibnul+Qoyyim%22&fl%5B%5D=creator&fl%5B%5D=identifier&fl%5B%5D=ustadz&fl%5B%5D=title&fl%5B%5D=description&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=50&page=1&output=json"
    const response = await fetch(url)
    const data = await response.json()
    const urls = data.response.docs.map(obj => `https://archive.org/metadata/${obj.identifier}`)
    const items = await Promise.all(urls.map(async url => {
      const response = await fetch(url)
      const data = await response.json()
      const filter = data.files.reduce(function(filtered, files) {
        if(files.format == "VBR MP3") {
          filtered.push({
            "creator": files.creator,
            "kitab": 'nama kitab',
            "url": `https://${data.d1}/${data.dir}/${files.name}`
          }
            );
        }
        return filtered
      }, [])
      return await filter
    }))
    // console.log(items);

    // code flatter
    function flattenArrayRecursively(arr) {
      const flatArray = [];
      function flatten(subArr) {
        for (const elem of subArr) {
          if (Array.isArray(elem)) {
            flatten(elem);
          } else {
            flatArray.push(elem);
          }
        }
      }
      flatten(arr);
      return flatArray;
    }

    const messArray = flattenArrayRecursively(items);
    // code cleaner
    function organizeMessArray(messArray) {
      const organizedArray = [];
      const encounteredCreators = new Set(); // Track encountered creators

      for (const obj of messArray) {
        const creator = obj.creator;
        const kitabName = obj.kitab;
        const recordingUrl = obj.url;
    
        // Check if creator is new and create object if so
        if (!encounteredCreators.has(creator)) {
          encounteredCreators.add(creator);
          organizedArray.push({
            name: creator,
            sub: [],
          });
        }
    
        // Find the creator's object in the organized array
        const creatorObject = organizedArray.find(o => o.name === creator);
    
        // Check for existing kitab with the same name within the creator
        const existingKitab = creatorObject.sub.find(k => k.kitabName === kitabName);
        if (existingKitab) {
          // Append recording to existing kitab
          existingKitab.sub.push({ recording: recordingUrl });
        } else {
          // Create new kitab object and add to creator's collection
          creatorObject.sub.push({
            kitabName,
            sub: [{ recording: recordingUrl }],
          });
        }
      }
    
      return organizedArray;
    }
    
    organizeMessArray(items);
    console.log(organizeMessArray(messArray));

    // export to main script
    export const organizedArray = organizeMessArray(messArray);
