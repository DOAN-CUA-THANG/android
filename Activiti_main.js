<?xml version="1.0" encoding="utf-8"?>
<android.support.constraint.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/textView3"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="28dp"
        android:text="ĐĂNG NHẬP"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginEnd="1dp"
        android:layout_marginBottom="10dp"
        android:text="Tên đăng nhập"
        app:layout_constraintBottom_toBottomOf="@+id/txtTenDang"
        app:layout_constraintEnd_toStartOf="@+id/txtTenDang"
        app:layout_constraintStart_toStartOf="parent" />

    <TextView
        android:id="@+id/textView2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="20dp"
        android:text="Mật khẩu"
        app:layout_constraintBaseline_toBaselineOf="@+id/txtMatkhau"
        app:layout_constraintEnd_toStartOf="@+id/txtMatkhau"
        app:layout_constraintStart_toStartOf="parent" />

    <Button
        android:id="@+id/btnDangNhap"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="63dp"
        android:backgroundTint="#03A9F4"
        android:text="Đăng nhập"
        app:layout_constraintBaseline_toBaselineOf="@+id/btnThoat"
        app:layout_constraintStart_toStartOf="parent" />

    <Button
        android:id="@+id/btnThoat"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="11dp"
        android:layout_marginTop="43dp"
        android:text="Thoát"
        app:layout_constraintStart_toEndOf="@+id/btnDangNhap"
        app:layout_constraintTop_toBottomOf="@+id/txtMatkhau" />

    <EditText
        android:id="@+id/txtTenDang"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="12dp"
        android:layout_marginEnd="26dp"
        android:ems="10"
        android:inputType="text"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toEndOf="@+id/textView"
        app:layout_constraintTop_toBottomOf="@+id/textView3" />

    <EditText
        android:id="@+id/txtMatkhau"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="22dp"
        android:layout_marginEnd="24dp"
        android:ems="10"
        android:inputType="textPassword"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toEndOf="@+id/textView2"
        app:layout_constraintTop_toBottomOf="@+id/txtTenDang" />

</android.support.constraint.ConstraintLayout>

