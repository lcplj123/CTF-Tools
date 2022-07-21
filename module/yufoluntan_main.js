// JavaScript Documen
const CryptoJS = require('./module/crypto-js.min')
// import CryptoJS from "./crypto-js.min.js";
String.prototype.replaceAll = function (s1, s2) {
	var reg = new RegExp(s1, "g");
	return this.replace(reg, s2);
}
function aes_encrypt(msg,key) {

	var str = CryptoJS.AES.encrypt(msg, key).toString();
	// console.log(str)
	str = str.substring(10);
	return str

}
function encrypt() {
	var msg = $("#text-decryped").val();
	var key = $("#text-key").val();

	if (msg.length < 1) {
		$("#error-alert").show();
		$("#copy-alert").hide();
		$("#error-alert").text("�����ߣ����������٣��಻�ɶɡ�������������ܵ����ģ�");
	} else {
		if (key.length < 1) {
			key = password;
		}

		$("#text-encryped").val(togod(msg, key));
		$("#error-alert").hide();
		$("#copy-alert").hide();
	}

}
function  aes_decrypto(msg,key) {
	 return CryptoJS.AES.decrypt("U2FsdGVkX1" + msg, key).toString(CryptoJS.enc.Utf8);
}
function decrypt(msg,key) {

	if (msg.length < 1) {
		return "�����ߣ����������٣��಻�ɶɡ�������������ܵ����ģ�";
	} else {
		if (msg.substring(0, 4) !== "����Ի��" || msg.substring(0, 3) !== "����Ի��"  ) {
			return "ʩ�������ǵô�Ϊ�θ�ɮ���ԣ������Ƿ����ȷ��������Դ����վ���������ԡ���Ի�����򡰷���Ի������ͷ����";
		} else {
			try {
				var str = toman(msg, key);
			} catch (err) {
				return "ʩ�������ǵô�Ϊ�θ�ɮ���ԣ�������������ȷ����Կ��ȷ��δ���۸ģ�";
			} finally {
			}
			return str
		}
	}
}



function togod(msg, key) {
	var str = CryptoJS.AES.encrypt(msg, key).toString();
	// console.log(str)
	str = str.substring(10);

	str = str.replaceAll("e", "��");
	str = str.replaceAll("E", "��");
	str = str.replaceAll("t", "��");
	str = str.replaceAll("T", "��");
	str = str.replaceAll("a", "Ħ");
	str = str.replaceAll("A", "��");
	str = str.replaceAll("o", "ڭ");
	str = str.replaceAll("O", "��");
	str = str.replaceAll("i", "Ү");
	str = str.replaceAll("I", "��");
	str = str.replaceAll("n", "�");
	str = str.replaceAll("N", "��");
	str = str.replaceAll("s", "ҹ");
	str = str.replaceAll("S", "��");
	str = str.replaceAll("h", "��");
	str = str.replaceAll("H", "��");
	str = str.replaceAll("r", "Ϥ");
	str = str.replaceAll("R", "ܯ");
	str = str.replaceAll("d", "��");
	str = str.replaceAll("D", "��");
	str = str.replaceAll("l", "��");
	str = str.replaceAll("L", "��");
	str = str.replaceAll("c", "��");
	str = str.replaceAll("C", "��");
	str = str.replaceAll("u", "�o");
	str = str.replaceAll("U", "��");
	str = str.replaceAll("m", "¬");
	str = str.replaceAll("M", "��");
	str = str.replaceAll("w", "��");
	str = str.replaceAll("W", "˸");
	str = str.replaceAll("f", "��");
	str = str.replaceAll("F", "��");
	str = str.replaceAll("g", "��");
	str = str.replaceAll("G", "ɳ");
	str = str.replaceAll("y", "��");
	str = str.replaceAll("Y", "��");
	str = str.replaceAll("p", "��");
	str = str.replaceAll("P", "��");
	str = str.replaceAll("b", "��");
	str = str.replaceAll("B", "��");
	str = str.replaceAll("v", "��");
	str = str.replaceAll("V", "٤");
	str = str.replaceAll("k", "��");
	str = str.replaceAll("K", "��");
	str = str.replaceAll("j", "��");
	str = str.replaceAll("J", "��");
	str = str.replaceAll("x", "�");
	str = str.replaceAll("X", "�^");
	str = str.replaceAll("q", "��");
	str = str.replaceAll("Q", "��");
	str = str.replaceAll("z", "��");
	str = str.replaceAll("Z", "��");
	str = str.replaceAll("0", "��");
	str = str.replaceAll("1", "��");
	str = str.replaceAll("2", "��");
	str = str.replaceAll("3", "��");
	str = str.replaceAll("4", "��");
	str = str.replaceAll("5", "ҷ");
	str = str.replaceAll("6", "��");
	str = str.replaceAll("7", "д");
	str = str.replaceAll("8", "��");
	str = str.replaceAll("9", "��");
	str = str.replaceAll("\\+", "��");
	str = str.replaceAll("/", "��");
	str = str.replaceAll("=", "��");
	return "��Ի��" + str;
}

