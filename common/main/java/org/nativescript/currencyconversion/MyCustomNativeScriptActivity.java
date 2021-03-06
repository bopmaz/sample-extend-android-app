package org.nativescript.currencyconversion;

import android.content.Intent;
import android.os.Bundle;
import com.tns.JavaScriptImplementation;

@JavaScriptImplementation(javaScriptFile = "./MyCustomNativeScriptActivity.js")
public class MyCustomNativeScriptActivity extends android.app.Activity {
    public MyCustomNativeScriptActivity(){
        com.tns.Runtime.initInstance(this);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        com.tns.Runtime.callJSMethod(this, "onCreate", void.class, new Object[]{savedInstanceState});
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        com.tns.Runtime.callJSMethod(this, "onSaveInstanceState", void.class, new Object[]{outState});
    }

    @Override
    protected void onStart() {
        com.tns.Runtime.callJSMethod(this, "onStart", void.class, null);
    }

    @Override
    protected void onStop() {
        com.tns.Runtime.callJSMethod(this, "onStop", void.class, null);
    }

    @Override
    protected void onDestroy() {
        com.tns.Runtime.callJSMethod(this, "onDestroy", void.class, null);
    }

    @Override
    public void onBackPressed() {
        com.tns.Runtime.callJSMethod(this, "onBackPressed", void.class, null);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        com.tns.Runtime.callJSMethod(this, "onRequestPermissionsResult", void.class, new Object[]{requestCode, permissions, grantResults});
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        com.tns.Runtime.callJSMethod(this, "onActivityResult", void.class, new Object[]{requestCode, resultCode, data});
    }
}
