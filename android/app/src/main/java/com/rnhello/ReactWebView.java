package com.rnhello;

import android.webkit.WebView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by idisfkj on 16/8/18.
 * Email : idisfkj@qq.com.
 */
public class ReactWebView extends SimpleViewManager<WebView>{
    public static final String REACT_CLASS = "RCTWebView";

    //getName方法返回的名字会用于在JavaScript端引用这个原生视图类型
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    //创建视图,所有属性的设置都通过后续的updateView来进行。
    @Override
    protected WebView createViewInstance(ThemedReactContext reactContext) {
        return new WebView(reactContext);
    }

    @Override
    public void updateExtraData(WebView root, Object extraData) {
        super.updateExtraData(root, extraData);
    }
}
