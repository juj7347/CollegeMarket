import styled, {css} from "styled-components";

const TrafficLight = styled.View`
    border-radius: 50px;
    width: 10px;
    height: 10px;
    padding: 10px;

    ${(props)=>
        props.available &&
            css`
                background: #afec1a;
            `
    }

    ${(props)=>
        props.booked &&
            css`
                background: #afec1a;
            `
    }

    ${(props)=>
        props.unavailable &&
            css`
                background: #afec1a;
            `
    }
`;