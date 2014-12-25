(function(){

	$(document).ready(function(){
		var camera = $('#eg-cam')[0];
		
		livestream();

		function livestream() {
			navigator.getUserMedia =
				navigator.getUserMedia ||
				navigator.webkitGetUserMedia ||
				navigator.mozGetUserVIdeo ||
				navigator.msGetUserMedia;

			if (navigator.getUserMedia) {
				navigator.getUserMedia(
					{video:true,audio:true},
					gumController,
					userMediaErrorController
				);
			} else {
				userMediaErrorController();
			}
		}

		function gumController(userMediaStream){
			window.URL =
				window.URL ||
				window.webkitURL ||
				window.mozURL ||
				window.msURL;
			camera.src = window.URL.createObjectURL(userMediaStream);
			camera.onloadedmetadata = function() {
				camera.play();
			}
		}

		function userMediaErrorController() {
			alert(JSON.stringify(arguments.length>0?arguments:{error:"no user media"}));
			throw new Error(arguments);
		}
	});

}());

$EgChatsDirective.$inject = [];
function $EgChatsDirective() {
	return {
		restrict: 'C',
		replace: false,
		transclude: false,
		scope: false,
		link: function link(scope,element,attributes) {
			scope.$watch(function(){
				angular.element(element).scrollTop(angular.element(element).prop('scrollHeight'));
			});
		}
	};
}

$ChatRoomController.$inject = ['$scope','ChatRoom'];
function $ChatRoomController($scope,ChatRoom) {
	$scope.chatroom = new ChatRoom('Chat');
	setInterval(function(){
		$scope.chatroom.chats.push({
			user: {
				name: 'Autobot Chatter',
				thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+',
				chat: {
					time: new Date().toString().match(/([0-9]{2}:?){3}/g)[0],
					payload: btoa(Math.random()%Math.floor(Math.random()*999)) + '' + btoa(Math.random()) + '' + btoa(Math.random()) + btoa(Math.random()%Math.floor(Math.random()*999)) + '' + btoa(Math.random()) + '' + btoa(Math.random()) + btoa(Math.random()%Math.floor(Math.random()*999)) + '' + btoa(Math.random()) + '' + btoa(Math.random()) + btoa(Math.random()%Math.floor(Math.random()*999)) + '' + btoa(Math.random()) + '' + btoa(Math.random())
				}
			}
		});
		$scope.$apply();
	},9000);
	setInterval(function(){
		$scope.chatroom.chats.push({
			user: {
				name: 'Autobot Chatter',
				thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+',
				chat: {
					time: new Date().toString().match(/([0-9]{2}:?){3}/g)[0],
					payload: btoa(Math.random()%Math.floor(Math.random()*999)) + '' + btoa(Math.random()) + '' + btoa(Math.random()) + btoa(Math.random()%Math.floor(Math.random()*999)) + '' + btoa(Math.random()) + '' + btoa(Math.random())
				}
			}
		});
		$scope.$apply();
	},5000);
	setInterval(function(){
		$scope.chatroom.chats.push({
			user: {
				name: 'Autobot Chatter',
				thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+',
				chat: {
					time: new Date().toString().match(/([0-9]{2}:?){3}/g)[0],
					payload: btoa(Math.random()%Math.floor(Math.random()*999)) + '' + btoa(Math.random()) + '' + btoa(Math.random())
				}
			}
		});
		$scope.$apply();
	},2000);
}

angular.module('app',['ngAnimate','egChatRoom'])
	.directive('egChats',$EgChatsDirective)
	.controller('ChatRoomController',$ChatRoomController);

$ChatRoomFactory.$inject = ['socket'];
function $ChatRoomFactory(socket) {
	var ChatRoom = function chatRoom(name) {
		this.name = name;
		this.chats = [{
			user: {
				name: 'Curtis Jackson',
				thumbnail: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+',
				chat: {
					time: new Date().toString().match(/([0-9]{2}:?){3}/g)[0],
					payload: "I really enjoy using this application, it is much great. It i222s also very algo1rithm. And am wow."
				}
			}
		}];
		this.user = {
			name: 'Guest User',
			thumbnail: 'data:image/png;base64,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',
			chat: {
				payload: 'I say therefore I can has.'
			}
		};
	};
	ChatRoom.prototype.chat = function() {
		this.chats.push({
			user: {
				name: this.user.name,
				thumbnail: this.user.thumbnail,
				chat: {
					time: new Date().toString().match(/([0-9]{2}:?){3}/g)[0],
					payload: this.user.chat.payload
				}
			}
		});
	}
	return ChatRoom;
}

angular.module('egChatRoom',['egSocket'])
	.factory('ChatRoom',$ChatRoomFactory);

$SocketFactory.$inject = ['$rootScope'];
function $SocketFactory($rootScope) {
	var socket = io.connect();
	var SocketFactory = {
		on: function on(eventName,callback) {
			socket.on(eventName,function(){
				var args = arguments;
				// This tells AngularJS that it needs to 
				// check the state of the application and 
				// update the templates if there was a 
				// change after running the callback passed to it.
				$rootScope.$apply(function(){
					callback.apply(socket,args);
				});
			});
		},
		emit: function emit(eventName,data,callback) {
			socket.emit(eventName,data,function(){
				var args = arguments;
				$rootScope.$apply(function(){
					if (callback) {
						callback.apply(socket,args);
					}
				});
			});
		}
	};
	return SocketFactory;
}

angular.module('egSocket',[])
	.factory('socket',$SocketFactory);