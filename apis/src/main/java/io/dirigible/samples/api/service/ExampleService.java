package io.dirigible.samples.api.service;

import io.dirigible.samples.api.domain.input.ExampleRequest;
import io.dirigible.samples.api.domain.output.ExampleResponse;

public interface ExampleService {

	ExampleResponse doExample(ExampleRequest request);
}
