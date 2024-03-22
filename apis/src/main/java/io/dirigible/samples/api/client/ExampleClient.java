package io.dirigible.samples.api.client;

import java.time.ZonedDateTime;

import io.dirigible.samples.api.domain.Example;
import io.dirigible.samples.api.domain.SubExample;
import io.dirigible.samples.api.domain.input.ExampleRequest;
import io.dirigible.samples.api.domain.output.ExampleResponse;
import io.dirigible.samples.api.service.ExampleService;

public class ExampleClient implements ExampleService {

	@Override
	public ExampleResponse doExample(ExampleRequest request) {
		final var exampleResponse = new ExampleResponse();
		final var subexample = new SubExample().withDate(ZonedDateTime.now());
		final var example = new Example().withId(request.getExampleId()).withName("Example Name");
		example.getSubexamples().add(subexample);
		exampleResponse.getExamples().add(example);
		return exampleResponse;
	}

}