//////////////////////////////////////////Main///////////////////////////////////
package com.example.chuan_nhat;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    Button btnDangNHap, btnThoat;
    EditText txtTenDangNhap, txtMatKhau;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        //tham chiếu
        btnThoat = findViewById(R.id.btnThoat);
        btnDangNHap = findViewById(R.id.btnDangNhap);
        txtTenDangNhap = findViewById(R.id.txtTenDang);
        txtMatKhau = findViewById(R.id.txtMatkhau);
        btnThoat.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                System.exit(1);
            }
        });
        btnDangNHap.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String tendangnhap = txtTenDangNhap.getText().toString();
                String matkhau = txtMatKhau.getText().toString();
                if(tendangnhap.equals("Admin") && matkhau.equals("Password")){
                    Intent intent = new Intent(MainActivity.this,Dukhach.class);
                    startActivity(intent);
                }else
                {
                    Toast.makeText(MainActivity.this, "Nhập sai tên hoặc mật khẩu", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}

///////////////////////////////////////////Dukhach////////////////////////////////
<?xml version="1.0" encoding="utf-8"?>
<android.support.constraint.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".Dukhach">

    <TextView
        android:id="@+id/textView4"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="120dp"
        android:layout_marginTop="22dp"
        android:layout_marginEnd="119dp"
        android:text="THÔNG TIN DU KHÁCH"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="@+id/textView5"
        app:layout_constraintTop_toTopOf="parent" />

    <EditText
        android:id="@+id/txtTen"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="19dp"
        android:layout_marginBottom="16dp"
        android:ems="10"
        android:hint="Nhập tên"
        android:inputType="text"
        app:layout_constraintBottom_toTopOf="@+id/textView5"
        app:layout_constraintStart_toStartOf="@+id/textView5" />

    <TextView
        android:id="@+id/textView5"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="27dp"
        android:layout_marginTop="131dp"
        android:text="Giới tính"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <RadioGroup
        android:id="@+id/radioGroup"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="28dp"
        android:layout_marginBottom="15dp"
        android:orientation="horizontal"
        app:layout_constraintBottom_toTopOf="@+id/textView6"
        app:layout_constraintStart_toStartOf="@+id/textView6">

        <RadioButton
            android:id="@+id/rdNam"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="Nam" />

        <RadioButton
            android:id="@+id/rdNu"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Nữ" />
    </RadioGroup>

    <TextView
        android:id="@+id/textView6"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="27dp"
        android:layout_marginTop="66dp"
        android:text="Sở thích"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/textView5" />

    <CheckBox
        android:id="@+id/ckXemPhim"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="16dp"
        android:layout_marginTop="27dp"
        android:text="Xem phim"
        app:layout_constraintStart_toStartOf="@+id/textView6"
        app:layout_constraintTop_toBottomOf="@+id/textView6" />

    <CheckBox
        android:id="@+id/ckNgheNhac"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="13dp"
        android:text="Nghe nhạc"
        app:layout_constraintStart_toStartOf="@+id/ckXemPhim"
        app:layout_constraintTop_toBottomOf="@+id/ckXemPhim" />

    <CheckBox
        android:id="@+id/ckLuotweb"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="32dp"
        android:text="Lướt web"
        app:layout_constraintStart_toStartOf="@+id/ckNgheNhac"
        app:layout_constraintTop_toBottomOf="@+id/ckNgheNhac" />

    <CheckBox
        android:id="@+id/ckMuaSam"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="15dp"
        android:text="Mua sắm"
        app:layout_constraintStart_toStartOf="@+id/ckLuotweb"
        app:layout_constraintTop_toBottomOf="@+id/ckLuotweb" />

    <Button
        android:id="@+id/btnTroLai"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="6dp"
        android:layout_marginEnd="5dp"
        android:text="Trở lại"
        app:layout_constraintBaseline_toBaselineOf="@+id/btnChon"
        app:layout_constraintEnd_toEndOf="@+id/ckNgheNhac"
        app:layout_constraintStart_toStartOf="@+id/ckMuaSam" />

    <Button
        android:id="@+id/btnChon"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="61dp"
        android:layout_marginEnd="17dp"
        android:text="Chọn"
        app:layout_constraintEnd_toStartOf="@+id/btnTiepList"
        app:layout_constraintTop_toBottomOf="@+id/ckMuaSam" />

    <Button
        android:id="@+id/btnTiepList"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginEnd="40dp"
        android:text="Tiếp"
        app:layout_constraintBaseline_toBaselineOf="@+id/btnChon"
        app:layout_constraintEnd_toEndOf="parent" />
</android.support.constraint.ConstraintLayout>

/////////////////////////////Main///////////////////////////////////////

package com.example.chuan_nhat;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.Toast;

public class Dukhach extends AppCompatActivity {
    Button btnTroLai, btnChon, btnTiep;
    EditText txtTen;
    RadioButton rdNam, rdNu;
    CheckBox ckXemPhim, ckNgheNhac,ckLuotWeb, ckMuaSam;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dukhach);
        //tham chiếu
        btnChon = findViewById(R.id.btnChon);
        btnTroLai = findViewById(R.id.btnTroLai);
        btnTiep = findViewById(R.id.btnTiepList);
        txtTen = findViewById(R.id.txtTen);
        rdNam = findViewById(R.id.rdNam);
        rdNu = findViewById(R.id.rdNu);
        ckLuotWeb = findViewById(R.id.ckLuotweb);
        ckXemPhim = findViewById(R.id.ckXemPhim);
        ckNgheNhac = findViewById(R.id.ckNgheNhac);
        ckMuaSam = findViewById(R.id.ckMuaSam);
        btnTiep.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Dukhach.this, Khachhang.class);
                startActivity(intent);
            }
        });
        btnTroLai.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Dukhach.this, MainActivity.class);
                startActivity(intent);
            }
        });
        btnChon.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String ten = txtTen.getText().toString();
                String gioitinh = "";
                if(rdNu.isChecked()){
                    gioitinh = "Nữ";
                }
                if(rdNam.isChecked()){
                    gioitinh = "Nam";
                }
                String sothich = "";
                if(ckXemPhim.isChecked()){
                    sothich += "Xem phim, ";
                }
                if(ckLuotWeb.isChecked()){
                    sothich += "Lướt web, ";
                }
                if(ckNgheNhac.isChecked()){
                    sothich += "Nghe nhạc, ";
                }
                if(ckMuaSam.isChecked()){
                    sothich += "Mua sắm, ";
                }
                if(ten.isEmpty()||sothich.equals("")||gioitinh.equals("")){
                    Toast.makeText(Dukhach.this, "Bạn chưa nhập đủ dữ liệu", Toast.LENGTH_SHORT).show();
                }
                else {
                    Toast.makeText(Dukhach.this, "Bạn có:" +ten+", " + gioitinh+ ", " + sothich, Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}

///////////////////////////////////////Khachhang/////////////////////////////////////

<?xml version="1.0" encoding="utf-8"?>
<android.support.constraint.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".Khachhang">

    <TextView
        android:id="@+id/textView7"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="16dp"
        android:text="DANH SÁCH KHÁCH HÀNG"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <ListView
        android:id="@+id/lstkh"
        android:layout_width="409dp"
        android:layout_height="300dp"
        android:layout_marginTop="16dp"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/textView7" />

    <Button
        android:id="@+id/btnTrolaiDukhach"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="87dp"
        android:layout_marginTop="16dp"
        android:text="Trở lại"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/lstkh" />

    <Button
        android:id="@+id/btnTiepJson"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="24dp"
        android:layout_marginTop="16dp"
        android:text="Tiếp"
        app:layout_constraintStart_toEndOf="@+id/btnTrolaiDukhach"
        app:layout_constraintTop_toBottomOf="@+id/lstkh" />

</android.support.constraint.ConstraintLayout>

//////////////////////////////MAin//////////////////////////////

package com.example.chuan_nhat;

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

public class Khachhang extends AppCompatActivity {
    ArrayList<String> dskh = new ArrayList<>(Arrays.asList("Nguyễn Văn A-09878987",
            "Nguyễn Thị B-0987655","Nguyễn Trọng Tại-0987654","Đoàn Văn Vươn-0897876554"));

    Button btnTrolai, btnTiep;
    ListView listView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_khachhang);
        //tham chiếu
        listView = findViewById(R.id.lstkh);
        btnTiep = findViewById(R.id.btnTiepJson);
        btnTrolai = findViewById(R.id.btnTrolaiDukhach);
        //hiển thị list
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1,dskh);
        listView.setAdapter(adapter);
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Toast.makeText(Khachhang.this, "Bạn chọn " + dskh.get(position), Toast.LENGTH_SHORT).show();
            }
        });
        btnTiep.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Khachhang.this, Sanpham.class);
                startActivity(intent);
            }
        });
        btnTrolai.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Khachhang.this, Dukhach.class);
                startActivity(intent);
            }
        });
    }
}

