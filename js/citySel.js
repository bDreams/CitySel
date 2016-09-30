/*
 * @Author: bDreams
 * @Date:   2016-09-28 13:52:11
 * @Last Modified by:   bDreams
 * @Last Modified time: 2016-09-29 12:20:41
 */

'use strict';

! function(win) {
    var doc = win.document;

    function CitySel(config) {
        this._init(config);
    }

    CitySel.prototype = {
        _init: function(config) {
            this.cityData = [{
                province: '北京',
                citys: ['北京']
            }, {
                province: '天津',
                citys: ['天津']
            }, {
                province: '上海',
                citys: ['上海']
            }, {
                province: '重庆',
                citys: ['重庆']
            }, {
                province: '浙江省',
                citys: ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水']
            }, {
                province: '安徽省',
                citys: ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州', '阜阳', '宿州', '巢湖', '六安', '亳州', '池州', '宣城', '天长', '明光', '界首', '宁国']
            }, {
                province: '福建省',
                citys: ['福州', '厦门', '泉州', '龙岩', '三明', '莆田', '漳州', '宁德', '长乐', '福清', '福安', '福鼎', '南安', '石狮', '晋江', '龙海', '漳平', '永安', '武夷山', '邵武', '建瓯', '建阳']
            }, {
                province: '江西省',
                citys: ['南昌', '景德镇', '九江', '萍乡', '新余', '鹰潭', '赣州', '宜春', '上饶', '吉安', '抚州']
            }, {
                province: '山东省',
                citys: ['济南', '淄博', '泰安', '莱芜', '聊城', '德州', '滨洲', '荷泽', '济宁', '枣庄', '临沂', '日照', '青岛', '烟台', '威海', '潍坊', '东营']
            }, {
                province: '河南省',
                citys: ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '禹州', '长葛', '漯河', '三门峡', '义马', '灵宝', '南阳', '邓州', '商丘', '永城', '信阳', '周口', '项城', '驻马店']
            }, {
                province: '广东省',
                citys: ['东莞', '广州', '中山', '深圳', '惠州', '江门', '珠海', '汕头', '佛山', '湛江', '河源', '肇庆', '清远', '潮州', '韶关', '揭阳', '阳江', '梅州', '云浮', '茂名', '汕尾']
            }, {
                province: '江苏省',
                citys: ['苏州', '徐州', '盐城', '无锡', '南京', '南通', '连云港', '常州', '镇江', '扬州', '淮安', '泰州', '宿迁']
            }, {
                province: '河北省',
                citys: ['石家庄', '唐山', '保定', '邯郸', '邢台', '河北区', '沧州', '秦皇岛', '张家口', '衡水', '廊坊', '承德']
            }, {
                province: '陕西省',
                citys: ['西安', '咸阳', '宝鸡', '汉中', '渭南', '安康', '榆林', '商洛', '延安', '铜川']
            }, {
                province: '湖南省',
                citys: ['长沙', '邵阳', '常德', '衡阳', '株洲', '湘潭', '永州', '岳阳', '怀化', '郴州', '娄底', '益阳', '张家界', '湘西州']
            }, {
                province: '云南省',
                citys: ['昆明', '红河州', '大理州', '文山州', '德宏州', '曲靖', '昭通', '楚雄', '保山', '玉溪', '丽江', '临沧', '思茅', '西双版纳', '怒江', '迪庆']
            }, {
                province: '四川省',
                citys: ['成都', '绵阳', '广元', '达州', '南充', '德阳', '广安', '阿坝州', '巴中', '遂宁', '内江', '凉山州', '攀枝花', '乐山', '自贡', '泸州', '雅安', '宜宾', '资阳', '眉山', '甘孜州']
            }, {
                province: '海南省',
                citys: ['三亚', '海口', '琼海', '文昌', '东方', '昌江', '陵水', '乐东', '保亭', '五山', '澄迈', '万', '儋州', '临高', '白沙', '定安', '琼中', '屯昌'],
            }, {
                province: '江西省',
                citys: ['南昌', '赣州', '上饶', '吉安', '九江', '新余', '抚州', '宜春', '景德镇', '萍乡', '鹰潭'],
            }, {
                province: '湖北省',
                citys: ['武汉', '宜昌', '襄樊', '荆州', '恩施州', '黄冈', '孝感', '十堰', '咸宁', '黄石', '仙桃', '天门', '随州', '荆门', '潜江', '鄂州', '神农架林区'],
            }, {
                province: '山西省',
                citys: ['太原', '大同', '运城', '长治', '晋城', '忻州', '临汾', '吕梁', '晋中', '阳泉', '朔州'],
            }, {
                province: '辽宁省',
                citys: ['大连', '沈阳', '丹东', '辽阳', '葫芦岛', '锦州', '朝阳', '营口', '鞍山', '抚顺', '阜新', '盘锦', '本溪', '铁岭'],
            }, {
                province: '黑龙江省',
                citys: ['齐齐哈尔', '哈尔滨', '大庆', '佳木斯', '双鸭山', '牡丹江', '鸡西', '黑河', '绥化', '鹤岗', '伊春', '大兴安岭', '七台河'],
            }, {
                province: '贵州省',
                citys: ['贵阳', '黔东南州', '黔南州', '遵义', '黔西南州', '毕节', '铜仁', '安顺', '六盘水'],
            }, {
                province: '甘肃省',
                citys: ['兰州', '天水', '庆阳', '武威', '酒泉', '张掖', '陇南地区', '白银', '定西地区', '平凉', '嘉峪关', '临夏回族自治州', '金昌', '甘南州'],
            }, {
                province: '青海省',
                citys: ['西宁', '海西州', '海东地区', '海北州', '果洛州', '玉树州', '黄南藏族自治州'],
            }, {
                province: '吉林省',
                citys: ['吉林', '长春', '白山', '延边州', '白城', '松原', '辽源', '通化', '四平'],
            }, {
                province: '宁夏回族自治区',
                citys: ['银川', '吴忠', '中卫', '石嘴山', '固原'],
            }, {
                province: '西藏区',
                citys: ['拉萨', '山南地区', '林芝地区', '日喀则地区', '阿里地区', '昌都地区', '那曲地区'],
            }, {
                province: '新疆维吾尔自治区',
                citys: ['乌鲁木齐', '伊犁州', '昌吉州', '石河子', '哈密地区', '阿克苏地区', '巴音郭楞州', '喀什地区', '塔城地区', '克拉玛依', '和田地区', '阿勒泰州', '吐鲁番地区', '阿拉尔', '博尔塔拉州', '五家渠', '克孜勒苏州', '图木舒克']
            }, {
                province: '内蒙古自治区',
                citys: ['赤峰', '包头', '通辽', '呼和浩特', '鄂尔多斯', '乌海', '呼伦贝尔', '兴安盟', '巴彦淖尔盟', '乌兰察布盟', '锡林郭勒盟', '阿拉善盟']
            }, {
                province: '广西壮族自治区',
                citys: ['贵港', '玉林', '北海', '南宁', '柳州', '桂林', '梧州', '钦州', '来宾', '河池', '百色', '贺州', '崇左', '防城港']
            }, {
                province: '台湾省',
                citys: ['台北', '高雄', '台中', '新竹', '基隆', '台南', '嘉义']
            }, {
                province: '香港特别行政区',
                citys: ['香港']
            }, {
                province: '澳门特别行政区',
                citys: ['澳门']
            }]
            this.cont = typeof config.cont == 'string' ? doc.querySelector(config.cont) : config.cont;
            this._renderWrap();
        },
        _renderWrap: function() {
            var cityOption = doc.createElement('div'),
                arr = ['city-option-item city-option-province', 'city-option-item city-option-city'],
                tempArr = ['省', '市'],
                i = 0,
                len = arr.length;
            cityOption.className = 'city-option';
            for (; i < len; i++) {
                var tempDiv = doc.createElement('div');
                tempDiv.className = arr[i];
                tempDiv.innerHTML = '<input type="text" name="" value="' + tempArr[i] + '" readonly="true">' + '<ul class="sel-city"></ul>';
                cityOption.appendChild(tempDiv);
            }
            this.cont.appendChild(cityOption);
            this.province = this.cont.querySelector('.city-option-province');
            this.City = this.cont.querySelector('.city-option-city');
            this.proInput = this.province.querySelector('input');
            this.CityInput = this.City.querySelector('input');
            this.proUl = this.province.querySelector('ul');
            this.CityUl = this.City.querySelector('ul');
            this._renderProvince();
        },
        _renderProvince: function() {
            var data = this.cityData;
            var proArr = [],
                j = 0,
                jlen = data.length;
            for (; j < jlen; j++) {
                proArr.push('<li>' + data[j].province + '</li>');
            }
            this.proUl.innerHTML = proArr.join('');
            this._bindEvent();
        },

        _renderCitys: function(str) {
            var index = this._getIndex(str),
                citys = this.cityData[index]['citys'],
                c = 0,
                clen = citys.length,
                cArr = [];
            for (; c < clen; c++) {
                cArr.push('<li>' + citys[c] + '</li>');
            }
            this.CityUl.innerHTML = cArr.join('');
        },

        _bindEvent: function() {
            var _this = this;
            lisEv(_this.proInput, _this.proUl);
            lisEv(_this.CityInput, _this.CityUl);

            function lisEv(oInp, oUl) {
                oInp.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    oUl.style.display = 'block';
                    var lis = oUl.querySelectorAll('li'),
                        k = 0,
                        klen = lis.length;
                    for (; k < klen; k++) {
                        lis[k].addEventListener('click', function() {
                            var str = this.innerHTML;
                            oInp.value = str;
                            oUl.style.display = 'none';
                            if (oInp === _this.proInput) {
                                _this._renderCitys(str);
                            }
                        });
                    }
                }, false);
            }
        },
        // 获取当前省在数组中的索引  str: 省的名字
        _getIndex: function(str) {
            var data = this.cityData,
                d = 0,
                dlen = data.length;
            for (; d < dlen; d++) {
                if (data[d].province === str) {
                    return d;
                }
            }
        }
    }

    win['CitySel'] = CitySel;
}(window);
