<?xml version="1.0" encoding="utf-8"?>
<android.support.constraint.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Thong Tin Dang Nhap"
        android:textColor="#3F51B5"
        android:textSize="20dp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintVertical_bias="0.053" />

    <EditText
        android:id="@+id/edtemail"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="104dp"
        android:ems="10"
        android:hint="Email"
        android:inputType="textPersonName"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.497"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/textView"
        tools:ignore="MissingConstraints" />

    <EditText
        android:id="@+id/edtpass"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="108dp"
        android:ems="10"
        android:hint="Password"
        android:inputType="textPersonName"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.497"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/edtemail"
        tools:ignore="MissingConstraints" />

    <Button
        android:id="@+id/btndangnhap"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="84dp"
        android:layout_marginTop="156dp"
        android:background="#E91E63"
        android:text="Dang Nhap"
        android:textColor="#FFEB3B"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/edtpass"
        tools:ignore="MissingConstraints" />

    <Button
        android:id="@+id/btndangky"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="156dp"
        android:layout_marginEnd="88dp"
        android:text="Dang Ky"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/edtpass"
        tools:ignore="MissingConstraints" />

</android.support.constraint.ConstraintLayout>
////////////////////////////main///////////////////////////
package com.example.login;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    EditText edtemail,edtpass;
    Button btndangnhap;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        edtemail=findViewById(R.id.edtemail);
        edtpass=findViewById(R.id.edtpass);
        btndangnhap=findViewById(R.id.btndangnhap);
        btndangnhap.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if(edtemail.getText().toString().equals("Admin")&&edtpass.getText().toString().equals("admin")){
                    Intent intent=new Intent(MainActivity.this,MainActivity2.class);
                    startActivity(intent);
                }
                else {
                    Toast.makeText(MainActivity.this, "Vui long Nhap lai", Toast.LENGTH_SHORT).show();

                }
            }

        });
    }
}
//////////////////chon/////////////////////////
<?xml version="1.0" encoding="utf-8"?>
<android.support.constraint.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity2">
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical"
        android:background="@color/white">

        <TextView
            android:id="@+id/textView"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="ĐĂNG KÝ MÔN HỌC"
            android:textSize="30dp"
            android:layout_marginLeft="60dp"/>


        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal">

        </LinearLayout>
        <TextView
            android:id="@+id/textView6"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="Mon hoc"
            android:textSize="20dp"
            android:layout_marginLeft="5dp"/>
        <CheckBox
            android:id="@+id/cbj"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="Java" />

        <CheckBox
            android:id="@+id/cbc"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="C#" />
        <CheckBox
            android:id="@+id/cban"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="Androi" />


        <TextView
            android:id="@+id/textView2"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginLeft="5dp"
            android:text="Gioi tinh"
            android:textSize="20dp" />

        <RadioGroup
            android:id="@+id/radioGroup"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal">

            <RadioButton
                android:id="@+id/rnam"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Nam" />

            <RadioButton
                android:id="@+id/rnu"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginLeft="20dp"
                android:text="Nu" />
        </RadioGroup>

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:gravity="center"
            android:orientation="horizontal"
            android:layout_marginTop="20dp">


            <Button
                android:id="@+id/btnchoose"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="CHOOSE" />

            <Button
                android:id="@+id/btnexit2"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginLeft="50dp"
                android:text="EXIT" />

            <Button
                android:id="@+id/btnnext"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginLeft="50dp"
                android:text="NEXT"  />
        </LinearLayout>

    </LinearLayout>
</android.support.constraint.ConstraintLayout>
/////////////////////////////////main//////////////////////////
package com.example.login;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

public class MainActivity2 extends AppCompatActivity {
    CheckBox java, c, android;
    RadioGroup rg;
    RadioButton rnam, rnu;
    Button choose, exit, next;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        java = findViewById(R.id.cbj);
        c = findViewById(R.id.cbc);
        android = findViewById(R.id.cban);
        rg = findViewById(R.id.radioGroup);
        choose = findViewById(R.id.btnchoose);
        choose.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                StringBuilder result = new StringBuilder();
                int ID = rg.getCheckedRadioButtonId();
                RadioButton rb = MainActivity2.this.findViewById(ID);
                if(rb == null){
                    result.append("Ban chua chon gioi tinh");
                }
                else{
                    result.append("Gioi tinh ").append(rb.getText()).append("\n");
                }
                if(java.isChecked()||c.isChecked()||android.isChecked()){
                    result.append("Mon hoc :");
                    if(java.isChecked()){result.append("Java");}
                    if(c.isChecked()){result.append("C#");}
                    if(android.isChecked()){result.append("android");}
                }
                else {
                    result.append("Ban chua chon mon hoc");
                }
                Toast.makeText(MainActivity2.this, result.toString(), Toast.LENGTH_SHORT).show();
            }

        });
        exit = findViewById(R.id.btnexit2);
        exit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });
        next = findViewById(R.id.btnnext);
        next.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(MainActivity2.this, MainActivity3.class);
                startActivity(i);
            }
        });
    }
}
///////////////////////////hienthilistvew/////////////////////////////////
<?xml version="1.0" encoding="utf-8"?>
<android.support.constraint.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity3">
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical">


        <TextView
            android:id="@+id/textView"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="50dp"
            android:text="CAC LOAI QUA"
            android:textSize="30dp" />

        <ListView
            android:id="@+id/lv1"
            android:layout_width="match_parent"
            android:layout_height="413dp"
            android:layout_marginTop="20dp"
            android:background="@color/white" />
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:gravity="center"
            android:orientation="horizontal"
            android:layout_marginTop="20dp">

        </LinearLayout>

        <Button
            android:id="@+id/btntiep"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="NEXT" />
    </LinearLayout>