/////////////////////////////////////Sanpham///////////////////////////////////////

<?xml version="1.0" encoding="utf-8"?>
<android.support.constraint.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".Sanpham">

    <Button
        android:id="@+id/btnHienThi"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="30dp"
        android:text="Hiển thị Json "
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <ListView
        android:id="@+id/lstJson"
        android:layout_width="409dp"
        android:layout_height="651dp"
        android:layout_marginTop="16dp"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/btnHienThi" />

</android.support.constraint.ConstraintLayout>

//////////////////////Main/////////////////////////////

package com.example.chuan_nhat;

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

public class Sanpham extends AppCompatActivity {
    String json_data= "[\n" +
            "{\n" +
            "\"ma\":\"sp1\",\n"+
            "\"ten\":\"máy tính del 1103\",\n"+
            "\"gia\":\"10.000.000\",\n"+
            "\"loai\":\"máy tính\"\n"+
            "},\n"+
            "{\n" +
            "\"ma\":\"sp2\",\n"+
            "\"ten\":\"Diện thoại ip 15\",\n"+
            "\"gia\":\"20.000.000\",\n"+
            "\"loai\":\"điện thoại\"\n"+
            "},\n"+
            "{\n" +
            "\"ma\":\"sp3\",\n"+
            "\"ten\":\"máy tính bảng 11\",\n"+
            "\"gia\":\"10.000.000\",\n"+
            "\"loai\":\"máy tính bảng\"\n"+
            "}\n"+

            "]";

    Button btnHienThi;
    ListView lstJson;
    ArrayList<String> dssp = new ArrayList<>();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sanpham);
        btnHienThi = findViewById(R.id.btnHienThi);
        lstJson = findViewById(R.id.lstJson);
        btnHienThi.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    JSONArray array = new JSONArray(json_data);
                    for (int i = 0; i < array.length(); i++) {
                        JSONObject object = array.getJSONObject(i);
                        String ma = object.getString("ma");
                        String ten = object.getString("ten");
                        String gia = object.getString("gia");
                        String loai = object.getString("loai");
                        String sp = ma+", " + ten+", " + gia + ", " + loai;
                        dssp.add(sp);
                    }
                    ArrayAdapter<String> adapter = new ArrayAdapter<>(Sanpham.this, android.R.layout.simple_list_item_1,dssp);
                    lstJson.setAdapter(adapter);
                } catch (JSONException e) {
                    throw new RuntimeException(e);
                }
            }
        });
    }
}