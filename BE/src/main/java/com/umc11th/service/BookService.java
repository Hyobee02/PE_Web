package com.umc11th.service;

import com.umc11th.dto.BookResponse;
import com.umc11th.repository.BookJdbcRepository;
import com.umc11th.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service // 비즈니스 로직을 수행하는 메인 셰프 계층
@RequiredArgsConstructor
public class BookService {

    // 창고지기(Repository)를 생성자 주입으로 데려옵니다.
    private final BookRepository bookRepository;
    private final BookJdbcRepository bookJdbcRepository;

    @Transactional(readOnly = true)
    public List<BookResponse> getBooks() {
        return bookRepository.findAllByOrderByBookIdDesc().stream()
                .map(BookResponse::from)
                .toList();
    }

    public List<Map<String, Object>> getBooksByCategory(Long categoryId) {
        return bookJdbcRepository.findByCategoryId(categoryId);
    }

    public void createBook(Map<String, Object> body){
        bookJdbcRepository.save(body);
    }
}
