import * as Moment from 'moment';
export interface ActionGetAccountType {
    type: string;
    payload: {
        name: string;
    };
}

export interface StateAdminType {
    accountInfoList: {
        [propsName: string]: StateAccountInfoType
    };
    bookAddressList: StateBookAddress[];
    bookList: {
        selling: BookListType;
        sold: BookListType;
    };
    sellerList: SellerItem[];
}

export interface ActionChargeRequestType {
    type: string;
    payload: {
      userId: string;
      amount: number;
      name: string;
    };
}

export interface ActionBookAddress {
    type: string;
    payload: {
      isbn: string;
      time: [Moment.Moment, Moment.Moment]
    };
}

export interface StateBookAddress {
    actual_price: number;
    book_id: string;
    book_name: string;
    created_at: string;
    deliveried_quantity: number;
    discount: number;
    isbn: string;
    order_id: string;
    order_quantity: number;
    origin_price: number;
    supplier_id: string;
    supplier_name: string;
    user_id: number;
    address: string;
    consignee: string;
    post_code: string;
    phone: string;
}

export interface BookAddressPayloadType {
    isbn: string;
    time: [Moment.Moment, Moment.Moment];
}

export interface ActionRequestConfirmType {
    type: string;
    payload: string;
}

export interface ActionChangeDeliverdCountType {
    type: string;
    payload: {
        userId: string;
        orderId: string;
        quantity: number;
        requestParams: BookAddressPayloadType;
    };
}

export interface BookListRequestParam {
    fromDate: string;
    toDate: string;
    nickname?: string;
    orderId?: string;
    status: ActionOrderStatus;
}

export interface ActionBookListRequestType {
    type: string;
    payload: BookListRequestParam;
}

export interface SellerItem {
    user_id: string;
    nickname: string;
}

export interface ResetPassword {
    username: string;
    password: string;
}

export interface ResetPasswordAction {
    type: string;
    payload: ResetPassword;
}

export interface ConfirmSentParamType {
    nickname: string;
    time: [Moment.Moment, Moment.Moment];
}

export interface ConfirmSentParamAction {
    type: string;
    payload: {
        order_id: string;
        requestParams: ConfirmSentParamType
    };
}