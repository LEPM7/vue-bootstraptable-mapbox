import mapboxgl from 'mapbox-gl';
let map;
export default {
  name: 'app',
  data: () => ({
    client: {
      "_id": "9467e17e25ae0b28ab21daafaed054c4",
      "_rev": "681-6d73da06be97332a184e8ea105d206df",
      "|doctype": "client",
      "|location": "gtm-pet",
      "#community": "4389192fc1c887d0acbf7233207e88c2",
      "name": "Oscar",
      "surname": "Ico Choc",
      "id_1": "3288927771608",
      "sex": "M",
      "telephone": "50078137",
      "gps_latitude": 15.465941600000000733,
      "gps_longitude": -89.896152299999997126,
      "gps_altitude": "957.5",
      "gps_accuracy": 32.100000000000001421,
      "gps_alt_accuracy": 0,
      "|edited_by": "oscar.fabian@kingoenergy.com",
      "|edited_on": "2019-03-20T21:18:50.821Z",
      "|server_000": {
        "dirty": false,
        "installs": "9467e17e25ae0b28ab21daafaed05777,31179b8e191d37084ca9ed5e6d10b3e7",
        "kingos": "gtm-pet:kingo:1101919",
        "phones": "",
        "communities": "4389192fc1c887d0acbf7233207e88c2",
        "owner": "gerson.coc.kingo@gmail.com",
        "dirty_calc": true,
        "community_groups": "service-44146,advisor-91211",
        "client": true,
        "active_client": true,
        "active_shopkeeper": false,
        "shopkeeper": false,
        "community": "BENIMA VOLCAN",
        "municipality": "SENAHU",
        "department": "ALTA VERAPAZ",
        "opened": "2017-08-30",
        "closed": "",
        "models": "Kingo 15",
        "last_code": "2019-01-07",
        "last_five_codes": "wwddd",
        "average_purchase": 4.986301369863014088,
        "pos": "gtm-pet:pos:909593",
        "updated": "2019-01-14",
        "urate": 0.45860000000000000764,
        "urate30": 0.40910000000000001918,
        "urate90": 0.47810000000000002496,
        "urateInstall": 0.83640000000000003233,
        "unbiased_urate": 0.45860000000000000764,
        "unbiased_urate30": 0.40910000000000001918,
        "unbiased_urate90": 0.47810000000000002496,
        "days_not_bought": 1,
        "kingo_installs": {
          "Kingo 15": [
            "2017-08-30"
          ]
        },
        "kingo_swaps": {},
        "kingo_pickups": {},
        "etag": "\"d142-+l1E2mgMIYbNtqhLW68R77HYNjs\"",
        "client_auto_groups": "auto-active-active,auto-urate-total-2,auto-urate-90-2,auto-urate-30-2,auto-urate-install-4,auto-unused-4,auto-unused-codes,auto-kingo-15,auto-opened-2017,auto-opened-2017-08,auto-opened-2017-q3,auto-opened-2017-h2"
      },
      "media": {
        "2017-08-30-kingo": "9467e17e25ae0b28ab21daafaed054c4/2017-08-30-kingo.jpeg",
        "2017-08-30-house": "9467e17e25ae0b28ab21daafaed054c4/2017-08-30-house.jpeg",
        "2017-08-30-id2": "9467e17e25ae0b28ab21daafaed054c4/2017-08-30-id2.jpeg",
        "2017-08-30-id1": "9467e17e25ae0b28ab21daafaed054c4/2017-08-30-id1.jpeg",
        "2017-08-30-contract2": "9467e17e25ae0b28ab21daafaed054c4/2017-08-30-contract2.jpeg",
        "2017-08-30-contract": "9467e17e25ae0b28ab21daafaed054c4/2017-08-30-contract.jpeg",
        "2019-03-16-house": "9467e17e25ae0b28ab21daafaed054c4/2019-03-16-house.jpeg",
        "2019-03-16-kingo": "9467e17e25ae0b28ab21daafaed054c4/2019-03-16-kingo.jpeg",
        "2019-03-16-id2": "9467e17e25ae0b28ab21daafaed054c4/2019-03-16-id2.jpeg",
        "2019-03-16-id1": "9467e17e25ae0b28ab21daafaed054c4/2019-03-16-id1.jpeg",
        "2019-03-16-contract2": "9467e17e25ae0b28ab21daafaed054c4/2019-03-16-contract2.jpeg",
        "2019-03-16-contract": "9467e17e25ae0b28ab21daafaed054c4/2019-03-16-contract.jpeg"
      },
      "|server_001": {
        "kingo_pickups": {}
      },
      "address": "",
      "_attachments": {
        "server_000": {
          "content_type": "application/json",
          "revpos": 660,
          "digest": "md5-MKvm0Os7jqXYIDQP7ClpEA==",
          "length": 53570,
          "stub": true
        }
      }
    },
    newClient: {
      "_id": "gtm-pet-m910680-clientInfo-jukcedjx",
      "_rev": "1-c326a0380b10ba71f19e4fbaeaedcfa1",
      "datetime": "2019-04-16T22:12:17.565Z",
      "#task": "8c027418-fb6b-49b1-883d-d117fea26dcc",
      "#system": 203408,
      "user": "luis.peralta@kingoenergy.com",
      "role": null,
      "|doctype": "client-data",
      "|location": "gtm-pet",
      "gps": {
        "customer": {
          "lat": "14.619402400000",
          "lng": "-90.514708600000",
          "alt": "1504.7",
          "gpsAccuracy": "17.100",
          "altAccuracy": "0.00",
          "manual": false,
          "datetime": "2019-04-16T22:12:01.059Z",
          "source": "network",
          "|schema_version": "1.0.0"
        }
      },
      "phone": "36251478",
      "location": {
        "al2": {
          "code": "lib",
          "name": "La Libertad"
        },
        "al1": {
          "code": "pet",
          "name": "Petén"
        },
        "community_name": "Aldea punta rieles 2"
      },
      "_attachments": {
        "kingo": {
          "content_type": "image/jpeg",
          "revpos": 1,
          "digest": "md5-2aPo6+HWPc+97MGAxSaw0A==",
          "length": 22206,
          "stub": true
        }
      }
    },
    fields: ['type', 'old', 'new', 'accepted'],
    items: []
  }),
  mounted() {
    let arr = [];
    let newClient = this.newClient;
    //community
    // ? que pasa con el ID de la comunidad
    if (newClient.location) {
      let communityObject = {
        type: 'community',
        accepted: false ,
        'old' : {
          community: 'C',
          area_level_1: 'D',
          area_level_2: 'M',
        }
      };
      if (newClient.location.al2 && newClient.location.al1 && newClient.location.community_name) {

      }
      if ( newClient.location.community_name) {

      }
    }

    this.items =  [
      {
        'type': 'community',
        'accepted': false,
        'old': {
          community: 'C',
          area_level_1: 'D',
          area_level_2: 'M',
        },
        'new': {
          community: 'Cn',
          area_level_1: 'Dn',
          area_level_2: 'Mn',
        }
      },
      {
        'type': 'phone',
        'accepted': false,
        'valid': true,
        'old': {
          phone: '1234567890',
        },
        'new': {
          phone: '0987654321',
        }
      },
      {
        'type': 'GPS',
        'accepted': false,
        'valid': false,
        'old': {
          "latitude": 15.465941600000000733,
          "longitude": -89.896152299999997126,
          "altitude": "957.5",
          "accuracy": 32.100000000000001421,
          "alt_accuracy": 0,
        },
        'new': {
          "latitude": 15.465941600000000733,
          "longitude": -89.896152299999997126,
          "altitude": "957.5",
          "accuracy": 32.100000000000001421,
          "alt_accuracy": 0,
        }
      }
    ];
    Map();
    new mapboxgl.Marker({color:'red'})
      .setLngLat([-89.896152299999997126, 15.465941600000000733])
      .addTo(map);
    new mapboxgl.Marker({color:'blue'})
      .setLngLat([-89.94784740685245, 15.465941600000000])
      .addTo(map);
  }
}

function Map() {

  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
    zoom: 7.5,
    center: [-89.94784740685245, 16.828651102774828]
  });
}