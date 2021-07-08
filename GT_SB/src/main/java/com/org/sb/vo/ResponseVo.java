package com.org.sb.vo;

import lombok.Builder;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Builder
@Getter
public class ResponseVo {
    private final HttpStatus status;
    private final Object data;
    private final Object error;
}
