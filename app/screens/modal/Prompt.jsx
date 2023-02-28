import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput, Linking, Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import color from '../../style/color'

const { width } = Dimensions.get('window')

const Prompt = () => {
    const { code } = useRoute().params
    const navigation = useNavigation()

    // open dialer
    const openDialer = (code) => Linking.openURL(Platform.OS === 'android' ? `tel:${code}` : `telprompt:${code}`)

    // MTN CODE STARTS HERE
    const [buyMTNAirtimeFromBank, setMTNBuyAirtimeFromBank] = useState({ amount: '' })
    const [shareAirtemFromMTNToMTN, setShareAirtemFromMTNToMTN] = useState({ number: '', amount: '' })
    const [ninLinking, setNinLinking] = useState({ nin: '' })
    // MTN CODE ENDS HERE

    // 9Mobile starts here
    const [NMPin, setNMPin] = useState({ pin: '' })
    // 9Mobile ends  here

    // Airtel starts here
    const [AirtelPin, setAirtelPin] = useState({ pin: '' })
    const [AirtelAmount, setAirtelAmount] = useState({ amount: '' })
    // Airtel ends here

    // Access bank start here
    const [AccessBankBVN, setAccessBankBVN] = useState({ bvn: '' })
    // Access bank end here

    // Fidelity bank start here
    const [FidelityBankAirtimeAmount, setFidelityBankAirtimeAmount] = useState({ amount: '' })
    const [FidelityBankTransfer, setFidelityBankTransfer] = useState({ account: '', amount: '' })
    const [FidelityBankBillPayment, setFidelityBankBillPayment] = useState({ card: '', amount: '' })
    // Fidelity bank end here

    // First bank end here
    const [FirstBankTransfer, setFirstBankTransfer] = useState({ amount: '', account: '' })
    const [FirstBankAirtime, setFirstBankAirtime] = useState({ amount: '' })
    const [FirstBankOTP, setFirstBankOTP] = useState({ otp: '' })
    const [FirstBankDataPurchase, setFirstBankDataPurchase] = useState({ amount: '', phone: '' })
    // First bank end here

    // FCMB bank starts here
    const [FCMBTransfer, setFCMBTransfer] = useState({ amount: '', account: '' })
    const [FCMBAirtime, setFCMBAirtime] = useState({ amount: '' })
    const [FCMBPayBills, setFCMBPayBills] = useState({ amount: '', code: '' })
    // FCMB bank end here

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.invisibleButton} />
            <View style={styles.card}>
                <Text style={styles.description}>{code.description}</Text>
                {/* MTN USSD CODES START HERE */}
                {
                    code?.code == '*904*Amount#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={buyMTNAirtimeFromBank.amount} onChange={e => setMTNBuyAirtimeFromBank({ ...buyMTNAirtimeFromBank, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*904*${buyMTNAirtimeFromBank.amount == '' ? 'Amount' : buyMTNAirtimeFromBank.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*904*${buyMTNAirtimeFromBank.amount == '' ? 'Amount' : buyMTNAirtimeFromBank.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*777*Number*Amount*Pin#' &&
                    <>
                        <TextInput placeholder='Number' style={styles.input} value={shareAirtemFromMTNToMTN.number} onChange={e => setShareAirtemFromMTNToMTN({ ...shareAirtemFromMTNToMTN, number: e.nativeEvent.text })} />
                        <TextInput placeholder='Amount' style={{ ...styles.input, marginTop: 0 }} value={shareAirtemFromMTNToMTN.amount} onChange={e => setShareAirtemFromMTNToMTN({ ...shareAirtemFromMTNToMTN, amount: e.nativeEvent.text })} />

                        <TouchableOpacity onPress={() => openDialer(`*777*${shareAirtemFromMTNToMTN.number}*${shareAirtemFromMTNToMTN.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*777*${shareAirtemFromMTNToMTN.number}*${shareAirtemFromMTNToMTN.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*785*Your NIN#' &&
                    <>
                        <TextInput placeholder='Your NIN' style={styles.input} value={ninLinking.nin} onChange={e => setNinLinking({ ...ninLinking, nin: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*785*${ninLinking.nin == '' ? 'Your NIN' : ninLinking.nin}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*785*${ninLinking.nin == '' ? 'Your NIN' : ninLinking.nin}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* MTN USSD CODES END HERE */}

                {/* 9MOBILE USSD CODES START HERE */}
                {
                    code?.code == '*232*PIN#' &&
                    <>
                        <TextInput placeholder='PIN' style={styles.input} value={NMPin.pin} onChange={e => setNMPin({ ...NMPin, pin: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*232*${NMPin.pin == '' ? '' : NMPin.pin}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*232*${NMPin.pin == '' ? '' : NMPin.pin}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* 9MOBILE USSD CODES END HERE */}

                {/* AIRTEL USSD CODES START HERE */}
                {
                    code?.code == '*123*PIN#' &&
                    <>
                        <TextInput placeholder='PIN' style={styles.input} value={AirtelPin.pin} onChange={e => setAirtelPin({ ...AirtelPin, pin: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*123*${AirtelPin.pin == '' ? '' : AirtelPin.pin}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*123*${AirtelPin.pin == '' ? '' : AirtelPin.pin}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*123*Amount#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={AirtelAmount.amount} onChange={e => setAirtelAmount({ ...AirtelAmount, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*123*${AirtelAmount.amount == '' ? '' : AirtelAmount.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*123*${AirtelAmount.amount == '' ? '' : AirtelAmount.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* AIRTEL USSD CODES END HERE */}

                {/* ACCESS BANK USSD CODES START HERE */}
                {
                    code?.code == '*901*BVN#' &&
                    <>
                        <TextInput placeholder='BVN' style={styles.input} value={AccessBankBVN.bvn} onChange={e => setAccessBankBVN({ ...AccessBankBVN, bvn: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*901*${AccessBankBVN.bvn == '' ? '' : AccessBankBVN.bvn}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*901*${AccessBankBVN.bvn == '' ? '' : AccessBankBVN.bvn}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* ACCESS BANK USSD CODES END HERE */}

                {/* FIDELITY BANK USSD CODES START HERE */}
                {
                    code?.code == '*770*AMOUNT#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={FidelityBankAirtimeAmount.amount} onChange={e => setFidelityBankAirtimeAmount({ ...FidelityBankAirtimeAmount, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*770*${FidelityBankAirtimeAmount.amount == '' ? '' : FidelityBankAirtimeAmount.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*770*${FidelityBankAirtimeAmount.amount == '' ? '' : FidelityBankAirtimeAmount.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*770*ACCOUNT_NUMBER*AMOUNT#' &&
                    <>
                        <TextInput placeholder='Account' style={styles.input} value={FidelityBankTransfer.account} onChange={e => setFidelityBankTransfer({ ...FidelityBankTransfer, account: e.nativeEvent.text })} />
                        <TextInput placeholder='Amount' style={{ ...styles.input, marginTop: 0 }} value={FidelityBankTransfer.amount} onChange={e => setFidelityBankTransfer({ ...FidelityBankTransfer, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*770*${FidelityBankTransfer.account == '' ? '' : FidelityBankTransfer.account}*${FidelityBankTransfer.amount == '' ? '' : FidelityBankTransfer.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*770*${FidelityBankTransfer.account == '' ? '' : FidelityBankTransfer.account}*${FidelityBankTransfer.amount == '' ? '' : FidelityBankTransfer.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*770*CODE*SMART CARD NUMBER*AMOUNT#' &&
                    <>
                        <TextInput placeholder='Card Number' style={styles.input} value={FidelityBankBillPayment.account} onChange={e => setFidelityBankBillPayment({ ...FidelityBankBillPayment, card: e.nativeEvent.text })} />
                        <TextInput placeholder='Amount' style={{ ...styles.input, marginTop: 0 }} value={FidelityBankBillPayment.amount} onChange={e => setFidelityBankBillPayment({ ...FidelityBankBillPayment, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*770*${FidelityBankBillPayment.card == '' ? '' : FidelityBankBillPayment.card}*${FidelityBankBillPayment.amount == '' ? '' : FidelityBankBillPayment.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*770*${FidelityBankBillPayment.card == '' ? '' : FidelityBankBillPayment.card}*${FidelityBankBillPayment.amount == '' ? '' : FidelityBankBillPayment.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* FIDELITY BANK USSD CODES END HERE */}

                {/* FIRST BANK USSD CODES STARTS HERE */}
                {
                    code?.code == '*894*Amount*Account Number#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={FirstBankTransfer.amount} onChange={e => setFirstBankTransfer({ ...FirstBankTransfer, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Account' style={{ ...styles.input, marginTop: 0 }} value={FirstBankTransfer.account} onChange={e => setFirstBankTransfer({ ...FirstBankTransfer, account: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*894*${FirstBankTransfer.amount == '' ? '' : FirstBankTransfer.amount}*${FirstBankTransfer.account == '' ? '' : FirstBankTransfer.account}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*894*${FirstBankTransfer.amount == '' ? '' : FirstBankTransfer.amount}*${FirstBankTransfer.account == '' ? '' : FirstBankTransfer.account}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*894*Amount#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={FirstBankAirtime.amount} onChange={e => setFirstBankAirtime({ ...FirstBankAirtime, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*894*${FirstBankAirtime.amount == '' ? '' : FirstBankAirtime.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*894*${FirstBankAirtime.amount == '' ? '' : FirstBankAirtime.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*894*OTP#' &&
                    <>
                        <TextInput placeholder='OTP' style={styles.input} value={FirstBankOTP.otp} onChange={e => setFirstBankOTP({ ...FirstBankOTP, otp: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*894*${FirstBankOTP.otp == '' ? '' : FirstBankOTP.otp}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*894*${FirstBankOTP.otp == '' ? '' : FirstBankOTP.otp}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*894*Amount*PhoneNumber#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={FirstBankDataPurchase.amount} onChange={e => setFirstBankDataPurchase({ ...FirstBankDataPurchase, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Phone' style={{ ...styles.input, marginTop: 0 }} value={FirstBankDataPurchase.phone} onChange={e => setFirstBankDataPurchase({ ...FirstBankDataPurchase, phone: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*894*${FirstBankDataPurchase.amount == '' ? '' : FirstBankDataPurchase.amount}*${FirstBankDataPurchase.phone == '' ? '' : FirstBankDataPurchase.phone}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*894*${FirstBankDataPurchase.amount == '' ? '' : FirstBankDataPurchase.amount}*${FirstBankDataPurchase.phone == '' ? '' : FirstBankDataPurchase.phone}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* FIRST BANK USSD CODES END HERE */}

                {/* FCMB USSD CODES STARTS HERE */}
                {
                    code?.code == '*329*Amount*AccountNumber#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={FCMBTransfer.amount} onChange={e => setFCMBTransfer({ ...FCMBTransfer, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Account Number' style={{ ...styles.input, marginTop: 0 }} value={FCMBTransfer.account} onChange={e => setFCMBTransfer({ ...FCMBTransfer, account: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*329*${FCMBTransfer.amount == '' ? '' : FCMBTransfer.amount}*${FCMBTransfer.account == '' ? '' : FCMBTransfer.account}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*329*${FCMBTransfer.amount == '' ? '' : FCMBTransfer.amount}*${FCMBTransfer.account == '' ? '' : FCMBTransfer.account}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*329*Amount#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={FCMBAirtime.amount} onChange={e => setFCMBAirtime({ ...FCMBAirtime, amount: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*329*${FCMBAirtime.amount == '' ? '' : FCMBAirtime.amount}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*329*${FCMBAirtime.amount == '' ? '' : FCMBAirtime.amount}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    code?.code == '*329*2*Amount*MerchantCode#' &&
                    <>
                        <TextInput placeholder='Amount' style={styles.input} value={FCMBPayBills.amount} onChange={e => setFCMBPayBills({ ...FCMBPayBills, amount: e.nativeEvent.text })} />
                        <TextInput placeholder='Merchant Code' style={{ ...styles.input, marginTop: 0 }} value={FCMBPayBills.code} onChange={e => setFCMBPayBills({ ...FCMBPayBills, code: e.nativeEvent.text })} />
                        <TouchableOpacity onPress={() => openDialer(`*329*${FCMBPayBills.amount == '' ? '' : FCMBPayBills.amount}*${FCMBPayBills.code == '' ? '' : FCMBPayBills.code}#`)} style={styles.dialerButton}>
                            <Text style={styles.dialerButtonText}>Dial {`*329*${FCMBPayBills.amount == '' ? '' : FCMBPayBills.amount}*${FCMBPayBills.code == '' ? '' : FCMBPayBills.code}#`}</Text>
                        </TouchableOpacity>
                    </>
                }
                {/* FCMB USSD CODES END HERE */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.faintBlack,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    invisibleButton: {
        width,
        flex: 1,
    },

    card: {
        width,
        backgroundColor: color.mainBackground,
        shadowColor: color.black,
        shadowOffset: {
            width: 0,
            height: 18,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.00,
        elevation: 24,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20,
    },

    input: {
        width: '100%',
        backgroundColor: color.accentLighten1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 20
    },

    description: {
        textAlign: 'center',
    },

    dialerButton: {
        backgroundColor: color.accent,
        width: '100%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    dialerButtonText: {
        color: color.white,
        fontSize: 14,
    }
})

export default Prompt