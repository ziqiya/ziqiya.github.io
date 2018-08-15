import React from 'react';
export default ({src,alt})=>(
    <div className="imgWrap">
        <img src = {require('../images/'+src)} alt = {alt}/>
    </div>
    );
    