export const endpoints = {
    getInfo() {
        return '{"name":"Litecoin","shortcut":"LTC","decimals":8,"version":"0.3.6","bestHeight":2373436,"bestHash":"2c1bc2b99f8a4447a57dfc7b694b9c82bff1b3af7cce8ff151df01238dc07c8b","block0Hash":"12a765e31ffd4059bada1e25190f6e98c99d9714d334efa41a195a7e7e04bfe2","testnet":false,"backend":{"version":"210201","subversion":"/LitecoinCore:0.21.2.1/"}}';
    },

    getAccountInfo(params: any) {
        if (
            params.descriptor ===
            'zpub6rDfq4mDgVKjjFz9cqWizJQvJyHKss4NhBzuiSaoJ5k23cCFyU2WQFrZEJPorsZt4soMDJtZBHL3ZyH8HfqkYSo7qzebbHL4QhpSTXUNpAq'
        ) {
            return '{"page":1,"totalPages":1,"itemsOnPage":25,"address":"zpub6rDfq4mDgVKjjFz9cqWizJQvJyHKss4NhBzuiSaoJ5k23cCFyU2WQFrZEJPorsZt4soMDJtZBHL3ZyH8HfqkYSo7qzebbHL4QhpSTXUNpAq","balance":"9997490","totalReceived":"9997490","totalSent":"0","unconfirmedBalance":"0","unconfirmedTxs":0,"txs":1,"transactions":[{"txid":"efe11e0d8d562e73b7795c2a3b7e44c6b6390f2c42c3ae90bb1005009c27a3f3","version":2,"vin":[{"txid":"5961c1187b435a42e144a1c609253bca80ac0c55caf576831b6459c77fb690f1","sequence":4294967295,"n":0,"addresses":["ltc1gp6wfe96yxq855dhjjg0eg24yl8y6se62hgcadmh6jdyxfdlljy6slgmvea"],"isAddress":false,"value":"458340830086"}],"vout":[{"value":"458330830086","n":0,"spent":true,"hex":"582066723521c495f90a5fbe3686c617c294d69ac71ed9e57b65032f83e45871fd83","addresses":["ltc1gveer2gwyjhus5ha7x6rvv97zjntf43c7m8jhkegr97p7gkr3lkpsj08e2q"],"isAddress":false},{"value":"9997490","n":1,"hex":"0014f4de962f4bb82d0057974201202acd78d56db7f2","addresses":["ltc1q7n0fvt6thqksq4uhggqjq2kd0r2kmdlje4dvjg"],"isAddress":true,"isOwn":true}],"blockHash":"98cdd21f13d92ccd23478681d6698aea20a7132d7ca9bec1204e0d25e9355eba","blockHeight":2373435,"confirmations":2,"blockTime":1669107971,"value":"458340827576","valueIn":"458340830086","fees":"2510","hex":"02000000000801f190b67fc759641b8376f5ca550cac80ca3b2509c6a144e1425a437b18c161590000000000ffffffff020675a5b66a00000022582066723521c495f90a5fbe3686c617c294d69ac71ed9e57b65032f83e45871fd83b28c980000000000160014f4de962f4bb82d0057974201202acd78d56db7f20000000000"}],"usedTokens":1,"tokens":[{"type":"XPUBAddress","name":"ltc1q7n0fvt6thqksq4uhggqjq2kd0r2kmdlje4dvjg","path":"m/84\'/2\'/0\'/0/0","transfers":1,"decimals":8,"balance":"9997490","totalReceived":"9997490","totalSent":"0"},{"type":"XPUBAddress","name":"ltc1qjjdfes2sp4pss9mwcecstvs5mm2uym0xfgnktl","path":"m/84\'/2\'/0\'/0/1","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qqawusuwxgrw56qnwu3cxa4elx2prshy28dgejj","path":"m/84\'/2\'/0\'/0/2","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1quhex6zllcdtrqsex44a8v9vspnhvuayl2ula9n","path":"m/84\'/2\'/0\'/0/3","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qqnxu95tkrl7z8w4ahdn8y8tfcs5zhtse4fgshe","path":"m/84\'/2\'/0\'/0/4","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qaa68zn5dzjtt2agpm7ne43zysgtsm5z60ys7yz","path":"m/84\'/2\'/0\'/0/5","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qtem83n3f3vl94k643grmvw4cmgka06v547zdht","path":"m/84\'/2\'/0\'/0/6","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qdn89j27a3ft7gsxs80m3qv729aa8lngcnmc0qu","path":"m/84\'/2\'/0\'/0/7","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qnurkwf0027mre4shzt6th88lk53zde5fesrrm7","path":"m/84\'/2\'/0\'/0/8","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1q6ytmn84l3zkmpwksrl7ztees808gtxxfp2k6d4","path":"m/84\'/2\'/0\'/0/9","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qq7slfupfdjccr40mvr8kfuttmdznqu4k4rrumf","path":"m/84\'/2\'/0\'/0/10","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1q3ecf433sakxhzqml5traskyace9sjezwyueukm","path":"m/84\'/2\'/0\'/0/11","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qhanjm4sp0dm86u8l48dudm46nh648xj583kxtx","path":"m/84\'/2\'/0\'/0/12","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1q0n8f92x3xy6hj67u2hqwv4gqgncp2g8kupc6wm","path":"m/84\'/2\'/0\'/0/13","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qhvq5nmvgcqpusrxejfjf3c5rlxuc36g4kku8cx","path":"m/84\'/2\'/0\'/0/14","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qhjjrqr75d7a7l76n26vh2wqlnwwpr4tlxyvs9m","path":"m/84\'/2\'/0\'/0/15","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qgq2yxrgpxuj732etarwjjg6u6q6p5zanwql9hk","path":"m/84\'/2\'/0\'/0/16","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qg739wej37m3s8un9lk3td8cz5t66546qj5x8l3","path":"m/84\'/2\'/0\'/0/17","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qemhgu4v3fegqwwualgyg6gnurd6lgnyqudddr4","path":"m/84\'/2\'/0\'/0/18","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qm0ggluwx83cqyt233ncc04x7tfjys5uaa2lp0g","path":"m/84\'/2\'/0\'/0/19","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qkl9tj2kxx06tyehgclvttcnvpkjk4053xensdw","path":"m/84\'/2\'/0\'/0/20","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qjwamf85d5ua429l256pugmkp89rhkezndh8t3t","path":"m/84\'/2\'/0\'/1/0","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1q6fwte9tar4dftxuarz8lwyfnwdmmt9azxjatpl","path":"m/84\'/2\'/0\'/1/1","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qas6kxl7fzlj7whz6uvq0z29em80gw5cqwf3s8q","path":"m/84\'/2\'/0\'/1/2","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1q33exj648wwrl63npl5qsm70nf06zxkkq0k4e9y","path":"m/84\'/2\'/0\'/1/3","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qvrsd8cltsdnn0kzax3aaegkudegt0zc0wgw3r2","path":"m/84\'/2\'/0\'/1/4","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qp8ft9hpgkpch0ee3zk7cn8zzch5nxyeuyms8sx","path":"m/84\'/2\'/0\'/1/5","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1q6wypz0pqd8l54un6fhr9qhxt7slhdn7na30v5n","path":"m/84\'/2\'/0\'/1/6","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qz5uujmd9eevrrh9nrq22fjwmk0952da6qg0842","path":"m/84\'/2\'/0\'/1/7","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qu9t6qh8xwdyccwacpfzsyuruhmv4d226qf5tc7","path":"m/84\'/2\'/0\'/1/8","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1quwedyltgjz6gqfjxkzhnc8n6x89c2ftach2nrl","path":"m/84\'/2\'/0\'/1/9","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qgs6g3vu0kp66e6k4lwhadms3rq2wep6fecnw96","path":"m/84\'/2\'/0\'/1/10","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qyq349xe2mqfdupq88skctg45drmnk8vzet67xj","path":"m/84\'/2\'/0\'/1/11","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1q0k8zdpy4jcs86kw4aygt3erl3k74txsz4yvr97","path":"m/84\'/2\'/0\'/1/12","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1q2p9njjargmxet5duw3mnzevs4500nlyctlnmky","path":"m/84\'/2\'/0\'/1/13","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1q2hh5kn0srl9h7hwm0yj2ugqwwj0n33eet8en52","path":"m/84\'/2\'/0\'/1/14","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1q7apnzmy8y3u2ey0uefg95ak69xwmp8w728ef8e","path":"m/84\'/2\'/0\'/1/15","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qjtl3ktcvq9d4prtypqj0nm3t76ugrx8jjeazks","path":"m/84\'/2\'/0\'/1/16","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qmpz3ufw8zgr0z9qcsmxr8plgeu0recsww2e7p9","path":"m/84\'/2\'/0\'/1/17","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qwnw40sv82grh7wfjt42gsv0f2mdhgvz7l359r5","path":"m/84\'/2\'/0\'/1/18","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1qe7rxgampeatk7n9lkhsa2uypg5atp59glvaf50","path":"m/84\'/2\'/0\'/1/19","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"ltc1q2c7kya79pllf3srjla6q3q3aax7q5qdvtrrwcj","path":"m/84\'/2\'/0\'/1/20","transfers":0,"decimals":8}]}';
        }
        return '{"page":1,"totalPages":1,"itemsOnPage":25,"address":"Ltub2ZYSDNkHBYfdWFMg5CPq9KuqJrjB8QNCtyHXKzdEN4kx1Kp68XXhurqzjS1xuENMgSo8Skib8vDTmgxakHCJQQ9Tv4gsjyEkC1AdzD1jjaq","balance":"0","totalReceived":"0","totalSent":"0","unconfirmedBalance":"0","unconfirmedTxs":0,"txs":0,"tokens":[{"type":"XPUBAddress","name":"LXm14qmSWxM8s2VU4A8WL67TAJVj9dTzed","path":"m/44\'/2\'/0\'/0/0","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LXAQf4dF2rDvxiQigJxibBi6SFGuh23xMp","path":"m/44\'/2\'/0\'/0/1","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LhdLiPy2taQQwoDKiR5zFsTNxr3uyeV5Wv","path":"m/44\'/2\'/0\'/0/2","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LMj34ZjyUNyHV2KPHR79bTStJFgkaSoGK5","path":"m/44\'/2\'/0\'/0/3","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LUjcX7ZgZiuA6Gi34UzK5F4qDaKGdDhGDF","path":"m/44\'/2\'/0\'/0/4","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LeNaURVPksBqAgPY9bfj823Uxt5vZHksY3","path":"m/44\'/2\'/0\'/0/5","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"Lh3PBKFp5E1M5cv8SXpwfwrjVKBEaTuU5A","path":"m/44\'/2\'/0\'/0/6","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"Lb1H3NZfjtfBzR2XB9P2y8cxW9oJUsQk6o","path":"m/44\'/2\'/0\'/0/7","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LegbcuFMjboafwSVqcNbyrGLXSuVoWVRW3","path":"m/44\'/2\'/0\'/0/8","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LREa6DyMbatNSMspjS3wv7SHBFLQw8u11g","path":"m/44\'/2\'/0\'/0/9","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LfqNnzjBSqxtMXWCftWqxWaYZazprWftFV","path":"m/44\'/2\'/0\'/0/10","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LWgXnmah5uHGJaAssfJCU9XLDKooq42rwi","path":"m/44\'/2\'/0\'/0/11","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LQdZ9uvp7wjzTmQCrDL6SVjENJNfhkeH9E","path":"m/44\'/2\'/0\'/0/12","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LS966AcqUbnSHDowjjqSvR5D5Da9H3wkUk","path":"m/44\'/2\'/0\'/0/13","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LhrqDmigoSJUzZkURTL6MDzok7CBaN72BF","path":"m/44\'/2\'/0\'/0/14","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LUwTpijcdUFaYcaFHTQ7RJcjTb5CHxTYjm","path":"m/44\'/2\'/0\'/0/15","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LQHF3DViHK7Ktj1KA7pNKbmG9QZcVD12hx","path":"m/44\'/2\'/0\'/0/16","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LWzyXMLtxmKZHStYn2AoDwaaPDXkBFLFUn","path":"m/44\'/2\'/0\'/0/17","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LPNAVHtiU43sm9U1u1t3nkQ1e1VVXhBXfs","path":"m/44\'/2\'/0\'/0/18","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LaAJjhxiLw37CmHzBjAhc4dZYeVTYTqYgB","path":"m/44\'/2\'/0\'/0/19","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LfrD89EhxdfY7Hq8otyxuaY5MVG16zvUAU","path":"m/44\'/2\'/0\'/0/20","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LLJMWiFYqAwUGTxSiVJ2DyPPGnxiaxZ85c","path":"m/44\'/2\'/0\'/1/0","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LfsH8xLLRJ1r5DoTJRt8PfdqxVTiuSZgsD","path":"m/44\'/2\'/0\'/1/1","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LXi4rcuwQHCmWpWubwJ5FQKgE6cigCeJWy","path":"m/44\'/2\'/0\'/1/2","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"Ldd4D4yYbgKYuWBASUWZxJbTHtwsE9kCcg","path":"m/44\'/2\'/0\'/1/3","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LThoKsBxofNwTesmXa1RsW6wxihgwML9Ye","path":"m/44\'/2\'/0\'/1/4","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LiR3jdHV4iZAqTCr6ZiDeBkcB8gfpB9J56","path":"m/44\'/2\'/0\'/1/5","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LWm5ppFgjgTvSj5Ybkut9tvcYDKDx37amd","path":"m/44\'/2\'/0\'/1/6","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LPsqcnzrDswktQtDkJFL4eT49tnPib5X1R","path":"m/44\'/2\'/0\'/1/7","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LVatwH4tp49S5fAy5KbixmfBjhP3H1zNs1","path":"m/44\'/2\'/0\'/1/8","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LQtUrqArSsW9cHy2QtRgjyzPnMxDrVJ9jS","path":"m/44\'/2\'/0\'/1/9","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LWMxabTSFyLxJXR4r3oc8f4Aup44Amb8tB","path":"m/44\'/2\'/0\'/1/10","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LNRbnFq8ugMwuf6huv8sHbKY6Y9ZWvgbow","path":"m/44\'/2\'/0\'/1/11","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LaqAp18s4CM8m2L9ah8TQsu3UuFsPBFPeY","path":"m/44\'/2\'/0\'/1/12","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LgueUvvL7cWHBjgdDfUH2EXF8KBSGfdx3U","path":"m/44\'/2\'/0\'/1/13","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LfWH5YX8thzzNVsVee85wjSkmMJZ6Qp2ka","path":"m/44\'/2\'/0\'/1/14","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LZA4eeyayg9raifdjxNF9igYoQT3XVmDrH","path":"m/44\'/2\'/0\'/1/15","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LS7QdK292zbWn3kb7dcduj7UywTGJVDVEJ","path":"m/44\'/2\'/0\'/1/16","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LS1yJbFaRTKCvjPEWAbV9wa3PSGHgA5frk","path":"m/44\'/2\'/0\'/1/17","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LWJPV6GCwjUkxPi6QrsgPuvpgCYeAx6vnY","path":"m/44\'/2\'/0\'/1/18","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LSEXAQuzgDWeiD2PwxzLomopzRrw2nThpQ","path":"m/44\'/2\'/0\'/1/19","transfers":0,"decimals":8},{"type":"XPUBAddress","name":"LiE9TNNY1u9t9jBgAQJ6XGNpWhagaTHNjX","path":"m/44\'/2\'/0\'/1/20","transfers":0,"decimals":8}]}';
    },

    getAccountUtxo(params: any) {
        if (
            params.descriptor ===
            'zpub6rDfq4mDgVKjjFz9cqWizJQvJyHKss4NhBzuiSaoJ5k23cCFyU2WQFrZEJPorsZt4soMDJtZBHL3ZyH8HfqkYSo7qzebbHL4QhpSTXUNpAq'
        ) {
            return '[{"txid":"efe11e0d8d562e73b7795c2a3b7e44c6b6390f2c42c3ae90bb1005009c27a3f3","vout":1,"value":"9997490","height":2373435,"confirmations":2,"address":"ltc1q7n0fvt6thqksq4uhggqjq2kd0r2kmdlje4dvjg","path":"m/84\'/2\'/0\'/0/0"}]';
        }
        return '[]';
    },

    getBalanceHistory(params: any) {
        if (
            params.descriptor ===
            'zpub6rDfq4mDgVKjjFz9cqWizJQvJyHKss4NhBzuiSaoJ5k23cCFyU2WQFrZEJPorsZt4soMDJtZBHL3ZyH8HfqkYSo7qzebbHL4QhpSTXUNpAq'
        ) {
            return '[{"time":1669075200,"txs":1,"received":"9997490","sent":"0","sentToSelf":"0","rates":{"aed":225.35,"ars":10011.09,"aud":92.85,"bch":0.59404337,"bdt":6324.12,"bhd":23.13,"bits":3886.15,"bmd":61.35,"bnb":0.24149521,"brl":326.4,"btc":0.00388615,"cad":82.5,"chf":58.81,"clp":57803,"cny":439.61,"czk":1456.76,"dkk":445.39,"dot":11.809052,"eos":72.156,"eth":0.05528858,"eur":59.88,"gbp":51.88,"hkd":478.82,"huf":24496,"idr":965738,"ils":213.23,"inr":5014.22,"jpy":8717.86,"krw":83424,"kwd":18.91,"link":10.436215,"lkr":22558,"ltc":1,"mmk":128901,"mxn":1199.23,"myr":280.93,"ngn":27168,"nok":629.43,"nzd":100.61,"php":3525.01,"pkr":13759.13,"pln":281.48,"rub":3721.65,"sar":230.57,"sats":388615,"sek":656.98,"sgd":84.78,"thb":2226.82,"try":1141.74,"twd":1910.89,"uah":2255.9,"usd":61.35,"vef":6.14,"vnd":1524098,"xag":2.94,"xau":0.03529674,"xdr":45.65,"xlm":724.384,"xrp":167.461,"yfi":0.01008882,"zar":1063.8}}]';
        }
        return '[]';
    },

    subscribeFiatRates() {
        return '{"subscribed":true}';
    },

    subscribeAddresses() {
        return '{"subscribed":true}';
    },

    subscribeNewBlock() {
        return '{"subscribed":true}';
    },

    estimateFee() {
        return '[{"feePerUnit":"999"},{"feePerUnit":"999"},{"feePerUnit":"999"},{"feePerUnit":"999"},{"feePerUnit":"999"},{"feePerUnit":"999"},{"feePerUnit":"999"},{"feePerUnit":"999"},{"feePerUnit":"999"},{"feePerUnit":"999"}]';
    },

    getCurrentFiatRates() {
        return `{"tickers":[{"ts":1669107874,"rates":{"aed":226.9,"ars":10080.68,"aud":93.2,"bch":0.58767478,"bdt":6348.46,"bhd":23.28,"bits":3932.21,"bmd":61.78,"bnb":0.24418555,"brl":328.69,"btc":0.00393221,"cad":82.88,"chf":59.12,"clp":58198,"cny":441.06,"czk":1464.04,"dkk":447.32,"dot":12.304429,"eos":73.249,"eth":0.05685291,"eur":60.14,"gbp":52.2,"hkd":482.73,"huf":24575,"idr":969188,"ils":214.76,"inr":5046.74,"jpy":8753.54,"krw":83609,"kwd":19.04,"link":10.478387,"lkr":22644,"ltc":1,"mmk":129396,"mxn":1207.59,"myr":282.4,"ngn":27265,"nok":630.91,"nzd":100.69,"php":3541.65,"pkr":13819.07,"pln":283.55,"rub":3744.49,"sar":232.19,"sats":393221,"sek":659.81,"sgd":85.23,"thb":2230.53,"try":1150.71,"twd":1924.69,"uah":2264.52,"usd":61.78,"vef":6.19,"vnd":1535355,"xag":2.92,"xau":0.03541315,"xdr":45.96,"xlm":740.181,"xrp":172.622,"yfi":0.01053608,"zar":1069.24}}]}`;
    },

    getFiatRatesForTimestamps() {
        return `{"tickers":[{"ts":1669107874,"rates":{"aed":226.9,"ars":10080.68,"aud":93.2,"bch":0.58767478,"bdt":6348.46,"bhd":23.28,"bits":3932.21,"bmd":61.78,"bnb":0.24418555,"brl":328.69,"btc":0.00393221,"cad":82.88,"chf":59.12,"clp":58198,"cny":441.06,"czk":1464.04,"dkk":447.32,"dot":12.304429,"eos":73.249,"eth":0.05685291,"eur":60.14,"gbp":52.2,"hkd":482.73,"huf":24575,"idr":969188,"ils":214.76,"inr":5046.74,"jpy":8753.54,"krw":83609,"kwd":19.04,"link":10.478387,"lkr":22644,"ltc":1,"mmk":129396,"mxn":1207.59,"myr":282.4,"ngn":27265,"nok":630.91,"nzd":100.69,"php":3541.65,"pkr":13819.07,"pln":283.55,"rub":3744.49,"sar":232.19,"sats":393221,"sek":659.81,"sgd":85.23,"thb":2230.53,"try":1150.71,"twd":1924.69,"uah":2264.52,"usd":61.78,"vef":6.19,"vnd":1535355,"xag":2.92,"xau":0.03541315,"xdr":45.96,"xlm":740.181,"xrp":172.622,"yfi":0.01053608,"zar":1069.24}}]}`;
    },

    getTransaction(params: any) {
        if (params?.txid === 'efe11e0d8d562e73b7795c2a3b7e44c6b6390f2c42c3ae90bb1005009c27a3f3') {
            return '{"txid":"efe11e0d8d562e73b7795c2a3b7e44c6b6390f2c42c3ae90bb1005009c27a3f3","version":2,"vin":[{"txid":"5961c1187b435a42e144a1c609253bca80ac0c55caf576831b6459c77fb690f1","sequence":4294967295,"n":0,"addresses":["ltc1gp6wfe96yxq855dhjjg0eg24yl8y6se62hgcadmh6jdyxfdlljy6slgmvea"],"isAddress":false,"value":"458340830086"}],"vout":[{"value":"458330830086","n":0,"spent":true,"hex":"582066723521c495f90a5fbe3686c617c294d69ac71ed9e57b65032f83e45871fd83","addresses":["ltc1gveer2gwyjhus5ha7x6rvv97zjntf43c7m8jhkegr97p7gkr3lkpsj08e2q"],"isAddress":false},{"value":"9997490","n":1,"hex":"0014f4de962f4bb82d0057974201202acd78d56db7f2","addresses":["ltc1q7n0fvt6thqksq4uhggqjq2kd0r2kmdlje4dvjg"],"isAddress":true}],"blockHash":"98cdd21f13d92ccd23478681d6698aea20a7132d7ca9bec1204e0d25e9355eba","blockHeight":2373435,"confirmations":29,"blockTime":1669107971,"value":"458340827576","valueIn":"458340830086","fees":"2510","hex":"02000000000801f190b67fc759641b8376f5ca550cac80ca3b2509c6a144e1425a437b18c161590000000000ffffffff020675a5b66a00000022582066723521c495f90a5fbe3686c617c294d69ac71ed9e57b65032f83e45871fd83b28c980000000000160014f4de962f4bb82d0057974201202acd78d56db7f20000000000"}';
        }

        // todo: this should always return something
        return '{}';
    },
};
