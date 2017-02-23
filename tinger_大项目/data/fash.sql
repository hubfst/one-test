SET NAMES UTF8;
DROP DATABASE IF EXISTS fash;
CREATE DATABASE fash CHARSET=UTF8;
USE fash;
CREATE TABLE fash_user(
uid INT PRIMARY KEY AUTO_INCREMENT,
uname VARCHAR(20),
upwd VARCHAR(10)
);
INSERT INTO fash_user VALUES(NULL,'fst','123456');
CREATE TABLE fash_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	pname VARCHAR(50),
	psort VARCHAR(50),
	pstyle INT,
	phome INT,
	pslaenum INT,
	plovenum INt,
	pleavenum INT,
	price FLOAT(10,2),
	pic VARCHAR(32)
);
INSERT INTO fash_product VALUES
(NULL,'韩冬季羊羔毛翻领加厚保暖面包服','上衣',1,1,390,120,3200,179.9,'imgs_products/coat1.jpg'),
(NULL,'韩版长款毛呢外套2016新款花格','上衣',2,1,390,120,430,179.9,'imgs_products/coat2.jpg'),
(NULL,'中长款棉袄女冬保暖连帽棉衣潮','上衣',3,1,390,120,5230,179.9,'imgs_products/coat3.jpg'),
(NULL,'长款女毛呢外套长款韩小清新','上衣',4,1,390,120,520,179.9,'imgs_products/coat4.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','上衣',5,2,390,120,563,179.9,'imgs_products/coat5.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','上衣',6,1,390,120,85,179.9,'imgs_products/coat6.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','上衣',7,2,390,120,2245,179.9,'imgs_products/coat7.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','上衣',1,1,390,120,655,179.9,'imgs_products/coat8.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','上衣',1,1,390,120,467,179.9,'imgs_products/coat1.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','上衣',2,1,390,120,24,179.9,'imgs_products/coat2.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','上衣',3,1,390,120,87,179.9,'imgs_products/coat3.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','上衣',4,1,390,120,233,179.9,'imgs_products/coat4.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','上衣',5,2,390,120,54,179.9,'imgs_products/coat5.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','上衣',6,1,390,120,33,179.9,'imgs_products/coat6.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','上衣',7,2,390,120,467,179.9,'imgs_products/coat7.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','上衣',1,1,390,120,467,179.9,'imgs_products/coat8.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','上衣',1,1,390,120,467,179.9,'imgs_products/coat1.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','上衣',2,1,390,120,467,179.9,'imgs_products/coat2.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','上衣',3,1,390,120,467,179.9,'imgs_products/coat3.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','上衣',4,1,390,120,467,179.9,'imgs_products/coat4.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','裙子',2,2,690,120,467,179.9,'imgs_products/skirt1.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','裙子',1,3,390,120,467,179.9,'imgs_products/skirt2.jpg'),
(NULL,'韩版纯色弹力高腰麻花针织半身裙','裙子',1,3,390,120,467,179.9,'imgs_products/skirt3.jpg'),
(NULL,'韩版纯色弹力高腰麻花针织半身裙','裙子',6,1,390,120,467,179.9,'imgs_products/skirt4.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','裙子',1,1,790,120,467,179.9,'imgs_products/skirt5.jpg'),
(NULL,'韩版纯色弹力高腰麻花针织半身裙','裙子',1,2,340,120,467,179.9,'imgs_products/skirt6.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','裙子',2,2,690,120,467,179.9,'imgs_products/skirt1.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','裙子',1,3,390,120,467,179.9,'imgs_products/skirt2.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','裙子',1,3,390,120,467,179.9,'imgs_products/skirt3.jpg'),
(NULL,'韩版纯色弹力高腰麻花针织半身裙','裙子',6,1,390,120,467,179.9,'imgs_products/skirt4.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','裙子',1,1,790,120,467,179.9,'imgs_products/skirt5.jpg'),
(NULL,'韩版纯色弹力高腰麻花针织半身裙','裙子',1,3,340,120,467,179.9,'imgs_products/skirt6.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','裙子',2,2,690,120,467,179.9,'imgs_products/skirt1.jpg'),
(NULL,'韩版纯色弹力高腰麻花针织半身裙','裙子',1,3,390,120,467,179.9,'imgs_products/skirt2.jpg'),
(NULL,'韩版纯色弹力高腰麻花针织半身裙','裙子',1,3,390,120,467,179.9,'imgs_products/skirt3.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','裙子',6,1,390,120,467,179.9,'imgs_products/skirt4.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','裙子',1,1,790,120,467,179.9,'imgs_products/skirt5.jpg'),
(NULL,'韩版纯色弹力高腰麻花针织半身裙','裙子',1,3,340,120,467,179.9,'imgs_products/skirt6.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','裙子',2,2,690,120,467,179.9,'imgs_products/skirt1.jpg'),
(NULL,'韩版冬季羊羔毛翻领加厚保暖面包','裙子',1,3,390,120,467,179.9,'imgs_products/skirt2.jpg');