</android.support.constraint.ConstraintLayout>
/////////////////////////////////main////////////////////////////////////
package com.example.login;

import android.app.AlertDialog;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.Arrays;

public class MainActivity3 extends AppCompatActivity {
    ArrayList<String> dsq = new ArrayList<>(Arrays.asList("TAO","LE","MO","MAN","DAO"));
    ListView lv;
    Button cancel, tiep;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main3);
        lv = findViewById(R.id.lv1);
        hienThiLV();
        lv.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                Toast.makeText(MainActivity3.this, "Ban da chon"+"\t"+dsq.get(i), Toast.LENGTH_SHORT).show();
                new AlertDialog.Builder(MainActivity3.this)
                        .setTitle("Thông báo")
                        .setMessage(dsq.get(i))
                        .setPositiveButton("OK",(dialogInterface, i1) ->dialogInterface.dismiss())
                        .show()
                ;
            }
        });
        tiep = findViewById(R.id.btntiep);
        tiep.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(MainActivity3.this, MainActivity4.class);
                startActivity(i);
            }
        });
    }
    private void hienThiLV() {
        ArrayAdapter<String> array = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1,dsq);
        lv.setAdapter(array);
    }
}
//////////////////////////////////Json/////////////////////
<?xml version="1.0" encoding="utf-8"?>
<android.support.constraint.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity4">
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical">

        <Button
            android:id="@+id/btnjson"
            android:layout_width="match_parent"
            android:layout_height="75dp"
            android:text="Hiển thị JSON" />

        <ListView
            android:id="@+id/lvjson"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
    </LinearLayout>

</android.support.constraint.ConstraintLayout>
////////////////////////////////main////////////////////////////////////
package com.example.login;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class MainActivity4 extends AppCompatActivity {
    String json_data = "[\n" +
            "{\n" +
            "\"ten\":\"Hoang ne\",\n" +
            "\"luong\":\"65346476\"\n" +
            "},\n" +
            "{\n" +
            "\"ten\":\"xuan\",\n" +
            "\"luong\":\"9876544\"\n" +
            "}\n" +
            "]";
    Button Hienthi;
    ListView lvjs;
    ArrayList<congNhan> dsgv = new ArrayList<>();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main4);
        Hienthi = findViewById(R.id.btnjson);
        Hienthi.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                hienthijs();
            }
        });
        lvjs = findViewById(R.id.lvjson);
        Docjson();
    }
    private void hienthijs() {
        ArrayAdapter<congNhan> adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1,dsgv);
        lvjs.setAdapter(adapter);
    }

    private void Docjson() {
        try {
            JSONArray jsonArray = new JSONArray(json_data);
            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject object = jsonArray.getJSONObject(i);
                String ten = object.getString("ten");
                String luong = object.getString("luong");
                congNhan gv = new congNhan(ten, luong);
                dsgv.add(gv);

            }
        } catch (JSONException e) {
            throw new RuntimeException(e);
        }
    }
}
////////////////////////classCongnha///////////////////////////////////
package com.example.login;

public class congNhan {
    private String ten,luong;

    @Override
    public String toString() {
        return
                "\nTên công nhân:" + ten +
                "\nLương:" + luong
                ;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public String getLuong() {
        return luong;
    }

    public void setLuong(String luong) {
        this.luong = luong;
    }

    public congNhan(String ten, String luong) {
        this.ten = ten;
        this.luong = luong;
    }

    public congNhan() {
    }
}

//////////////////////////////bai co them sua xoa////////////////////////

<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <EditText
        android:id="@+id/edUser"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:ems="10"
        android:inputType="text"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.666"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintVertical_bias="0.138" />

    <TextView
        android:id="@+id/textView2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Username:"
        android:textSize="20sp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.05"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintVertical_bias="0.154" />

    <TextView
        android:id="@+id/textView3"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Password:"
        android:textSize="20sp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.056"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintVertical_bias="0.224" />

