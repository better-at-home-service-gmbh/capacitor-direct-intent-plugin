package com.behome.android.intents;

import android.content.ComponentName;
import android.content.Intent;
import android.net.Uri;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.Iterator;


@CapacitorPlugin(name = "Intents")
public class IntentsPlugin extends Plugin {

    private Intents implementation = new Intents();


    @PluginMethod
    public void sendIntent(PluginCall call) {
        String actionToUse = call.getString("action"); // action String
        JSObject extras = call.getObject("extra"); // Object with data
        JSObject data = call.getObject("data"); // Object with data (ex. Sip number)
        Boolean isDirect = call.getBoolean("isDirect"); // true if direct intent, false if broadcast
        JSObject component = call.getObject("component"); // Object containing pkg and class for direct intent
        Intent intended = new Intent(actionToUse);
        Iterator<String> extraKeys = extras.keys();
        Iterator<String> dataKeys = data.keys();

        while (extraKeys.hasNext()) { // iterate through all extras and add them to the intent
            String key = extraKeys.next();
            String value = extras.getString(key);

            intended.putExtra(key, value);
        }

        while (dataKeys.hasNext()) { // iterate through all data and add them to the intent
            String key = dataKeys.next();
            String value = data.getString(key);

            intended.setData(Uri.parse(key + ":" + value));
        }
        if (!isDirect) {
            this.getContext().sendBroadcast(intended); // send system wide broadcast-intent
        } else { // send direct intent to pkg and class
            intended.setComponent(new ComponentName(component.getString("pkg"), component.getString("cls")));
            this.getContext().startActivity(intended);
        }
        call.resolve();
    }

    @PluginMethod
    public void checkSendIntentReceived(PluginCall call) {
        Intent intent = bridge.getActivity().getIntent();
        String action = intent.getAction();
        String type = intent.getType();
        String data = intent.getDataString();

        JSObject l = new JSObject();

        l.put("title", "Timer");
        l.put("description", "nah Id win");
        l.put("data", data);

        call.resolve(l);     
    }

    @PluginMethod
    public void finish(PluginCall call) {
        bridge.getActivity().finish();
    }
}
