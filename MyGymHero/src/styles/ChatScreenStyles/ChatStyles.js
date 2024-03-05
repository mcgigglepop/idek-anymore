
import { StyleSheet, Platform } from 'react-native';
import { Fonts, SH, SW, SF,Colors, widthPercent } from '../../utils';

export default ChatStyles = (Colors) => StyleSheet.create({
  MinViewScreen: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white_text_color,
  },
  MinContentView: {
    width: '90%',
    height: '100%',
    marginHorizontal: '5%',
  },
  MinFlexView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingBottom: SH(70),
    paddingTop: SH(5),
  },
  FlexRowJustyCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  FlexRowJustyCentertwo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  TextColorMessage: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(16),
  },
  TextColorMessageTwo: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(12),
    paddingTop: SH(6),
    textAlign: 'right'
  },
  TextColorMessageTwotwo: {
    color: Colors.white_text_color,
    fontFamily: 'DMSans-Medium',
    fontSize: SF(12),
    paddingTop: SH(6),
  },
  DataSandTimeColor: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
    textAlign: 'center',
    paddingTop: SH(5),
    paddingLeft: SH(80),
    fontWeight: '600'
  },
  ImagStyleandCall: {
    width: SW(50),
    height: SH(52),
    borderRadius: SH(100),
  },
  MessageMinviewOwner: {
    backgroundColor: Colors.theme_background,
    paddingTop: SH(5),
    paddingBottom: SH(10),
    paddingHorizontal: SH(15),
    marginLeft: SH(10),
    width: '80%',
    borderBottomRightRadius: SH(20),
    borderTopLeftRadius: SH(20),
    borderTopRightRadius: SH(20),
  },
  PostionAbsoluTeView: {
    position: 'absolute',
    backgroundColor: Colors.white_text_color,
    bottom: SH(0),
    width: '100%',
    borderTopLeftRadius: SH(30),
    borderTopRightRadius: SH(30),
    shadowOffset: {
      width: SW(0),
      height: SH(25),
    },
    shadowOpacity: 0.58,
    shadowRadius: 25,
    elevation:  10,
  },
  TextMessageView: {
    paddingHorizontal: SH(20)
  },
  messagetextcolor: {
    color: Colors.gray_text_color,
    fontSize: SF(18),
  },
  TextInputBorderBottom: {
    padding: SH(0),
    width: widthPercent(40),
    fontSize: SF(16),
    borderWidth:SH(0)
  },
  MarginRightlikeicon: {
    paddingLeft: SH(20),
  },
  FlexrowImagiNations: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  FlexCheckSet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  SetIconPotion: {
    position: 'relative',
    top: SH(-8.5),
  },
  SetRightIconViewStyle: {
    position: 'relative',
    top: SH(9),
    paddingLeft: SH(5),
  },
  seticonrevirview: {
    marginTop: SH(-20),
  },
  ChatViewBgColor: {
    paddingVertical: SH(5),
    paddingHorizontal: SH(10),
    width: '70%',
    borderBottomLeftRadius: SH(20),
    borderTopLeftRadius: SH(20),
    borderTopRightRadius: SH(20),
    backgroundColor: Colors.argent_color,
  },
  FlexrowSendMesasage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop:SH(10)
  },
  InputWidtgh: {
    width:'80%',
    height:SH(55)
  },
  SetWhiteBox: {
    backgroundColor:Colors.light_gray_text_color,
    padding:SH(10),
    borderRadius:SH(10),
    marginBottom:SH(10),
  },
  FlexRowSetImage: {
    flexDirection:'row',
    alignItems:'center',
  }, 
  ImageCenterStyleTop: {
    width:'25%',
  },
  ImagStyle: {
    width:SW(60),
    height:SH(63),
    borderRadius:SH(100),
  },
  ListDotViewStyle: {
    position:'absolute',
    top:SH(-10),
    left:SH(47),
  },
  ImageCenterStyle: {
    width:'72%',
  },
  TextUserName: {
    fontFamily:Fonts.Poppins_Medium,
    fontSize:SF(19),
    color:Colors.theme_backgound,
  },
  Flextimeroe: {
    flexDirection:'row',
    justifyContent:'space-between',
  },
  TextUserNameSmall: {
    color:Colors.gray_text_color,
    fontFamily:Fonts.Poppins_Medium,
    fontSize:SF(15),
  },
  BgWhiteView: {
    backgroundColor:Colors.white_text_color,
    zIndex:324,
    position:'absolute',
    height:SH(200)
  },
  MinFlexViewtwo: {
    paddingHorizontal:SH(20),
  }
});
