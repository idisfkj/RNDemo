package com.rnhello;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;

import com.facebook.react.*;
import com.facebook.react.BuildConfig;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

/**
 * Created by idisfkj on 16/8/17.
 * Email : idisfkj@qq.com.
 */
public class MyReactActivity extends Activity implements DefaultHardwareBackBtnHandler{
    private ReactInstanceManager manager;
    private ReactRootView rootView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        rootView = new ReactRootView(this);
        manager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.BEFORE_CREATE)
                .build();
        rootView.startReactApplication(manager,"RNHello",null);

        Log.d("TAG","run MyReactActivity");
        setContentView(rootView);
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (manager != null){
            manager.onHostPause();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (manager != null){
            manager.onHostResume(this,this);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (manager != null){
            manager.onHostDestroy();
        }
    }

    @Override
    public void onBackPressed() {
        if (manager != null){
            manager.onBackPressed();
        }else {
            super.onBackPressed();
        }
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (manager != null && keyCode == KeyEvent.KEYCODE_MENU){
            manager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }
}
