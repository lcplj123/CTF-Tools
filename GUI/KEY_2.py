# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'KEY_2.ui'
#
# Created by: PyQt5 UI code generator 5.15.4
#
# WARNING: Any manual changes made to this file will be lost when pyuic5 is
# run again.  Do not edit this file unless you know what you are doing.


from PyQt5 import QtCore, QtGui, QtWidgets


class Ui_KEY2(object):
    def setupUi(self, KEY2):
        KEY2.setObjectName("KEY2")
        KEY2.resize(419, 106)
        self.gridLayout = QtWidgets.QGridLayout(KEY2)
        self.gridLayout.setObjectName("gridLayout")
        self.horizontalLayout = QtWidgets.QHBoxLayout()
        self.horizontalLayout.setObjectName("horizontalLayout")
        self.key_1 = QtWidgets.QLabel(KEY2)
        self.key_1.setObjectName("key_1")
        self.horizontalLayout.addWidget(self.key_1)
        self.Key1 = QtWidgets.QLineEdit(KEY2)
        self.Key1.setText("")
        self.Key1.setObjectName("Key1")
        self.horizontalLayout.addWidget(self.Key1)
        self.enter = QtWidgets.QPushButton(KEY2)
        self.enter.setObjectName("enter")
        self.horizontalLayout.addWidget(self.enter)
        self.gridLayout.addLayout(self.horizontalLayout, 0, 0, 1, 1)
        self.horizontalLayout_2 = QtWidgets.QHBoxLayout()
        self.horizontalLayout_2.setObjectName("horizontalLayout_2")
        self.keyl_2 = QtWidgets.QLabel(KEY2)
        self.keyl_2.setObjectName("keyl_2")
        self.horizontalLayout_2.addWidget(self.keyl_2)
        self.Key2 = QtWidgets.QLineEdit(KEY2)
        self.Key2.setObjectName("Key2")
        self.horizontalLayout_2.addWidget(self.Key2)
        self.quxiao = QtWidgets.QPushButton(KEY2)
        self.quxiao.setObjectName("quxiao")
        self.horizontalLayout_2.addWidget(self.quxiao)
        self.gridLayout.addLayout(self.horizontalLayout_2, 1, 0, 1, 1)

        self.retranslateUi(KEY2)
        self.quxiao.clicked.connect(KEY2.close)
        QtCore.QMetaObject.connectSlotsByName(KEY2)

    def retranslateUi(self, KEY2):
        _translate = QtCore.QCoreApplication.translate
        KEY2.setWindowTitle(_translate("KEY2", "KEY"))
        self.key_1.setText(_translate("KEY2", "Keys 1"))
        self.enter.setText(_translate("KEY2", "确定"))
        self.keyl_2.setText(_translate("KEY2", "Keys 2"))
        self.quxiao.setText(_translate("KEY2", "取消"))
