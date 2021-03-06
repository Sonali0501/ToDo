import React from 'react';
import styled from 'styled-components';

const DustBin = styled.div`
    border: dashed 1px #b9b8b8;
    position:absolute;
    bottom: 50px;
    width:80%;
    left:10%;
    padding:10px;
    z-index:0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight:500;
`;

const DeleteBox = () => {
    return(
        <DustBin>Drag here to DELETE</DustBin>
    );
}

export default DeleteBox;