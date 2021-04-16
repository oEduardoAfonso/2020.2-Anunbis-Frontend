import styled from 'styled-components';

export const ProfessorBoxStyle = styled.div`
    width: 389px;
    height: 250px;
    background-color: #E5E5E5;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 11px;
`;

export const Info_ProfessorBox = styled.div`
    width: 200px;
    height: 40px;
    display: flex;
    align-items: left;
    justify-content: space-evenly;
    flex-direction: column;
    padding-left: 20px;
`;

export const Posts_ProfessorBox = styled.div`
    width: 389px;
    height: 200px;
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
    overflow-y: auto;
    

    span {
      width: 350px;
      min-width: 350px;
      height: 90px;
      min-height: 90px;
      margin-bottom: 20px;
      font-size: 11px;
    }
`;

export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    Button {
      background: #FFF9C4;
      border: 1px solid rgba(255, 245, 157, 0.6);
      box-sizing: border-box;
      border-radius: 10px;
      padding: 8px 3px;
      margin-inline: 15px;
      box-shadow: 2px 2px grey;
      font-size: 11px;
    }
`;