    <EditText
        android:id="@+id/edPassword"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:ems="10"
        android:inputType="textPassword"
        android:textColor="@color/black"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.666"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintVertical_bias="0.22" />

    <Button
        android:id="@+id/btnLogin"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Login"
        android:textSize="16sp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.683"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintVertical_bias="0.317" />

    <Button
        android:id="@+id/btnExit"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Exit"
        android:textSize="16sp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.213"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintVertical_bias="0.317" />

    <TextView
        android:id="@+id/textView"
        android:layout_width="176dp"
        android:layout_height="51dp"
        android:text="Login Form"
        android:textSize="34sp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.497"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintVertical_bias="0.023" />

</androidx.constraintlayout.widget.ConstraintLayout>
////////////////////////////main///////////////////////////
package com.example.kiemtratonghop1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    private EditText edUser,edPassword;
    private Button btnExit,btnLogin;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        edUser = findViewById(R.id.edUser);
        edPassword= findViewById(R.id.edPassword);
        btnLogin = findViewById(R.id.btnLogin);
        btnExit = findViewById(R.id.btnExit);
        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String user = edUser.getText().toString();
                String password = edPassword.getText().toString();
                if(user.equals("taq")&& password.equals("117")){
                    Intent intent = new Intent(MainActivity.this, Danhsachgiangvien.class);
                    startActivity(intent);
                }else {
                    Toast.makeText(MainActivity.this, "Sai Tài khoản hoặc mật khẩu!!hãy nhập lại", Toast.LENGTH_SHORT).show();
                }
            }
        });
        btnExit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finishAffinity();
            }
        });
    }
}
///////////////////////////////////////dsgiangvien////////////////////////////////
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp">

    <TextView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Bài thi"
        android:textSize="18sp"
        android:textStyle="bold" />

    <TextView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="DANH SÁCH GIẢNG VIÊN"
        android:textSize="16sp"
        android:textStyle="bold"
        android:layout_marginTop="16dp" />

    <EditText
        android:id="@+id/edTengv"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Nhập tên giảng viên" />

    <EditText
        android:id="@+id/edSdt"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Nhập số điện thoại" />

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:layout_marginTop="8dp">

        <Button
            android:id="@+id/btnThem"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:text="THÊM"

            />


        <Button
            android:id="@+id/btnXoa"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:text="XÓA" />

        <Button
            android:id="@+id/btnTiep"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:text="TIẾP" />

    </LinearLayout>

    <ListView
        android:id="@+id/lstData"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="16dp" />

</LinearLayout>
/////////////////////main/////////////////////////////
package com.example.kiemtratonghop1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;

public class Danhsachgiangvien extends AppCompatActivity {
    private EditText edTengv, edSdt;
    private Button btnThem, btnXoa, btnTiep;
    private ListView lstData;
    private ArrayList<String> instructorList;
    private ArrayAdapter<String> adapter;
    private int selectedItemPosition = -1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_danhsachgiangvien);

        edTengv = findViewById(R.id.edTengv);
        edSdt = findViewById(R.id.edSdt);
        btnThem = findViewById(R.id.btnThem);
        btnXoa = findViewById(R.id.btnXoa);
        btnTiep = findViewById(R.id.btnTiep);
        lstData = findViewById(R.id.lstData);

        instructorList = new ArrayList<>();
        adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, instructorList);
        lstData.setAdapter(adapter);

        btnThem.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String user = edTengv.getText().toString();
                String sdt = edSdt.getText().toString();

                if (!user.isEmpty() && !sdt.isEmpty()) {
                    String instructor = user + "-" + sdt;
                    instructorList.add(instructor);
                    adapter.notifyDataSetChanged();
                    edTengv.setText("");
                    edSdt.setText("");

                    Toast.makeText(Danhsachgiangvien.this, "Đã Thêm Giảng Viên", Toast.LENGTH_LONG).show();
                } else {
                    Toast.makeText(Danhsachgiangvien.this, "Vui lòng nhập đầy đủ thông tin", Toast.LENGTH_LONG).show();
                }
            }
        });

        btnXoa.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (selectedItemPosition != -1) {
                    instructorList.remove(selectedItemPosition);
                    adapter.notifyDataSetChanged();
                    selectedItemPosition = -1;
                    Toast.makeText(Danhsachgiangvien.this, "Đã xoá giảng viên", Toast.LENGTH_LONG).show();
                } else {
                    Toast.makeText(Danhsachgiangvien.this, "Vui lòng chọn giảng viên để xoá", Toast.LENGTH_LONG).show();
                }
            }
        });

        lstData.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                selectedItemPosition = i;
                Toast.makeText(Danhsachgiangvien.this, "Đã Chọn " + instructorList.get(i), Toast.LENGTH_SHORT).show();
            }
        });

        btnTiep.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(Danhsachgiangvien.this, ReadJson.class);
                startActivity(intent);
            }
        });
    }
}