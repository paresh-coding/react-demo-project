import React, { useEffect, useState } from 'react';
import { normalize } from '../../constants/Platform';
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput } from '../../elements';
import { styles } from './styles';




function VerifySecretPhase(props) {
    const { navigation } = props;
    
    const handleBackupWallet = () => {
        navigation.navigate('BackupWallet');
    };




    const secretbutton = () => {
        return (
            <>
                <SMView style={styles.seedPhraseBackground}>

                    <SMView style={styles.buttongroupStyle}>
                        <SMButton
                            type="main"
                            buttonStyle={styles.seedButtonStyle}
                            buttonText={'1.Suggest'}
                        />
                        <SMButton
                            type="main"
                            buttonStyle={styles.seedButtonStyle}
                            buttonText={'2.Thunder'}
                        />

                        <SMButton
                            type="main"
                            buttonStyle={styles.seedButtonStyle}
                            buttonText={'3.Debris'}
                        />
                    </SMView>

                    <SMView style={styles.buttongroupStyle}>
                        <SMButton
                            type="main"
                            buttonStyle={styles.seedButtonStyle}
                            buttonText={'4.Pen'}
                        />
                        <SMButton
                            type="main"
                            buttonStyle={styles.seedButtonStyle}
                            buttonText={'5.Float'}
                        />

                        <SMButton
                            type="main"
                            buttonStyle={styles.seedButtonStyle}
                            buttonText={'6.Nut'}
                        />
                    </SMView>

                    <SMView style={styles.buttongroupStyle}>
                        <SMButton
                            type="main"
                            buttonStyle={styles.seedButtonStyle}
                            buttonText={'7.Bike'}
                        />
                        <SMButton
                            type="main"
                            buttonStyle={styles.seedButtonStyle}
                            buttonText={'8.Fun'}
                        />

                        <SMButton
                            type="main"
                            buttonStyle={styles.seedButtonStyle}
                            buttonText={'9.Biz'}
                        />
                    </SMView>

                </SMView>


                <SMView style={styles.buttonStyle}>
                    <SMButton
                        type="main"
                        buttonStyle={styles.seedButtonStyle}
                        buttonText={'10.Orange'}
                    />
                    <SMButton
                        type="main"
                        buttonStyle={styles.seedButtonStyle}
                        buttonText={'11.First'}
                    />

                    <SMButton
                        type="main"
                        buttonStyle={styles.seedButtonStyle}
                        buttonText={'12.Last'}
                    />
                </SMView>

            </>
        );
    };

    return (
        <SMContainer backButton noFooter homeButton>
            <SMView style={styles.container}>
                <SMText style={styles.headerStyle}>Verify Secret Pharse</SMText>
                <SMText style={styles.subHeaderStyle}>
                    Tap the words to put them next to each other in the correct order
                </SMText>
                {secretbutton()}
                {/* <SMText style={styles.copylableStyle}>Well Done</SMText> */}
                <SMButton
                    buttonText="Done"
                    type="main"
                    buttonStyle={styles.doneButton}
                    // textStyle={styles.loginButtonText}
                    onPress={handleBackupWallet}
                />
            </SMView>
        </SMContainer>

    );
}

export default VerifySecretPhase;