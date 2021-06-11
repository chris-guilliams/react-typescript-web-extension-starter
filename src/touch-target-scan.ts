console.log('Beginning Scan...');

const HtmlTagsToExclude = ['script', 'link', 'path', 'noscript', 'iframe', 'g', 'meta'];

const NodeNamesToExclude = ['#text', '#comment'];

// let searchObjectForAngularEvents = (obj: any) => {
//   let hasAngularEvent = false;
//   console.log('old school');

//   if (obj.hasOwnProperty('__zone_symbol__clickfalse')) {
//     return true;
//   }
//   return false;
// }

// let nodeHasEvents = (node: any): boolean => {
//   // check for Angular events, object property prefixed w/ '__zone_symbol__'
//   if (searchObjectForAngularEvents(node)) {
//     return true;
//   } else {
//     return false;
//   }
//   return false;
//   // check for Javascript events, i.e. 'onClick', 'onBlur', 'onFocus', etc.
// }

let checkNode = (node: any): boolean => {
  if (node.nodeName && NodeNamesToExclude.includes(node.nodeName)) {
    return false;
  } else if (node.localName && HtmlTagsToExclude.includes(node.localName)) {
    return false;
  } else if (node.clientHeight && node.clientHeight >= 56) {
    return false;
  } else if (node.clientWidth && node.clientWidth >= 56) {
    return false;
  // } else if (!nodeHasEvents(node)) {
  //   return false;
  } else {
    return true;
  }
}

let bfsOnHTMLNodes = (node = document.body) => {

  let queue = [];
  queue.push(node);

  while (queue.length !== 0) {

      let currentNode: any = queue.shift();

      const validNode = checkNode(currentNode);

      // if it is invalid (small touch target) then we don't need to scan it's children???

      //check for the condiditon or just console.log
      if (validNode) {
        console.log(currentNode);
      }

      if (currentNode && currentNode.children && currentNode.children.length > 0) {

          for (let i = 0; i < currentNode.children.length; i++) {
              queue.push(currentNode.children[i]);
          }
      }
  }

}

bfsOnHTMLNodes();
