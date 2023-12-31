"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSubscriber = void 0;
const typeorm_1 = require("typeorm");
const post_entity_1 = require("./post.entity");
const uuid_1 = require("uuid");
let PostSubscriber = class PostSubscriber {
    listenTo() {
        return post_entity_1.Post;
    }
    beforeInsert(event) {
        if (!event.entity.uuid) {
            event.entity.uuid = (0, uuid_1.v4)();
        }
    }
    beforeUpdate(event) {
        event.entity.updatedAt = new Date();
    }
};
PostSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)()
], PostSubscriber);
exports.PostSubscriber = PostSubscriber;
//# sourceMappingURL=post.subscriber.js.map