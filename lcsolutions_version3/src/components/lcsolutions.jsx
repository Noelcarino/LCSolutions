import React from 'react';



export default class LCSolutions extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            easySolutions: {
                problems1: {
                    id: 1,
                    arrayFormat: [
                        'LC: #001 - Easy - Two Sum',
                        ' ',
                        'function twoSum(nums,target){',
                        '   var twoElements = [];',
                        '   for (var i = 0; i < nums.length; i++{',
                        '       for (var j = 0; j < nums.length; j++){',
                        '           if (i !== j) {',
                        '               if(nums[i] + nums[j] == target) {',
                        "                   twoElements.push(i);",
                        '                   twoElements.push(j);',
                        '                   return twoElements;',
                        '               }',
                        '           }',
                        '       }',
                        '   }',
                        '   return false;',
                        '}'
                    ]
                }
            }
        }
    }
    render(){
        console.log(this.state.easySolutions.problems1.arrayFormat);
        return (
            <div className="container-fluid bg-dark text-light">
                THESE ARE MY SOLUTIONS :D
                <ul className="list-group bg-dark">
                    {this.state.easySolutions.problems1.arrayFormat.map((line, index) => {
                        return (
                            <li key={index} className="bg-dark list-group-item border-0 py-0">{line.replace(/ /g, "\u00a0")}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

