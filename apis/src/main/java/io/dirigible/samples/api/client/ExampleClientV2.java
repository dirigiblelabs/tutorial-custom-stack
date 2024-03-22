package io.dirigible.samples.api.client;

import java.util.Date;

import com.google.gson.Gson;

import io.dirigible.samples.api.domain.Example;
import io.dirigible.samples.api.domain.SubExample;
import io.dirigible.samples.api.domain.input.ExampleRequest;
import io.dirigible.samples.api.domain.output.ExampleResponse;

public class ExampleClientV2 {

	public String doExample(String requestAsString) {
		final var gson = new Gson();
		final var request = gson.fromJson(requestAsString, ExampleRequest.class);
		final var exampleResponse = new ExampleResponse();
		final var subexample = new SubExample().withDate(new Date());
		final var example = new Example().withId(request.getExampleId()).withName("Example Name");
		example.getSubexamples().add(subexample);
		exampleResponse.getExamples().add(example);
		return gson.toJson(exampleResponse);
	}

}
