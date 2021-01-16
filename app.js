// Made with Zdog

const illo = new Zdog.Illustration({
    element: '.zdog-canvas',
    dragRotate: true,
  });
  var eyeGroup = new Zdog.Group({
    addTo: illo,
    translate: { z: 20 },
  });
  // eye white first
  new Zdog.Ellipse({
    addTo: eyeGroup,
    width: 760,
    height: 800,
    // ...
  });
  // then iris
  let iris = new Zdog.Ellipse({
    addTo: eyeGroup,
    diameter: 70,
    // ...
  });
  // then pupil
  iris.copy({
    diameter: 30,
    color: '#636',
  });
  // highlight last in front
  iris.copy({
    diameter: 30,
    translate: { x: 15, y: -15 },
    color: 'white',
  });
  // create original
  const rect = new Zdog.Rect({
    addTo: illo,
    width: 664,
    height: 664,
    translate: { x: -48 },
    stroke: 16,
    color: '#EA0',
  });
  // copy
  rect.copy({
    // overwrite original options
    translate: { x: 48 },
    color: '#C25',
  });
  
  function animate() {
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
  }
  new Zdog.Shape({
    addTo: illo,
    path: [
      { x: -40 }, // start at 1st point
      { x:  40 }, // line to 2nd point
    ],
    stroke: 20,
    color: '#636',
  });
  new Zdog.Shape({
    addTo: illo,
    path: [
      { x: -92, y: -40, z: 90 }, // start at top left
      { x:  10, y: 5 }, // line to top right
      { x: 92, y:  40 }, // line to bottom left
      { x:  32, y:  40 }, // line to bottom right
    ],
    closed: false,
    stroke: 20,
    color: '#636',
  });
  let partyHat = new Zdog.Cone({
    translate: { x: 100, y: 330, z: 100 },
    addTo: illo,
    diameter: 90,
    length: 90,
    stroke: false,
    color: '#636',
    backface: '#C25',
  });
  animate();
  