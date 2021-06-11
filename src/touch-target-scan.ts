console.log('Beginning Scan...');

const HtmlTagsToExclude = ['script', 'link', 'path', 'noscript'];

const NodeNamesToExclude = ['#text', '#comment'];

let checkNode = (node: any): boolean => {

  if (node.nodeName && NodeNamesToExclude.includes(node.nodeName)) {
    return false;
  } else if (node.localName && HtmlTagsToExclude.includes(node.localName)) {
    return false;
  } else if (node.clientHeight && node.clientHeight >= 56) {
    return false;
  } else if (node.clientWidth && node.clientWidth >= 56) {
    return false;
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

      if (currentNode && currentNode.childNodes && currentNode.childNodes.length > 0) {

          for (let i = 0; i < currentNode.childNodes.length; i++) {
              queue.push(currentNode.childNodes[i]);
          }
      }
  }

}

bfsOnHTMLNodes();