function toman(msg, key) {

	str = msg.substring(4);
	str = str.replaceAll("��", "e");
	str = str.replaceAll("��", "E");
	str = str.replaceAll("��", "t");
	str = str.replaceAll("��", "T");
	str = str.replaceAll("Ħ", "a");
	str = str.replaceAll("��", "A");
	str = str.replaceAll("ڭ", "o");
	str = str.replaceAll("��", "O");
	str = str.replaceAll("Ү", "i");
	str = str.replaceAll("��", "I");
	str = str.replaceAll("�", "n");
	str = str.replaceAll("��", "N");
	str = str.replaceAll("ҹ", "s");
	str = str.replaceAll("��", "S");
	str = str.replaceAll("��", "h");
	str = str.replaceAll("��", "H");
	str = str.replaceAll("Ϥ", "r");
	str = str.replaceAll("ܯ", "R");
	str = str.replaceAll("��", "d");
	str = str.replaceAll("��", "D");
	str = str.replaceAll("��", "l");
	str = str.replaceAll("��", "L");
	str = str.replaceAll("��", "c");
	str = str.replaceAll("��", "C");
	str = str.replaceAll("�o", "u");
	str = str.replaceAll("��", "U");
	str = str.replaceAll("¬", "m");
	str = str.replaceAll("��", "M");
	str = str.replaceAll("��", "w");
	str = str.replaceAll("˸", "W");
	str = str.replaceAll("��", "f");
	str = str.replaceAll("��", "F");
	str = str.replaceAll("��", "g");
	str = str.replaceAll("ɳ", "G");
	str = str.replaceAll("��", "y");
	str = str.replaceAll("��", "Y");
	str = str.replaceAll("��", "p");
	str = str.replaceAll("��", "P");
	str = str.replaceAll("��", "b");
	str = str.replaceAll("��", "B");
	str = str.replaceAll("��", "v");
	str = str.replaceAll("٤", "V");
	str = str.replaceAll("��", "k");
	str = str.replaceAll("��", "K");
	str = str.replaceAll("��", "j");
	str = str.replaceAll("��", "J");
	str = str.replaceAll("�", "x");
	str = str.replaceAll("�^", "X");
	str = str.replaceAll("��", "q");
	str = str.replaceAll("��", "Q");
	str = str.replaceAll("��", "z");
	str = str.replaceAll("��", "Z");
	str = str.replaceAll("��", "0");
	str = str.replaceAll("��", "1");
	str = str.replaceAll("��", "2");
	str = str.replaceAll("��", "3");
	str = str.replaceAll("��", "4");
	str = str.replaceAll("ҷ", "5");
	str = str.replaceAll("��", "6");
	str = str.replaceAll("д", "7");
	str = str.replaceAll("��", "8");
	str = str.replaceAll("��", "9");
	str = str.replaceAll("��", "+");
	str = str.replaceAll("��", "/");
	str = str.replaceAll("��", "=");
	return CryptoJS.AES.decrypt("U2FsdGVkX1" + str, key).toString(CryptoJS.enc.Utf8);
}

