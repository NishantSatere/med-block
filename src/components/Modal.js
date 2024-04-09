import React, { useState } from 'react';
import styled from 'styled-components';
import { dateFromTimestamp } from '../utils/dataUtils';
import { ReactComponent as ExpandArrow } from '../assets/icons/general/expandArrow.svg';

const Container = styled.div`
    display: flex;
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0; 
    left: 0; 
    bottom: 0; 
    right: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
`;

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 450px;
    min-height: 200px;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const HeadingContainer = styled.div`
    background-color: #273748;
    color: white;
    padding: 15px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const ModalHospitalName = styled.div`
    font-weight: bold;
    font-size: 20px;
`;

const ModalDiseaseName = styled.div`
    font-size: 14px;
`;

const SubHeading = styled.div`
    font-size: 14px;
    color: #505050;
    margin-top: 10px;
    display: flex;
    align-items: center;
`;

const DownArrow = styled(ExpandArrow)`
    margin-left: auto;
    cursor: pointer;
    transform: rotate(${props => props.open ? 180 : 0}deg);
`;

const Content = styled.div`
    font-size: 13px;
    color: #505050;
    margin-top: 5px;
`;

const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 8px 20px;
    margin-left: 10px;
    border: none;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    background-color: ${props => props.bgcolor || '#C93636'};
    color: white;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${props => props.bgcolor ? '#FFDE00' : '#B82E2E'};
    }
`;

const Modal = ({ 
    modalState, 
    setModalState, 
    medicalHistory, 
    onApproveClickHandler, 
    onDeclineClickHandler, 
    setReportsModalState 
}) => {
    const [treatmentState, setTreatmentState] = useState(false);
    const [medicationState, setMedicationState] = useState(false);

    return (
        <Container>
            <ModalContainer>
                <HeadingContainer>
                    <ModalHospitalName>{modalState.hospitalInfo.name}</ModalHospitalName>
                    <ModalDiseaseName>{modalState.disease}</ModalDiseaseName>
                </HeadingContainer>
                <SubHeading>
                    {modalState.dischargeDate === '0' ? (
                        `Diagnosis/treatment on ${dateFromTimestamp(modalState.diagnoseDate)}`
                    ) : (
                        <>
                            Admitted on {dateFromTimestamp(modalState.diagnoseDate)} <br />
                            Discharged on {dateFromTimestamp(modalState.dischargeDate)}
                        </>
                    )}
                </SubHeading>
                <SubHeading>Operating Doctor: {modalState.DrName}</SubHeading>
                <SubHeading>
                    <Content>{modalState.treatment}</Content>
                    <Content>In-Hospital record ID: {modalState.hospitalRecordID}</Content>
                </SubHeading>
                <Footer>
                    <Button
                        bgcolor='#FFDE00'
                        onClick={() => {
                            setReportsModalState(modalState);
                            setModalState(false);
                        }}
                    >
                        View Reports
                    </Button>
                    {medicalHistory ? (
                        <Button onClick={() => setModalState(false)}>Close</Button>
                    ) : (
                        <>
                            <Button
                                bgcolor='#6FD141'
                                onClick={() => {
                                    onApproveClickHandler(modalState);
                                    setModalState(false);
                                }}
                            >
                                Approve
                            </Button>
                            <Button
                                onClick={() => {
                                    onDeclineClickHandler(modalState);
                                    setModalState(false);
                                }}
                            >
                                Decline
                            </Button>
                        </>
                    )}
                </Footer>
            </ModalContainer>
        </Container>
    );
};

export default Modal;