CREATE TABLE products_big_img (
        p_big_imgid  INT PRIMARY KEY AUTO_INCREMENT,
        pid INT,
	pimg VARCHAR(50),
	pcolor VARCHAR(3)
);
INSERT INTO products_big_img VALUES
(NULL,41,'images3/p1_big.jpg','白色'),
(NULL,41,'images3/p2_big.jpg','粉色'),
(NULL,41,'images3/p3_big.jpg','黑色'),
(NULL,41,'images3/p4_big.jpg','绿色'),
(NULL,41,'images3/p5_big.jpg','绿色'),
(NULL,42,'images3/3p1_big.jpg','卡其格'),
(NULL,42,'images3/3p2_big.jpg','卡其格'),
(NULL,43,'images3/1p1_big.jpg','红色'),
(NULL,43,'images3/1p2_big.jpg','黑色'),
(NULL,43,'images3/1p3_big.jpg','红色'),
(NULL,43,'images3/1p4_big.jpg','红色'),
(NULL,43,'images3/1p5_big.jpg','黑色'),
(NULL,44,'images3/4p1_big.jpg','卡其色'),
(NULL,44,'images3/4p2_big.jpg','卡其色'),
(NULL,44,'images3/4p3_big.jpg','卡其色'),
(NULL,44,'images3/4p4_big.jpg','卡其色'),
(NULL,44,'images3/4p5_big.jpg','卡其色'),
(NULL,46,'images3/2p1_big.jpg','绿色'),
(NULL,46,'images3/2p2_big.jpg','黑色'),
(NULL,46,'images3/2p3_big.jpg','米白色');

CREATE TABLE p_home (
       hid INT PRIMARY KEY AUTO_INCREMENT,
       hhead VARCHAR(50),
       hname VARCHAR(10),
       hqulity VARCHAR(5),
       hservice VARCHAR(5),
       hbannimg VARCHAR(50)
);
INSERT INTO p_home VALUES
(NULL,'images3/shop_home_head1.jpg','夏樊倪','4.95','4.82','images3/shop_home1.jpg'),
(NULL,'images3/shop_home_head2.jpg','瑜公主','4.35','4.62','images3/shop_home2.jpg'),
(NULL,'images3/shop_home_head3.jpg','默默家','5.00','4.82','images3/shop_home3.jpg');


CREATE TABLE fash_cart(
      cid INT PRIMARY KEY AUTO_INCREMENT,
      userid INT
);
INSERT INTO fash_cart VALUES(101,1);
CREATE TABLE cart_detail(
      did INT PRIMARY KEY AUTO_INCREMENT,
      cartid INT,
      productId INT,
      count INT,
      pcolor VARCHAR(32),
      pscale VARCHAR(32)
);
CREATE TABLE user_addr (
      addrId INT PRIMARY KEY AUTO_INCREMENT,
      userid INT,
      username VARCHAR(6),
      addr1 VARCHAR(100),
      addr2 VARCHAR(150),
      youbian  VARCHAR(10),
      phone VARCHAR(12)
);

CREATE TABLE user_order(
      orderId INT PRIMARY KEY AUTO_INCREMENT,
      userid INT
);
CREATE TABLE order_detail(
      did INT PRIMARY KEY AUTO_INCREMENT,
      orderId INT,
      pid INT,
      pimg VARCHAR(50),
      pname VARCHAR(60),
      price FLOAT(10,2),
      order_time VARCHAR(50),
      user_addr VARCHAR(100),
      user_name VARCHAR(15),
      user_phone VARCHAR(15)
);