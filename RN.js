package com.example.mobileapp.data.presenter;

import android.util.Log;

import com.example.mobileapp.data.constract.ApiService;
import com.example.mobileapp.data.constract.BottomSheetConstract;
import com.example.mobileapp.data.model.Cart;
import com.example.mobileapp.data.model.Order;
import com.example.mobileapp.data.remote.RetrofitClient;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class BottomSheetPresenter implements BottomSheetConstract.IPresenter {
    private BottomSheetConstract.IView mView;
    private ApiService apiService;

    public BottomSheetPresenter(BottomSheetConstract.IView view) {
        mView = view;
        apiService = RetrofitClient.getClient().create(ApiService.class);
    }

    @Override
    public void setDataOrder(Order mOrder) {
        mView.onSetDataToOrderView(mOrder);

        // Gọi tới các phương thức để cập nhật Spiner và RecyclerView liên quan đến dữ liệu trong đơn hàng
        List<String> list = new ArrayList<>();
        list.add("Thanh toán khi nhận hàng");
        list.add("Chuyển khoản ngân hàng");
        list.add("Thanh toán qua ZaloPay");
        mView.onSetSpinnerAdapter(list);
        mView.onUpdateOrderRecyclerViewHeight();
    }
        });
    }
}
