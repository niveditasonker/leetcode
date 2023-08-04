// O(N)
class NotificationFeed {
    constructor() {
      this.notifications = [];
    }
  
    addNotification(notification) {
      this.notifications.unshift(notification);
    }
  
    dismissNotification() {
      if (this.notifications.length > 0) {
        this.notifications.pop();
      }
    }
  
    moveNotificationToTop(index) {
      if (index >= 0 && index < this.notifications.length) {
        const notification = this.notifications.splice(index, 1)[0];
        this.notifications.unshift(notification);
      }
    }
  
    removeNotification(index) {
      if (index >= 0 && index < this.notifications.length) {
        this.notifications.splice(index, 1);
      }
    }
  
    evict(timeInFeed) {
      const currentTime = Date.now();
      for (let i = this.notifications.length - 1; i >= 0; i--) {
        if (currentTime - this.notifications[i].timestamp > timeInFeed) {
          this.notifications.splice(i, 1);
        }
      }
    }
  
    getCurrentNotification() {
      return this.notifications[this.notifications.length - 1];
    }
}
  

class NotificationFeedO1{
  constructor(){
    this.notifications = [];
    this.notificationsMap = new Map();
  }

  addNotification(notification){
    this.notifications.push(notification);
    // this.notificationsMap.set(this.notifications[this.notifications.length-1], notification); //check if the idx is right
    this.notificationMap.set(notification.id, notification);
  }

  dismissNotification(notification){
    this.notifications.pop();
    this.notificationsMap.delete(notification)
  }

  moveNotificationToTop(id) {
    const notification = this.notificationMap.get(id);
    if (notification) {
      const index = this.notifications.indexOf(notification);
      if (index !== -1) {
        this.notifications.splice(index, 1);
        this.notifications.push(notification);
      }
    }
  }

  removeNotification(id) {
    const notification = this.notificationMap.get(id);
    if (notification) {
      const index = this.notifications.indexOf(notification);
      if (index !== -1) {
        this.notifications.splice(index, 1);
        this.notificationMap.delete(id);
      }
    }
  }

  evict(timeInFeed) {
    const currentTime = Date.now();
    for (let i = this.notifications.length - 1; i >= 0; i--) {
      const notification = this.notifications[i];
      if (currentTime - notification.timestamp > timeInFeed) {
        this.notifications.splice(i, 1);
        this.notificationMap.delete(notification.id);
      }
    }
  }

  getCurrentNotification() {
    if (this.notifications.length > 0) {
      return this.notifications[this.notifications.length - 1];
    }
    return null;
  }
}