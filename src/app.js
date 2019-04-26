import mapboxgl from 'mapbox-gl';
import Vue from 'vue';
import config from './config.json';
import AWS from 'aws-sdk';
import async from 'async';

AWS.config.update({
  accessKeyId: config.aws.aws_access_key_id,
  secretAccessKey: config.aws.aws_secret_access_key
});

AWS.config.region = config.aws.aws_region;
// https://www.publicdomainpictures.net/pictures/20000/nahled/funny-cat-871298226790TvQ.jpg

let map;

export default {
  name: 'app',
  data: () => ({
    client: {
      "_id": "000081698abba8abdd7318d32a388204",
      "_rev": "2841-a5e7e7f3ceba392995fe2bf2bf5314f8",
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
        "opened": "2016-11-08",
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
            "2016-11-08"
          ]
        },
        "kingo_swaps": {},
        "kingo_pickups": {},
        "etag": "\"d142-+l1E2mgMIYbNtqhLW68R77HYNjs\"",
        "client_auto_groups": "auto-active-active,auto-urate-total-2,auto-urate-90-2,auto-urate-30-2,auto-urate-install-4,auto-unused-4,auto-unused-codes,auto-kingo-15,auto-opened-2017,auto-opened-2017-08,auto-opened-2017-q3,auto-opened-2017-h2"
      },
      "media": {
        "2016-11-08-kingo": "000081698abba8abdd7318d32a388204/2016-11-08-kingo.jpeg",
        "2016-11-08-house": "000081698abba8abdd7318d32a388204/2016-11-08-house.jpeg",
        "2016-11-08-id2": "000081698abba8abdd7318d32a388204/2016-11-08-id2.jpeg",
        "2016-11-08-id1": "000081698abba8abdd7318d32a388204/2016-11-08-id1.jpeg",
        "2016-11-08-contract2": "000081698abba8abdd7318d32a388204/2016-11-08-contract2.jpeg",
        "2016-11-08-contract": "000081698abba8abdd7318d32a388204/2016-11-08-contract.jpeg",
        "2019-03-16-house": "000081698abba8abdd7318d32a388204/2019-03-16-house.jpeg",
        "2019-03-16-kingo": "000081698abba8abdd7318d32a388204/2019-03-16-kingo.jpeg",
        "2019-03-16-id2": "000081698abba8abdd7318d32a388204/2019-03-16-id2.jpeg",
        "2019-03-16-id1": "000081698abba8abdd7318d32a388204/2019-03-16-id1.jpeg",
        "2019-03-16-contract2": "000081698abba8abdd7318d32a388204/2019-03-16-contract2.jpeg",
        "2019-03-16-contract": "000081698abba8abdd7318d32a388204/2019-03-16-contract.jpeg"
      },
      "|server_001": {
        "kingo_pickups": {}
      },
      "address": "",
      "_attachments": {
        "server_000": {
          "follows": true,
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
      "media": {
        "2019-03-16-house": "000081698abba8abdd7318d32a388204/2019-03-16-house.jpeg",
        "2019-03-16-kingo": "000081698abba8abdd7318d32a388204/2019-03-16-kingo.jpeg",
        "2019-03-16-contract": "000081698abba8abdd7318d32a388204/2019-03-16-contract.jpeg"
      },
      "_attachments": {
        "kingo": {
          "follows": true,
          "content_type": "image/jpeg",
          "revpos": 1,
          "digest": "md5-2aPo6+HWPc+97MGAxSaw0A==",
          "length": 22206,
          "stub": true
        }
      }
    },
    community: {
      "_id": "4389192fc1c887d0acbf7233207e88c2",
      "_rev": "3433-3f68f49b847a246b4db07dcd9c5cd031",
      "|doctype": "community",
      "|location": "gtm-pet",
      "community": "BENIMA VOLCAN",
      "municipality": "SENAHU",
      "department": "ALTA VERAPAZ",
      "population": "120",
      "no_light": "95",
      "gps_latitude": "15.4659",
      "gps_longitude": "-89.8967",
      "gps_altitude": "",
      "gps_accuracy": "",
      "gps_alt_accuracy": "",
      "leader": "",
      "leader_telephone": "",
      "teacher": "",
      "teacher_telephone": "",
      "other": "",
      "other_telephone": "",
      "|edited_by": "root_gt",
      "|edited_on": "2017-08-31T18:43:45.525Z",
      "|server_000": {
        "dirty": false,
        "dirty_calc": false,
        "active_community": true,
        "opened": "2016-05-31",
        "closed": "",
        "pos": "gtm-pet:pos:912142",
        "updated": "2019-03-24",
        "clients": 93,
        "kingos": {
          "Kingo - Basico": 8,
          "Kingo - Luz": 32,
          "Kingo - TV": 1,
          "Kingo 15": 62,
          "Kingo Basico": 4,
          "Kingo Shopkeeper": 3,
          "Kingo TV": 12
        },
        "urateInstall": 0.9361,
        "urate": 0.6067,
        "urate90": 0.5688,
        "urate30": 0.5048,
        "urateInstall_clients": {
          "1": 3,
          "2": 1,
          "3": 14,
          "4": 75,
          "x": 0
        },
        "urate_clients": {
          "1": 14,
          "2": 23,
          "3": 22,
          "4": 34,
          "x": 0
        },
        "urate90_clients": {
          "1": 24,
          "2": 15,
          "3": 16,
          "4": 38,
          "x": 0
        },
        "urate30_clients": {
          "1": 31,
          "2": 14,
          "3": 13,
          "4": 35,
          "x": 0
        },
        "unused_clients": {
          "1": 26,
          "2": 5,
          "3": 8,
          "4": 54,
          "x": 0
        },
        "owner": "at.jaime.coc@energysupport.gt",
        "community_groups": "service-44146,advisor-91211"
      },
      "|server_001": {},
      "#parent": "a2e2dc4809aa97df1206505f30bcff29",
      "_attachments": {
        "server_000": {
          "content_type": "application/json",
          "revpos": 3432,
          "digest": "md5-mvyzVRFrG1rWAclQXGGDVw==",
          "length": 99213,
          "stub": true
        }
      }
    },
    fields: ['type', 'old', 'new', 'accepted'],
    items: [],
    mediaItems: [],
    modalImageUrl: '',
    clientCommunities: {
      options: [],
      selectedCommunity: '',
      selectedAl1: '',
      selectedAl2: '',
    }
  }),
  methods: {
    save() {
      let data = {};
      let _attachments = [];
      this.items
        .filter((v) => v.accepted)
        .forEach((v) => {
          switch (v.type) {
            case 'GPS':
              data = {
                ...data, ...({
                  "gps_latitude": Number(v.new.latitude),
                  "gps_longitude": Number(v.new.longitude),
                  "gps_altitude": Number(v.new.altitude),
                  "gps_accuracy": Number(v.new.accuracy),
                  "gps_alt_accuracy": Number(v.new.alt_accuracy),
                })
              };
              break;
            case 'phone':
              data = {...data, telephone: v.new.phone};
              break;
            case 'community':
              if (this.newClient.location
                && this.clientCommunities.selectedCommunity === '' ) {
                //error message -> selected community
              } else {
                data = {...data, "#community": this.clientCommunities.selectedCommunity.community_id}
              }
              break;
          }
        });
      // image items
      this.mediaItems
        .filter((v) => v.accepted)
        .forEach((v) => {
          v.new.forEach((mediaObj) => {
            for (let mk in mediaObj) {
              if(typeof mediaObj[mk] === 'object') {
                _attachments.push(mk);
              } else if (typeof mediaObj[mk] === 'string'){
                if (!data.media) data.media = {...this.client.media};
                data.media[mk] = mediaObj[mk];
              }
            }
          });
        });
      //save in db
      let username = config.couchbase.username;
      let password = config.couchbase.password;
      let url = config.couchbase.endpoints.updateCustomer + this.client._id;
      this.saveAttachments(_attachments).then(() =>{
        Vue.axios({
          method: 'put',
          url,
          auth: {
            username,
            password,
          },
          data,
          dataType: 'json',
          contentType: 'application/json',
        }).then((r) => console.log(r))
          .catch((err) => console.error(err));
      });

    },
    createMedia(mediaObject = {}, attachmentObject = {}) {
      let mediaItems = {};
      Object.keys(mediaObject).forEach(mediaKey => {
        let normalizeKey = mediaKey.substring(11);
        if (!mediaItems[normalizeKey]) mediaItems[normalizeKey] = [];
        let objectToShow = {};
        objectToShow[mediaKey] = mediaObject[mediaKey];
        mediaItems[normalizeKey].push(objectToShow);
      });
      Object.keys(attachmentObject)
        .filter(v => attachmentObject[v].content_type === 'image/jpeg')
        .forEach(attachment => {
          if (!mediaItems[attachment]) mediaItems[attachment] = [];
          let objectToShow = {};
          objectToShow[attachment] = attachmentObject[attachment];
          mediaItems[attachment].push(objectToShow);
        });
      return mediaItems;
    },
    openModal(url) {
      this.modalImageUrl = 'https://www.publicdomainpictures.net/pictures/20000/nahled/funny-cat-871298226790TvQ.jpg';
      this.$refs['image-modal'].show();
    },
    saveAttachments(attachments) {
      return new Promise(((resolve, reject) => {
        async.eachSeries(attachments,  (attachment, cb) => {
            let getUrl = `${config.couchbase.endpoints.maindb}${this.newClient._id}/${attachment}`;
            let xhrGET = new XMLHttpRequest();
            xhrGET.open('GET', getUrl, true);
            xhrGET.responseType = 'blob';
            xhrGET.withCredentials = true;
            xhrGET.onload =  (_) => {
              let blob = xhrGET.response;
              if (blob) {
                let putUrl =
                  `${config.couchbase.endpoints.maindb}${this.client._id}/${(new Date()).toJSON().split('T')[0]}-${attachment}?rev=${this.client._rev}`;
                let xhrPUT = new XMLHttpRequest();
                xhrPUT.open('PUT', putUrl, true);
                xhrPUT.withCredentials = true;
                xhrPUT.onload = (_) =>{
                  cb();
                };
                xhrPUT.send(blob);
              }
            };
            xhrGET.send(null);
          },
          (error) => {
            if (error) {
              console.log(error);
              reject()
            } else {
              resolve();
            }
          });
      }))
    }
  },
  mounted() {
    //text and gps items
    let arr = [];
    let newClient = this.newClient;
    if (newClient.location) {
      Vue.axios({
        method: 'get',
        url: `http://localhost:3001/v1/communities/lookup?al1=${newClient.location.al1.name}&al2=${newClient.location.al2.name}&community_name=${newClient.location.community_name}`
      }).then((r)=> {
        console.log(r);
        this.clientCommunities.options = r.data.body;
      })
        .catch((e) => console.error(e));
      let communityObject = {
        type: 'community',
        accepted: false,
        old: {
          community: this.community.community,
          area_level_1: this.community.department,
          area_level_2: this.community.municipality,
        }
      };
      arr.push(Object.assign(communityObject, {
        new: {
          community: newClient.location.community_name,
          area_level_1: newClient.location.al1 ? newClient.location.al1.name : communityObject.old.area_level_1,
          area_level_2: newClient.location.al2 ? newClient.location.al2.name : communityObject.old.area_level_2,
        }
      }));
    }
    if (newClient.phone) {
      arr.push({
        type: 'phone',
        accepted: false,
        old: {
          phone: this.client.telephone
        },
        new: {
          phone: newClient.phone
        }
      });
    }
    Map();
    new mapboxgl.Marker({color: 'red'})
      .setLngLat([Number(this.client.gps_longitude), Number(this.client.gps_latitude)])
      .addTo(map);
    map.flyTo({center: [Number(this.client.gps_longitude), Number(this.client.gps_latitude)]})
    if (newClient.gps.customer) {
      arr.push({
        type: 'GPS',
        accepted: false,
        old: {
          latitude: this.client.gps_latitude,
          longitude: this.client.gps_longitude,
          altitude: this.client.gps_altitude,
          accuracy: this.client.gps_accuracy,
          alt_accuracy: this.client.gps_alt_accuracy,
        },
        new: {
          latitude: newClient.gps.customer.lat,
          longitude: newClient.gps.customer.lng,
          altitude: newClient.gps.customer.alt,
          accuracy: newClient.gps.customer.gpsAccuracy,
          alt_accuracy: newClient.gps.customer.altAccuracy,
        }
      });
      new mapboxgl.Marker({color: 'blue'})
        .setLngLat([Number(newClient.gps.customer.lng), Number(newClient.gps.customer.lat)])
        .addTo(map);
    }
    this.items = arr;
    // mediaItems
    let mediaArr = [];
    let existentMedia = this.createMedia(this.client.media, this.client._attachments);
    let newClientMedia = this.createMedia(newClient.media, newClient._attachments);
    for (let media in newClientMedia) {
      mediaArr.push({
        type: media,
        accepted: false,
        old: existentMedia[media],
        new: newClientMedia[media]
      });
    }
    this.mediaItems = mediaArr;
  },
}

function Map() {
  mapboxgl.accessToken = config.mapbox.accessToken;
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
    zoom: 8.5,
    center: [-89.94784740685245, 16.828651102774828]
  });
}