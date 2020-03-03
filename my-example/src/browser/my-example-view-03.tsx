import * as React from "react";
import Tree from "react-d3-tree";


const svgSquare = {
  shape: 'rect',
  shapeProps: {
    width: 200,
    height: 200,
    x: 800,
    y: 800,
  }
}


const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
      keyD: 'val D',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },

      {
        name: 'Level 2: C',
        attributes: {
          keyA: 'val T',
          keyB: 'val E',
          keyC: 'val R',

        },
      },

    ],
  },
];

export class GrafoView extends React.Component<{}> {

render(): JSX.Element {

        return (

        <div id="treeWrapper"  style={{width: '50em', height: '30em'}}>
{/*  
        <button className="square" onClick={() => {console.log('premuto'); alert('click-2')}}></button>
        <h1>Hello !</h1>       
*/}
        <Tree data={myTreeData}
         zoomable={true}
         scaleExtent={{min: 1, max: 3}}         
         orientation="vertical" 
         translate={{x:400, y: 50}}          
         circleRadius={10} 
         nodeSvgShape={svgSquare} />
         
        </div>

        );
    }
}


